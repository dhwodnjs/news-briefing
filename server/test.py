from pymongo import MongoClient

category_to_id = {
    '정치': 100,
    '경제': 101,
    '사회': 102,
    '생활문화': 103,
    '세계': 104,
    'IT과학': 105,
    '오피니언': 110
}

client = MongoClient('localhost', 27017)
db = client.news_data
collection = db.today_data

for category, cat_id in category_to_id.items():
    collection.update_many({"category_name": category}, {"$set": {"category_id": cat_id}})

client.close()
