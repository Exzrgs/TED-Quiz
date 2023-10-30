from flask import Flask
from flask import request
from api import get_script
from api import models

app = Flask(__name__)

@app.route("/")
def api():
    model = models.Model()
    
    url = request.form["url"] + "/transcript"
    transcript = get_script.get_script(url)
    model.transcript = transcript
    
    