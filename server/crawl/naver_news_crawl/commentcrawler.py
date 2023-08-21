#!/usr/bin/env python
# -*- coding: utf-8, euc-kr -*-

import os
import platform
import calendar
from typing import List, Union
import requests
from urllib.parse import urlparse, parse_qs
import re
import json

import random
from time import sleep
from bs4 import BeautifulSoup
from multiprocessing import Process
from .exceptions import *
from .articleparser import ArticleParser
from .writer import Writer


class CommentCrawler(object):
    def __init__(self):
        self.categories = {
            '정치': 100, '경제': 101, '사회': 102, '생활문화': 103, '세계': 104, 'IT과학': 105, '오피니언': 110, 'politics': 100,
            'economy': 101, 'society': 102, 'living_culture': 103, 'world': 104, 'IT_science': 105, 'opinion': 110}
        self.selected_categories = []
        self.date = {'start_year': 0, 'start_month': 0,
                     'start_day': 0, 'end_year': 0, 'end_month': 0, 'end_day': 0}
        self.user_operating_system = str(platform.system())
        self.crawled_users = set()

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

        args = [start_year, start_month, start_day,
                end_year, end_month, end_day]

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
                    totalpage = ArticleParser.find_news_totalpage(
                        url + "&page=10000")
                    for page in range(1, totalpage + 1):
                        made_urls.append(url + "&page=" + str(page))
        return made_urls

    @staticmethod
    def get_url_data(url, max_tries=5, headers={'User-Agent': 'Mozilla/5.0'}):
        remaining_tries = int(max_tries)
        while remaining_tries > 0:
            try:
                return requests.get(url, headers=headers)
            except requests.exceptions:
                sleep(random.uniform(0.1, 1))
            remaining_tries = remaining_tries - 1
        raise ResponseTimeout()

    def crawling(self, category_name: str) -> None:
        print(f"{category_name} PID: {os.getpid()}")

        writer = Writer(category='Comment',
                        article_category=category_name, date=self.date)
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
        post_elements = document.select(
            '.newsflash_body .type06_headline li dl')
        post_elements.extend(document.select('.newsflash_body .type06 li dl'))

        post_urls = [elem.a.get('href') for elem in post_elements]
        for content_url in post_urls:
            # content_url = self.__change_url_to_comment(content_url)
            content_response = self.get_url_data(content_url)
            self.process_content_url(
                 content_url, writer, category_name)

    def process_content_url(self,
                            content_url: str,
                            writer: Writer,
                            category_name: str) -> None:
        sleep(random.uniform(0.1, 1))
        try:
            parsed_data, count = self._gather_comment_user_from_article(content_url)
            data =  self._extract_comment_from_user(parsed_data,
                                                    category_name) if count > 0 else None
            row = [data['userId'], data['category_name'], data['presses'], data['titles'], data['article_url']]
            writer.write_row(row)
        except (TitleParseError, BodyParseError, PressParseError, DateParseError) as e:
            print(f"Error parsing content from {content_url}: {str(e)}")
            pass
        except TypeError as e:
            pass
        except Exception as e:
            print(f"Exception! {content_url}: {str(e)}")
            pass
        

    def _extract_comment_from_user(self, 
                                   parsed_data : dict,
                                   category_name: str,
                                   ):
        comments_nums = []
        articles_ids = []
        for comments in parsed_data['result']['commentList']:
            comments_nums.append(comments['commentNo'])
            articles_ids.append(comments['objectId'])
    
        for comments_num, comments_id in zip(comments_nums, articles_ids):
            comments_id = comments_id.replace(",", "%2C")
            first_value, second_value = comments_id.split("%2C")
            first_value = first_value.replace("news", "")
            url = f"https://apis.naver.com/commentBox/cbox/web_naver_user_info_jsonp.json?ticket=news&pool=cbox5&lang=ko&country=KR&objectId={comments_id}&commentNo={comments_num}"
            header = {
                'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
                'accept' : "*/*",
                'accept-encoding' : 'gzip, deflate, br',
                'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
                'referer' : f'https://n.news.naver.com/mnews/article/{first_value}/{second_value}',
            }
            html = requests.get(url, headers = header).text
            start_index = html.index('(') + 1
            end_index = html.rindex(')')
            json_data = html[start_index:end_index]

            parsed_data = json.loads(json_data)
            comment_list = parsed_data['result']['commentList']
            
            titles = []
            article_url = []
            presses = []
            category_name = []

            userId = comment_list[0]['userIdNo']
            if userId in self.crawled_users:
                print("Already Crawled User")
                continue

            for comments in comment_list:
                category_name.append(comments['objectCategoryName'])
                presses.append(comments['objectPublisherName'])
                titles.append(comments['objectTitle'])
                article_url.append(comments['objectUrl'])

            data = {
                'userId' : userId,
                'category_name' : category_name,
                'presses' : presses,
                'titles' : titles,
                'article_url' : article_url,
            }

            return data


    def _gather_comment_user_from_article(self, 
                    content_url: str):
        matches = re.search(r"/(\d+)/(\d+)\?", content_url)
        first_value, second_value = matches.group(1), matches.group(2)
        url = f"https://apis.naver.com/commentBox/cbox/web_naver_list_jsonp.json?ticket=news&pool=cbox5&lang=ko&country=KR&objectId=news{first_value}%2C{second_value}"
        header = {
                'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
                'accept' : "*/*",
                'accept-encoding' : 'gzip, deflate, br',
                'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
                'referer' : content_url,
            }
        html = requests.get(url=url, headers = header).text
        start_index = html.index('(') + 1
        end_index = html.rindex(')')
        json_data = html[start_index:end_index]
        parsed_data = json.loads(json_data)
        count = parsed_data['result']['count']['comment']
        return parsed_data, count


    def __log_process(self,
                      index: int,
                      total: int,
                      category_name: str = ""):
        # if every 10% progress, print log
        print(
            f"Processing {category_name} [{index}/{total}] {index / total * 100:.2f}% Done")

