#!/usr/bin/env python
# -*- coding: utf-8, euc-kr -*-

import os
import platform
import calendar
from typing import List
import requests

import random
from time import sleep
from bs4 import BeautifulSoup
from multiprocessing import Process
from .exceptions import *
from .articleparser import ArticleParser
from .writer import Writer


class ArticleCrawler(object):
    def __init__(self):
        self.categories = {
            '정치': 100, '경제': 101, '사회': 102, '생활문화': 103, '세계': 104, 'IT과학': 105, '오피니언': 110, 'politics': 100,
            'economy': 101, 'society': 102, 'living_culture': 103, 'world': 104, 'IT_science': 105, 'opinion': 110}
        self.selected_categories = []
        self.date = {'start_year': 0, 'start_month': 0, 'start_day': 0, 'end_year': 0, 'end_month': 0, 'end_day': 0}
        self.user_operating_system = str(platform.system())

    def set_category(self, *args):
        for key in args:
            if self.categories.get(key) is None:
                raise InvalidCategory(key)
        self.selected_categories = args

    def set_date_range(self, start_date: str, end_date: str):
        start = list(map(int, start_date.split("-")))
        end = list(map(int, end_date.split("-")))

        # Setting Start Date
        if len(start) == 1:  # Input Only Year
            start_year = start[0]
            start_month = 1
            start_day = 1
        elif len(start) == 2:  # Input Year and month
            start_year, start_month = start
            start_day = 1
        elif len(start) == 3:  # Input Year, month and day
            start_year, start_month, start_day = start

        # Setting End Date
        if len(end) == 1:  # Input Only Year
            end_year = end[0]
            end_month = 12
            end_day = 31
        elif len(end) == 2:  # Input Year and month
            end_year, end_month = end
            end_day = calendar.monthrange(end_year, end_month)[1]
        elif len(end) == 3:  # Input Year, month and day
            end_year, end_month, end_day = end

        args = [start_year, start_month, start_day, end_year, end_month, end_day]

        if start_year > end_year:
            raise InvalidYear(start_year, end_year)
        if start_month < 1 or start_month > 12:
            raise InvalidMonth(start_month)
        if end_month < 1 or end_month > 12:
            raise InvalidMonth(end_month)
        if start_day < 1 or calendar.monthrange(start_year, start_month)[1] < start_day:
            raise InvalidDay(start_day)
        if end_day < 1 or calendar.monthrange(end_year, end_month)[1] < end_day:
            raise InvalidDay(end_day)
        if start_year == end_year and start_month > end_month:
            raise OverbalanceMonth(start_month, end_month)
        if start_year == end_year and start_month == end_month and start_day > end_day:
            raise OverbalanceDay(start_day, end_day)

        for key, date in zip(self.date, args):
            self.date[key] = date
        print(self.date)

    def start(self):
        # MultiProcess 크롤링 시작
        for category_name in self.selected_categories:
            proc = Process(target=self.crawling, args=(category_name,))
            proc.start()

    @staticmethod
    def make_news_page_url(category_url, date):
        made_urls = []
        for year in range(date['start_year'], date['end_year'] + 1):
            if date['start_year'] == date['end_year']:
                target_start_month = date['start_month']
                target_end_month = date['end_month']
            else:
                if year == date['start_year']:
                    target_start_month = date['start_month']
                    target_end_month = 12
                elif year == date['end_year']:
                    target_start_month = 1
                    target_end_month = date['end_month']
                else:
                    target_start_month = 1
                    target_end_month = 12

            for month in range(target_start_month, target_end_month + 1):
                if date['start_month'] == date['end_month']:
                    target_start_day = date['start_day']
                    target_end_day = date['end_day']
                else:
                    if year == date['start_year'] and month == date['start_month']:
                        target_start_day = date['start_day']
                        target_end_day = calendar.monthrange(year, month)[1]
                    elif year == date['end_year'] and month == date['end_month']:
                        target_start_day = 1
                        target_end_day = date['end_day']
                    else:
                        target_start_day = 1
                        target_end_day = calendar.monthrange(year, month)[1]

                for day in range(target_start_day, target_end_day + 1):
                    if len(str(month)) == 1:
                        month = "0" + str(month)
                    if len(str(day)) == 1:
                        day = "0" + str(day)

                    # 날짜별로 Page Url 생성
                    url = category_url + str(year) + str(month) + str(day)

                    # totalpage는 네이버 페이지 구조를 이용해서 page=10000으로 지정해 totalpage를 알아냄
                    # page=10000을 입력할 경우 페이지가 존재하지 않기 때문에 page=totalpage로 이동 됨 (Redirect)
                    totalpage = ArticleParser.find_news_totalpage(url + "&page=10000")
                    for page in range(1, totalpage + 1):
                        made_urls.append(url + "&page=" + str(page))
        return made_urls

    @staticmethod
    def get_url_data(url, max_tries=5):
        remaining_tries = int(max_tries)
        while remaining_tries > 0:
            try:
                return requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
            except requests.exceptions:
                sleep(random.uniform(0.1, 1))
            remaining_tries = remaining_tries - 1
        raise ResponseTimeout()

    def crawling(self, category_name: str) -> None:
        print(f"{category_name} PID: {os.getpid()}")

        writer = Writer(category='Article', article_category=category_name, date=self.date)
        target_urls = self.generate_target_urls(category_name)
        for i, url in enumerate(target_urls):
            self.__log_process(i * 20, len(target_urls) * 20, category_name)
            self.process_target_url(url, writer, category_name)

        writer.close()

    def generate_target_urls(self, category_name: str) -> List[str]:
        url_format = f'http://news.naver.com/main/list.nhn?mode=LSD&mid=sec&sid1={self.categories.get(category_name)}&date='
        target_urls = self.make_news_page_url(url_format, self.date)
        print(f'{category_name} Urls are generated')
        return target_urls

    def process_target_url(self, url: str, writer: Writer, category_name: str) -> None:
        response = self.get_url_data(url)
        if response.status_code != 200:
            print(f"Request status code : {response.status_code}")
            return

        document = BeautifulSoup(response.content, 'html.parser')
        post_elements = document.select('.newsflash_body .type06_headline li dl')
        post_elements.extend(document.select('.newsflash_body .type06 li dl'))

        post_urls = [elem.a.get('href') for elem in post_elements]
        for content_url in post_urls:
            content_response = self.get_url_data(content_url)
            content_document = BeautifulSoup(content_response.content, 'html.parser')
            self.process_content_url(content_document, content_url, writer, category_name)

    def process_content_url(self,
                            content_document: BeautifulSoup,
                            content_url: str,
                            writer: Writer,
                            category_name: str) -> None:
        sleep(random.uniform(0.1, 1))
        try:
            image = self._extract_img_from_content(content_document)
            title = self._extract_title_from_content(content_document)
            body = self._extract_body_from_content(content_document)
            press = self._extract_press_from_content(content_document)
            date = self._extract_time_from_content(content_document)
            category_id = self.categories.get(category_name)
            if image and title and body and press and date:
                writer.write_row([date, category_name, press, title, body, content_url, image, category_id])
        except (TitleParseError, BodyParseError, PressParseError, DateParseError) as e:
            print(f"Error parsing content from {content_url}: {str(e)}")

    def _extract_img_from_content(self,
                                  content_document: BeautifulSoup):
        tag_image = content_document.find('meta', {'property': 'og:image'})
        if tag_image:
            return tag_image['content']
        raise ImageParseError("Couldn't find article image")

    def _extract_title_from_content(self,
                                    content_document: BeautifulSoup):
        tag_headline = content_document.find('meta', {'property': 'og:title'})
        if tag_headline:
            return tag_headline["content"]
        else:
            tag_headline = content_document.find_all('h2', {'id': 'title_area'}, {'class': 'media_end_head_headline'})
            title = tag_headline.get('content')
            if title:
                return title
            raise TitleParseError("Couldn't find title")

    def _extract_body_from_content(self,
                                   content_document: BeautifulSoup):
        article_content_tags = content_document.find_all('div', {'id': 'newsct_article'})
        if article_content_tags:
            return ArticleParser.clear_content(str(article_content_tags[0].find_all(text=True)))
        raise BodyParseError("Couldn't find article content")

    def _extract_press_from_content(self,
                                    content_document: BeautifulSoup):
        tag_press = content_document.find_all('meta', {'property': 'og:article:author'})
        press = tag_press[0].get('content') if tag_press else None
        if "네이버" in press:
            press = press.replace("네이버", "").strip()
        if "|" in press:
            press = press.replace("|", "").strip()
        if press:
            return press
        raise PressParseError("Couldn't find press press")

    def _extract_time_from_content(self,
                                   content_document: BeautifulSoup):
        tag_time = content_document.find('span', {'class': 'media_end_head_info_datestamp_time _ARTICLE_DATE_TIME'})
        if tag_time:
            return tag_time['data-date-time']
        raise DateParseError("Couldn't find article timestamp")

    def __log_process(self,
                      index: int,
                      total: int,
                      category_name: str = None):
        # if every 10% progress, print log
        print(f"Processing {category_name} [{index}/{total}] {index / total * 100:.2f}% Done")


if __name__ == "__main__":
    Crawler = ArticleCrawler()
    Crawler.set_category("IT과학")
    Crawler.set_date_range("2023-08-15", "2023-08-16")
    Crawler.start()
