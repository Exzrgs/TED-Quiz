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

export const get_problems = async () => {
  const url = "http://127.0.0.1:5000/"
  const res = await fetch(url, {
      headers: {
          URL: "https://www.ted.com/talks/lucy_mcbath_my_quest_to_end_the_horror_of_gun_violence_in_the_us" // location.href
      },
      method: 'POST',
      mode: 'cors',
  });
  // const result = await res.json();
  const result: Problems = await res.json();
  console.log(result[0])
  return result
};