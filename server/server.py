import json
import os
from typing import List

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, RedirectResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles

# App Setting Section

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


# API Section

# Get today headline
@app.get("/api/headline")
async def get_headline():
    with open("data/headline.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    return data


# Get recommendation
@app.get("/api/recommendation")
async def get_recommendation():
    with open("data/recommendation.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    return data

# Get theme recommendation
@app.get("/api/theme_recommendation")
async def get_theme_recommendation():
    with open("data/theme_recommendation.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    return data

# Get article
@app.get("/api/article/{article_id}")
async def get_article(article_id: int):
    with open(f"data/article/{article_id}.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    return data

# Get theme articles
@app.get("/api/theme_article/{theme_id}")
async def get_theme_article(theme_id: int):
    with open(f"data/theme_article/{theme_id}.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    return data



# Static Section
app.mount("/", StaticFiles(directory="build", html=True), name="build")


