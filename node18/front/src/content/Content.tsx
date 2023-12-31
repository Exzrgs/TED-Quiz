import { Container, Select } from '@mantine/core';
import React, { ReactElement, useEffect, useState } from 'react';
import { getBucket } from '@extend-chrome/storage';
import { Radio, Group } from '@mantine/core';
import RadioButton from './Radiobottun';
import {get_problems} from '../app/translate'
import Header from './Header';
import Loader from './Loader';
import "./styles.css";

interface MyBucket {
  targetLang: string;
}
const bucket = getBucket<MyBucket>('my_bucket', 'sync');
//const Content = async() => {

const Content = ({open,setOpen}) => {
  //ここにapiからうけとったやつストレージからぶち込む
  const translateSelectedNumber = {'first':1,'second':2,'third':3,"fourth":4};
  // const selectsFromGpt = await get_problems(showLoader)
  const [showLoader, setShowLoader] = useState(false);

// useEffect(() => {
//   async function fetchProblems() {
//     setShowLoader(true); // ローダーを表示する
//     const problems = await get_problems();
//     // 問題のデータで何かをする...
//     setShowLoader(false); // ローダーを非表示にする
//   }
//   fetchProblems();
// }, []);

  let selectsFromGpt = [
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
     }]

  console.log("problems: ", selectsFromGpt)

  const [lang, setLang] = useState('EN');
  const [selects, setSelects] = useState(selectsFromGpt);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    (async () => {
      const value = await bucket.get();
      if (value.targetLang) {
        setLang(value.targetLang);
      }
    })();
  }, []);
  const saveLang = (lang: string) => {
    bucket.set({ targetLang: lang });
    setLang(lang);
  };

// 選択された値を更新する関数
const handleSelect = (whichAnswer, value) => {
  setAnswers(prevAnswers => ({ ...prevAnswers, [whichAnswer]: value }));
};

// 問題を生成する関数
const createProblems = async () => {
  console.log("createProblems conducted");
  setShowLoader(true);

//  const selectsFromGpt = await get_problems();
//   async function fetchProblems() {
//     setShowLoader(true); // ローダーを表示する
//     const problems = await get_problems();
//     // 問題のデータで何かをする...
//     setShowLoader(false); // ローダーを非表示にする
//   }
//   fetchProblems();

  console.log(selectsFromGpt);
};

// 正解を確認する関数
const checkAnswers = () => {
  console.log(answers);
  const correctAnswers = selectsFromGpt.map((item, index) => ({
    correct: item.answer,
    selected: answers[index]
  }));
  console.log(correctAnswers[0])
  console.log(correctAnswers[1])

  // 正解数を計算
  let score = 0;
  let correctLists = "";
  for(let i = 0;i<5;i++){
    if(correctAnswers[i].correct == translateSelectedNumber[correctAnswers[i].selected]){
      score++;
      correctLists += (i+1).toFixed(0)+'、';
    }
  };

  // スコア表示などの処理
  alert(
    `あなたのスコアは${score}/${correctAnswers.length}です。\nそのうち正解した問題は、` + correctLists+`です！`);
};


//表示切替
const toggleFunction = () => {
  setOpen((prevState) => !prevState);
    console.log("toggleFunction")
  console.log(open)
};
  if(showLoader){return       <div className="fixed z-[999] bottom-2 right-2 w-full max-w-md h-screen overflow-y-auto shadow-xl border-[1px] bg-black bg-opacity-80">
               <div className="fixed top-0 right-0 p-4">
            Ted Quiz
            </div>
               <div className="fixed top-0 right-0 p-4">
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={toggleFunction}
            >
              Close
            </button>
            </div>
  <div className="flex justify-center mt-4">
<button
  type="button"
  className="text-white bg-red-900 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-600 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-red-700"
>
  Create Questions
</button>
</div>
<div className="text-white flex justify-center mt-4">
  Now Creating
  </div>
<div className="flex justify-center mt-4">
  <Loader/>
  </div>
</div>}
  return (
      <div className="fixed z-[999] bottom-2 right-2 w-full max-w-md h-screen overflow-y-auto shadow-xl border-[1px] bg-black bg-opacity-80">
                              <div className="fixed top-0 right-0 p-4">
            Ted Quiz
            </div>
                              <div className="fixed top-0 right-0 p-4">
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={toggleFunction}
            >
              Close
            </button>
            </div>
                        <div className="p-4 flex justify-center mt-4">
                        <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
    <li className="flex items-center text-blue-600 dark:text-gray-400 space-x-2.5">
        <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-blue-500">
            1
        </span>
        <span>
            <h3 className="font-medium leading-tight"><span className="English">Create Questions</span></h3>
        </span>
    </li>
    <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
        <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
        </span>
        <span>
            <h3 className="font-medium leading-tight">Listen and Answer</h3>
        </span>
    </li>
    <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
        <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
        <span>
            <h3 className="font-medium leading-tight">Check the answers</h3>
        </span>
    </li>
</ol>
</div>
                        
                        
                        <div className="flex justify-center mt-4">
  <button
    type="button"
    className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    onClick={createProblems}
  >
    Create Questions
  </button>
</div>
                        
                        
                        <div className="flex justify-center mt-2 text-base">Questions</div>
        {selectsFromGpt.map((select, index) => (
        <li className="px-8 py-4 border-b border:gray-100 dark:border-gray-600">

  <div key={index} className="p-4 border rounded-lg mb-4 bg-white bg-opacity-80">
    <div className="font-semibold mb-2 border-b border:gray-100">{select.problem_statement}</div>
    <RadioButton 
      selects={selects} 
      whichAnswer={index} 
      onSelect={handleSelect} // onSelect プロップとして関数を渡す
    />
  </div>
  </li>
))}
<div className="flex justify-center mt-4 mb-4">
  <button
    type="button"
    className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    onClick={checkAnswers}
  >
    Check the Answers
  </button>



</div>
</div>);
    
return (
    <>
    <div className="fixed z-[999] bottom-2 right-2 w-1/4 h-screen shadow-xl border-[1px] bg-black bg-opacity-20">
      <div className="flex justify-center mt-2 text-base">Content Counter</div>
        Popup Counter
        <Container p="xl">
        <Select
        label="どの言語に翻訳しますか？"
        value={lang}
        onChange={(value: string) => saveLang(value)}
        data={[
          { value: 'EN', label: '英語' },
          { value: 'KO', label: '韓国語' },
          { value: 'ZH', label: '中国語' },
          { value: 'JA', label: '日本語' },
        ]}
        />
        </Container>
        </div>
    </>
  );

};

export default Content;
