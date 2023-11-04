import openai
import os
from dotenv import load_dotenv
import json
import gpt_param
import open_api
import random

load_dotenv()
openai.api_key = os.environ["API_KEY"]

'''
システムメッセージをGPT3と4で変えたほうがいい
'''
def make_by_gpt_four(script_list):
    version = "gpt-4"
    sys_message = gpt_param.sys_message_gpt_four
    script = ''.join(script_list)
    my_functions = gpt_param.my_functions
    
    response = open_api.send_for_gpt(version, sys_message, "", script, my_functions)
    
    gpt_message = extract_message_from_response(response)
    problems_list = gpt_message["comprehension_problems"]
    return problems_list

'''
トークン制限が厳しいので, 文脈を持たせつつ複数回通信を行う必要がありそう
そのために, 今までの要約と, 新しいスクリプトを渡して, 毎回1問作ってもらう.
最終的に, それらの中から5問選ぶ.

2000文字のスクリプトくらいなら送れそうなので、それで分割していく

5個問題を選ぶが、逆に問題が少ないとエラーになってしまう
よって, スクリプトの長さで条件分岐が必要？
毎回5問作らせて、ランダムに選ぶ方法もあるが、出題箇所が均等にならない可能性
毎回5問作らせて、リストに入れる。次のループでは4問捨てて、5問追加する
こうやるといいかもしれない
'''
MAX_LEN = 2000
def make_by_gpt_three(script_list):
    version = "gpt-3.5-turbo"
    sys_message = gpt_param.sys_message_gpt_four
    my_functions = gpt_param.my_functions
    summary = ""
    send_script = ""
    problem_list = []
    
    for part in script_list:
        send_script += part
        
        # 2000以上ない部分が送られない問題がある
        if len(send_script) >= MAX_LEN:
            if summary != "":
                sys_message = gpt_param.sys_message_gpt_three
            
            response = open_api.send_for_gpt(version, sys_message, summary, send_script, my_functions)
            print("get response from gpt")
            gpt_message = extract_message_from_response(response)
            
            summary = gpt_message["summary"]
            
            if len(problem_list) != 0:
                for _ in range(4):
                    problem_list.pop()
            
            for problem in gpt_message["comprehension_problems"]:
                problem_list.append(problem)
            
            send_script = ""
    
    selected_problems = random.sample(problem_list, 5)
    
    return selected_problems

def extract_message_from_response(response):
    message = json.loads(response["choices"][0]["message"]["function_call"]["arguments"])
    
    return message

def get_sample_response():
    json_string = open('./api/example.json', 'r')
    json_data = json.load(json_string)
    
    message = json_data["choices"][0]["message"]["function_call"]["arguments"]["comprehension_problems"]
    
    return message

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