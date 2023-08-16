from .request_helper import request_genie


def get_summary(text):
    URL = "https://aiapi.genielabs.ai/kt/nlp/summarize-news"
    body = {"text": text, "beam_size": 3}
    response = request_genie(URL, body)
    return response['result']['summary']
