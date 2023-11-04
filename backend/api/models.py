class Model:
    def __init__(self):
        self.transcript = ""
        # ランダムに選ぶなら、フロントで処理したほうがよい
        self.hole_problem = set()
        self.select_problem = []