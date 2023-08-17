from .request_helper import request_genie
from utils.decorators import time_check


def get_summary(text):
    URL = "https://aiapi.genielabs.ai/kt/nlp/summarize-news"
    body = {"text": text, "beam_size": 3}
    response = request_genie(URL, body)
    return response['result']['summary']


@time_check
def get_tts(text):
    URL = "https://aiapi.genielabs.ai/kt/voice/tts-getTTS"
    body = {"text": f"{text}",
            "speaker": 5042,
            "pitch": 100,
            "speed": 100,
            "volume": 100,
            "language": "ko",
            "encoding": "mp3",
            "encodingOpt":
            {"channel": 1, "sampleRate": 8000, "sampleFmt": "S16LE"}}
    response = request_genie(URL, body)

    return response
