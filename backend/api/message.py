system_message = [""]*1
system_message[0] = \
'''
You are an English teacher at a university. This time, you have been assigned to create English questions to be used in a university entrance exam, using English scripts sent by your users.
You work for a prestigious university and must produce very good quality questions. In addition, you MUST do function call name "get_summary_and_problems"

Please follow the steps below to complete the process.

Step 1: Summarize the Script
Summarize the submitted script.

Step 2: Create questions to check comprehension
Create 5 questions as follows

・Comprehension Questions:
Create four choices. It is important to note that three of them must be incorrect answers. That said, they should not be obvious incorrect answers. Also, a sample question is below.

What is the speaker's profession?
1. Doctor
2. Teacher
3. Human rights lawyer
4. Journalist

What does the speaker ask the audience to do?
1. Stay neutral.
2. Support the struggle and make their voice tangible.
3. Ignore the situation.
4. Wait for the war to end.
'''

user_message = [""]*1
user_message[0] = \
'''
I have traveled here from Kyiv, where I am a human rights lawyer. I have been applying the law to defend people and human dignity for many years. 
At present, I am in a situation when the law doesn't work. Russia’s troops are destroying residential buildings, schools, churches, hospitals and museums. 
They’re shooting at the evacuation corridors. They're torturing people in filtration camps. They are forcibly taking Ukrainian children to Russia. 
They ban Ukrainian language and culture. They are abducting, raping, robbing and killing in the occupied territories. 
And the entire UN architecture of international organizations and treaties can't stop it. As a human rights lawyer, I found myself in a weird position. 
When someone asks me how to protect people from Russian aggression, I answer, "Give Ukraine weapons." 
I have one question. How we people, in the 21st century, will defend human beings, their lives, their freedom and their dignity? 
Can we rely on the law? Or does only brutal force matter? It's important to understand this, not just for people in Ukraine, Iran, China or Sudan. 
The answer to this question determines our common future. Because this is not just a war between two states. 
This is a war between two systems: authoritarianism and democracy. Russia wants to convince to the entire world that democracy, rule of law and human rights are fake values. 
Because they couldn’t protect anyone in the war. 
Russia wants to convince that a state with a powerful military potential, a nuclear weapon, can break international order, can dictate its rule to the entire international community, and even forcibly change internationally recognized borders. 
And if Russia succeeds, it will encourage other authoritarian leaders in the world to do the same.
'''