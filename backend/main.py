from flask import Flask
from flask import request
from './api/get_script' import 

app = Flask(__name__)

@app.route("/")
def api():
    url = request.form["url"] + "/transcript"
    
    