import sys
sys.path.append('./api')

from flask import Flask
from flask import request
from flask_cors import CORS
from api import script
from api import problem
import json

test_url = "https://www.ted.com/talks/david_mcwilliams_the_power_of_unconventional_thinking/transcript"

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["POST"])
def api():
    url = request.headers.get("url") + "/transcript"
    print("url:", url)
    
    script_list = script.scrape_script(url)
    
    print("get script")
    
    # 本番用
    problem_list = problem.make_by_gpt_four(script_list)
    
    # フロントエンドのテスト用サンプルデータ
    # problem_list = problem.get_sample_response()
    
    print("get problems")
    
    print(problem_list)
    
    response = json.dumps(problem_list)
    
    return response