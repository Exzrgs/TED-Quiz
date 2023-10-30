import openai
import os
from dotenv import load_dotenv
import json
import models
import message

load_dotenv()
openai.api_key = os.environ["API_KEY"]

system_message = message.system_message
user_message = message.user_message

my_functions = [
    {
        "name": "get_summary_and_problems",
        "description": "get script summary and Comprehension Questions",
        "parameters": {
            "type": "object",
            "properties": {
                "summary": {
                    "type": "string", 
                    "description": "script summary"
                },
                "comprehension_problems":{
                    "type": "array",
                    "items":{
                        "type": "object",
                        "properties": {
                            "problem_statement": {
                                "type": "string",
                                "description": "problem statement"
                            },
                            "answer_options":{
                                "type": "object",
                                "properties": {
                                    "first":{
                                        "type": "string",
                                        "description": "first answer option"
                                    },
                                    "second": {
                                        "type": "string",
                                        "description": "second answer option"
                                    },
                                    "third": {
                                        "type": "string",
                                        "description": "third answer option"
                                    },
                                    "fourth": {
                                        "type": "string",
                                        "description": "fourth answer option"
                                    },
                                }
                            },
                            "answer":{
                                "type": "integer",
                                "description": "answer number"
                            }
                        }
                    }
                }
            },
            "required": ["summary", "comprehension_problems"]
        }
    }
]

def SendForGPT():
    res = openai.ChatCompletion.create(
        model = "gpt-3.5-turbo",
        messages = [
            {
                "role": "system",
                "content": system_message[0]
            },
            {
                "role": "user",
                "content": user_message[0],
            },
        ],
        functions=my_functions
    )

    return res

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