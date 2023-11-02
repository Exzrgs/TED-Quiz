import sys
sys.path.append('./api')

from flask import Flask
from flask import request
from api import get_script
from api import models
from api import make_problem

app = Flask(__name__)

@app.route("/", methods=["POST"])
def api():
    # url = request.form["url"] + "/transcript"
    # transcript = get_script.get_script(url)
    
    # problem_list = make_problem.make_problem(transcript)
    
    problem_list = make_problem.get_sample_problem()
    
    return problem_list