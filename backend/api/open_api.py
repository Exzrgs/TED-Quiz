import openai

def send_for_gpt(version, system_message, summary, script, my_functions):
    print("send for gpt")
    
    if summary == "":
        user_message = \
            [{
                "role": "user",
                "content": script,
            }]
    else:
        user_message = \
            [{
                "role": "user",
                "content": "before summary: " + summary,
            },
            {
                "role": "user",
                "content": "script: " + script,
            }]
    
    res = openai.ChatCompletion.create(
        model = version,
        messages = [
            {
                "role": "system",
                "content": system_message
            },
            *user_message
        ],
        functions=my_functions
    )

    return res