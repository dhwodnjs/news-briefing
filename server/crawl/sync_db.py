from pymongo import MongoClient
import csv
import os
from datetime import datetime


def sync_today_news_to_db():
    today = datetime.today().strftime('%Y%m%d')

    dir_path = 'server/crawl/output'

    filename_list = []
    for filename in sorted(os.listdir(dir_path)):
        if filename.endswith(".csv") and today in filename:
            filename_list.append(os.path.join(dir_path, filename))

    print(f'filename_list: {filename_list}')

    client = MongoClient('localhost', 27017)
    db = client.news_data
    collection = db.today_data

    for filename in filename_list:
        with open(filename, 'r') as file:
            rows = list(csv.reader(file))
            num_rows = len(rows)

            for i, row in enumerate(rows):
                if i % (num_rows // 10) == 0:
                    print(f'[{filename}] [{i}|{num_rows}] {i / num_rows * 100:.2f}%')
                date, category_name, press, title, body, content_url, image = row

                document = {
                    'date': date,
                    'category_name': category_name,
                    'press': press,
                    'title': title,
                    'body': body,
                    'content_url': content_url,
                    'image': image
                }

                collection.insert_one(document)


if __name__ == '__main__':
    sync_today_news_to_db()
