import sys
sys.path.append('./api')

from flask import Flask
from flask import request
from api import script
from api import models
from api import problem
import json

test_url = "https://www.ted.com/talks/david_mcwilliams_the_power_of_unconventional_thinking/transcript"

app = Flask(__name__)

@app.route("/", methods=["POST"])
def api():
    url = request.headers.get("url") + "/transcript"
    script_list = script.scrape_script(url)
    
    print("get script")
    
    problem_list = problem.make_by_gpt_four(script_list)
    
    # problem_list = problem.get_sample_problem()
    
    print("get problems")
    
    print(problem_list)
    
    response = json.dumps(problem_list)
    
    return response