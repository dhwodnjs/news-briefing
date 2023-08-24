import json
import pandas as pd
from typing import List, Optional


from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from utils.schemas import Text
from feature.request_genie import get_summary, get_tts
from model.Changer.request_polite import get_polite

# App Setting Section

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files

app.mount("/static", StaticFiles(directory="build/static"), name="static")

# when app start, connect to mongodb
colname = ["date", "category_name", "press",
           "title", "body", "content_url", "image"]
data = pd.DataFrame(columns=colname)
# data = pd.read_csv("crawl\output\Article_IT과학_20230816_20230816.csv", names = colname)

categories = ["IT과학", "경제", "사회", "생활문화", "세계", "오피니언", "정치"]
data = pd.concat([pd.read_csv(f"crawl/output/Article_{c}_20230816_20230816.csv", names=colname) for c in categories], ignore_index=True)
data = data.reset_index(drop=True).reset_index().rename(columns={"index": "id"})


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
async def sample_news(category_id: int, num: Optional[int] = 1):
    # Retrieve all documents matching the category
    # matching_news = list(app.mongodb_collection.find({"category_id": category_id}))

    # for news in matching_news:
    #     news["_id"] = str(news["_id"])
    # # Sample 4 documents randomly
    # samples = random.sample(matching_news, min(len(matching_news), num))
    data_sample = data[data["category_name"] == categories[category_id]]
    result = data_sample.sample(n=num).to_dict(orient='records')
    return json.dumps({"news": result})

# @app.get("/themes/api/sample/{category_id}")
# async def sample_news(category_id: int, num: Optional[int] = 1):
#    return RedirectResponse(f"/api/sample/{category_id}?num={num}", status_code=302)


@app.get("/article/api/{article_id}")
async def get_article(article_id: int):
    data_sample = data[data["id"] == article_id]
    result = data_sample.to_dict(orient='records')
    return json.dumps({"news": result})


@app.post("/api/summary")
async def summary(text: Text):
    response = get_summary(text.text)
    return {"result": response}


@app.get("/api/test")
async def test():
    get_tts("안녕하세요 반갑습니다 케이티의 기가지니의 음성합성 기술입니다.")
    return {"result": "success"}


@app.post("/api/audio")
async def audio(text: Text):
    response = get_tts(text.text)
    audio_content = response.content
    return Response(content=audio_content, media_type="audio/mpeg")

@app.post("/api/polite")
async def polite(text: Text):
    response = get_polite(text.text)
    return {"result": response}


# Catch up
@app.get("/{full_path:path}", tags=["React Routes"])
async def catch_all(full_path: str):
    return FileResponse("build/index.html")

# '정치': 100, '경제': 101, '사회': 102, '생활문화': 103, '세계': 104, 'IT과학': 105, '오피니언': 110, 'politics': 100,
