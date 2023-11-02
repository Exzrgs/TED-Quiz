import openai
import os
from dotenv import load_dotenv
import json
import models
import message
import open_api

load_dotenv()
openai.api_key = os.environ["API_KEY"]

def make_problem():
    system_message = message.system_message
    user_message = message.user_message
    my_functions = message.my_functions
    
    response = open_api.SendForGPT(system_message, user_message, my_functions)
    
    problem_list = get_problem_from_response(response)
    
    return problem_list

def get_problem_from_response(response):
    message = response["choices"][0]["message"]["function_call"]["arguments"]

    summary = message["summary"]
    problem_list = message["comprehension_problems"]
    
    return problem_list

# json_string = open('example.json', 'r')
# json_data = json.load(json_string)

# data = json_data["choices"][0]["message"]["function_call"]["arguments"]

# summary = data["summary"]
# problem_list = data["comprehension_problems"]


# for problem in problem_list:
#     statement = problem["problem_statement"]
#     options = problem["answer_options"]
#     first = options["first"]
#     second = options["second"]
#     third = options["third"]
#     fourth = options["fourth"]
#     ans = problem["answer"]
    
#     print("state:",statement)
#     print('1:',first)
#     print('2:',second)
#     print('3:',third)
#     print('4:',fourth)
#     print('ans:',ans)