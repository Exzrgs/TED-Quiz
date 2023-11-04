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
  const apiURL = "http://127.0.0.1:5000/"
  var tedURL = location.href
  if (tedURL.slice(-11) == "/transcript"){
      tedURL = tedURL.slice(0,-11)
  }

  const res = await fetch(apiURL, {
      headers: {
          URL: "https://www.ted.com/talks/lucy_mcbath_my_quest_to_end_the_horror_of_gun_violence_in_the_us" // location.href
      },
      method: 'POST',
      mode: 'cors',
  });
  // const result = await res.json();
  const result: Problems = await res.json();
  console.log(result)
  return result
};