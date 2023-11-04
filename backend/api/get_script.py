from urllib import request
from bs4 import BeautifulSoup
import pprint
import json

def get_script(url):
    response = request.urlopen(url)
    soup = BeautifulSoup(response, 'html.parser')
    response.close()

    tag = soup.find_all("script", {"id": "__NEXT_DATA__"})[0].string

    json_data = json.loads(tag)
    # スクリプトが入ってる辞書のリスト
    ls = json_data["props"]["pageProps"]["transcriptData"]["translation"]["paragraphs"]

    transcpipt = []

    for data in ls:
        # セクションずつに別れてる
        for d in data["cues"]:
            text = d["text"]
            transcpipt.append(text)

    print(*transcpipt)