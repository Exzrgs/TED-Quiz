class Model:
    def __init__(self):
        self.transcript = ""
        # ランダムに選ぶなら、フロントで処理したほうがよい
        self.hole_problem = set()
        self.select_problem = []

class SelectProblem:
    def __init__(self):
        optionNum = 4
        self.problem_statement = ""
        self.options = [""]*optionNum
        self.answer = 0