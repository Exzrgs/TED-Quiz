import openai
import os
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.environ["API_KEY"]

messageForGPT = "hello"

res = openai.ChatCompletion.create(
    model = "gpt-3.5-turbo",
    messages = [
        {
            "role": "system",
            "content": "Please respond in English"
        },
        {
            "role": "user",
            "content": messageForGPT,
        },
    ],
)

print(res)