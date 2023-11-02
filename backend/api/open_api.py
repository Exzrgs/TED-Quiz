import openai

def SendForGPT(system_message, user_message, my_functions):
    res = openai.ChatCompletion.create(
        model = "gpt-3.5-turbo",
        messages = [
            {
                "role": "system",
                "content": system_message
            },
            {
                "role": "user",
                "content": user_message,
            },
        ],
        functions=my_functions
    )

    return res