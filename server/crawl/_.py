import requests
from bs4 import BeautifulSoup
import json

### ! Get ID
# url = "https://apis.naver.com/commentBox/cbox/web_naver_list_jsonp.json?ticket=news&pool=cbox5&lang=ko&country=KR&objectId=news001%2C00141351388"

# header = {
#     'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
#     'accept' : "*/*",
#     'accept-encoding' : 'gzip, deflate, br',
#     'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
#     'referer' : 'https://n.news.naver.com/mnews/article/001/0014135138?sid=100',
# }

# html = requests.get(url, headers = header).text
# start_index = html.index('(') + 1
# end_index = html.rindex(')')
# json_data = html[start_index:end_index]

# parsed_data = json.loads(json_data)

# for comments in parsed_data['result']['commentList']:
#     print(comments['commentNo'])
#     print(comments['objectId'])

# exit()

### ! Specific user.
url = "https://apis.naver.com/commentBox/cbox/web_naver_user_info_jsonp.json?ticket=news&pool=cbox5&lang=ko&country=KR&objectId=news003%2C0012032998&commentNo=800438085601984642"

header = {
    'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
    'accept' : "*/*",
    'accept-encoding' : 'gzip, deflate, br',
    'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
    'referer' : 'https://n.news.naver.com/mnews/article/003/0012032998',
}

html = requests.get(url, headers = header).text
start_index = html.index('(') + 1
end_index = html.rindex(')')
json_data = html[start_index:end_index]

parsed_data = json.loads(json_data)

for comments in parsed_data['result']['commentList']:
    print(comments['objectTitle'])