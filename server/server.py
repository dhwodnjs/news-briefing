import json
import os
import random
import pandas as pd
from typing import List, Optional

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles

from pymongo import MongoClient

from utils.request_genie import get_summary

# App Setting Section

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# when app start, connect to mongodb
colname = ["date", "category_name", "press", "title", "body", "content_url", "image"]
data = pd.read_csv("crawl\output\Article_IT과학_20230816_20230816.csv", names = colname)

@app.on_event("startup")
async def startup_db_client():
    app.mongodb_client = MongoClient('localhost', 27017)
    app.mongodb_db = app.mongodb_client.news_data
    app.mongodb_collection = app.mongodb_db.today_data


@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()


@app.get("/api/sample")
async def sample_news(num: Optional[int] = 1):
    # # Retrieve all documents matching the category
    # matching_news = list(app.mongodb_collection.find().limit(num))

    # for news in matching_news:
    #     news["_id"] = str(news["_id"])
    # # Sample 4 documents randomly
    # samples = random.sample(matching_news, min(len(matching_news), num))
    # return json.dumps({"news": samples})
    result = data.sample(n=num).to_dict(orient='records')
    return json.dumps({"news": result})


@app.get("/api/sample/{category_id}")
async def sample_news(category_id: int, num: Optional[int] = 4):
    # Retrieve all documents matching the category
    # matching_news = list(app.mongodb_collection.find({"category_id": category_id}))

    # for news in matching_news:
    #     news["_id"] = str(news["_id"])
    # # Sample 4 documents randomly
    # samples = random.sample(matching_news, min(len(matching_news), num))
    result = data.sample(n=num).to_dict(orient='records')
    return json.dumps({"news": result})


# @app.get("/{any}")
# async def root(any: str):
#     return RedirectResponse("/")


# @app.get("/{any}/{something}")
# async def root(any: str):
#     return RedirectResponse("/")

# # API Section
# @app.get("/api/headline")
# async def get_headline():
#     with open("data/headline.json", "r", encoding="utf-8") as f:
#         data = json.load(f)
#     return data


# # Get recommendation
# @app.get("/api/recommendation")
# async def get_recommendation():
#     with open("data/recommendation.json", "r", encoding="utf-8") as f:
#         data = json.load(f)
#     return data

# # Get theme recommendation


# @app.get("/api/theme_recommendation")
# async def get_theme_recommendation():
#     # ['정치', '경제', '사회', '생활문화', '세계', 'IT과학', '오피니언']
#     with open("data/theme_recommendation.json", "r", encoding="utf-8") as f:
#         data = json.load(f)
#     return data

# # Get article


# @app.get("/api/article/{article_id}")
# async def get_article(article_id: int):
#     with open(f"data/article/{article_id}.json", "r", encoding="utf-8") as f:
#         data = json.load(f)
#     return data

# # Get theme articles


# @app.get("/api/theme_article/{theme_id}")
# async def get_theme_article(theme_id: int):
#     with open(f"data/theme_article/{theme_id}.json", "r", encoding="utf-8") as f:
#         data = json.load(f)
#     return data


# Static Section
app.mount("/", StaticFiles(directory="build/", html=True), name="build")
# '정치': 100, '경제': 101, '사회': 102, '생활문화': 103, '세계': 104, 'IT과학': 105, '오피니언': 110, 'politics': 100,
