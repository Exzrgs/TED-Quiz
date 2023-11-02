from flask import Flask
from flask import request
from api import get_script
from api import models
from api import make_problem

app = Flask(__name__)

@app.route("/")
def api():
    model = models.Model()
    
    url = request.form["url"] + "/transcript"
    transcript = get_script.get_script(url)
    model.transcript = transcript
    
    problem_list = make_problem.make_problem()
    
    