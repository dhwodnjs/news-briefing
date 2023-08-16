import json
import requests
import os
import hmac
import hashlib
from pytz import timezone
from datetime import datetime


def create_header():
    CLIENT_ID = os.environ.get('CLIENT_ID')
    CLIENT_SECRET = os.environ.get('CLIENT_SECRET')
    CLIENT_KEY = os.environ.get('CLIENT_KEY')

    TIMESTAMP = datetime.now(timezone("Asia/Seoul")).strftime("%Y%m%d%H%M%S%f")[:-3]
    SIGNATURE = hmac.new(
        key=CLIENT_SECRET.encode("UTF-8"), msg=f"{CLIENT_ID}:{TIMESTAMP}".encode("UTF-8"), digestmod=hashlib.sha256
    ).hexdigest()

    headers = {
        "x-client-key": f"{CLIENT_KEY}",
        "x-client-signature": f"{SIGNATURE}",
        "x-auth-timestamp": f"{TIMESTAMP}",
        "Content-Type": "application/json",
        "charset": "utf-8",
    }

    return headers


def request_genie(
        url: str,
        body: dict
) -> dict:
    headers = create_header()
    response = requests.post(url,
                             data=json.dumps(body),
                             headers=headers)
    if response.status_code == 200:
        try:
            response = response.json()
        except json.decoder.JSONDecodeError:
            print(f'json.decoder.JSONDecodeError occured.\nresponse.text: "{response.text}"')
    else:
        print(f"response.status_code: {response.status_code}\nresponse.text: {response.text}")

    return response
