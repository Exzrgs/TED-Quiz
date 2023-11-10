type Problems = {
  problems: [
      {
          problem_statement: string;
          answer_options: {
              first: string;
              second: string;
              third: string;
              fourth: string;
          }
          answer: number;
      }
  ]
};

export const get_problems = async ({showLoading}) => {
//   const apiURL = "http://127.0.0.1:5000/"
//   let tedURL = location.href
//   if (tedURL.slice(-11) == "/transcript"){
//       tedURL = tedURL.slice(0,-11)
//   }

//   console.log("tedURL: ", tedURL)

//   const res = await fetch(apiURL, {
//       headers: {
//           URL: tedURL,
//           "Content-Type": "application/x-www-form-urlencoded",
//       },
//       method: 'POST',
//       mode: 'cors',
//   });
//   const result: Problems = await res.json();
//   console.log("got problem: ", result)
let result = [
    {"problem_statement":"statement",
    "answer_options": {'first':"answer1",'second':"answer2",'third':"answer3","fourth":"answer4"},
    "answer":1
    },
    {"problem_statement":"statement",
    "answer_options": {'first':"answer1",'second':"answer2",'third':"answer3","fourth":"answer4"},
    "answer":1
    },
    {"problem_statement":"statement",
    "answer_options": {'first':"answer1",'second':"answer2",'third':"answer3","fourth":"answer4"},
    "answer":1
    },
    {"problem_statement":"statement",
    "answer_options": {'first':"answer1",'second':"answer2",'third':"answer3","fourth":"answer4"},
    "answer":1
    },
    {"problem_statement":"statement",
    "answer_options": {'first':"answer1",'second':"answer2",'third':"answer3","fourth":"answer4"},
    "answer":1
   }];
return result
};