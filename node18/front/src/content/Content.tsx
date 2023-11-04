import { Container, Select } from '@mantine/core';
import React, { ReactElement, useEffect, useState } from 'react';
import { getBucket } from '@extend-chrome/storage';
import { Radio, Group } from '@mantine/core';
import RadioButton from './Radiobottun';
import {get_problems} from '../app/translate'
import Header from './Header';

interface MyBucket {
  targetLang: string;
}
const bucket = getBucket<MyBucket>('my_bucket', 'sync');

const Content = ({open}) => {
  //ここにapiからうけとったやつストレージからぶち込む
  const translateSelectedNumber = {'first':1,'second':2,'third':3,"fourth":4};
//  const selectsFromGpt = get_problems()
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

//　問題を生成する関数
const createProblems = () => {
  console.log("createProblems conducted")
//  let selectsFromGpt = get_problems();
//  console.log(selectsFromGpt);
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


  if(!open){return null}
  return (
      <div className="fixed z-[999] bottom-2 right-2 w-full max-w-md h-screen overflow-y-auto shadow-xl border-[1px] bg-black bg-opacity-50">
                        <button onClick={createProblems}>問題生成</button>
        <div className="flex justify-center mt-2 text-base">問題</div>
        <Header/>
        {selectsFromGpt.map((select, index) => (
          <RadioButton 
            key={index}
            selects={selects} 
            whichAnswer={index} 
            onSelect={handleSelect} // onSelect プロップとして関数を渡す
          />
        ))}
                <button onClick={checkAnswers}>Check Answers</button>

      </div>
    );
    
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
