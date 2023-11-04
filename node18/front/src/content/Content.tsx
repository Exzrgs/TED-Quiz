import { Container, Select } from '@mantine/core';
import React, { ReactElement, useEffect, useState } from 'react';
import { getBucket } from '@extend-chrome/storage';
import { Radio, Group } from '@mantine/core';
import RadioButton from './Radiobottun';
import get_problems from '../app/translate'
interface MyBucket {
  targetLang: string;
}
const bucket = getBucket<MyBucket>('my_bucket', 'sync');

const Content = () => {
  //ここにapiからうけとったやつストレージからぶち込む
  const translateSelectedNumber = {'first':1,'second':2,'third':3,"fourth":4};
//  const selectsFromGpt = get_problems()
  const selectsFromGpt = [
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
  for(let i = 0;i<5;i++){
    if(correctAnswers[i].correct == translateSelectedNumber[correctAnswers[i].selected]){
      score++;
    }
  };

  // スコア表示などの処理
  alert(`You scored ${score} out of ${correctAnswers.length}`);
};




  return (
    <div className="fixed z-[999] bottom-2 right-2 h-screen shadow-xl border-[1px] bg-black bg-opacity-50">
      <div className="flex justify-center mt-2 text-base">Content</div>
      {/* <Counter /> */}
      {/* <RadioButton selects={selects} whichAnswer={0}/>
      <RadioButton selects={selects} whichAnswer={1}/>
      <RadioButton selects={selects} whichAnswer={2}/>
      <RadioButton selects={selects} whichAnswer={3}/>
      <RadioButton selects={selects} whichAnswer={4}/> */}
    <button onClick={checkAnswers}>Check Answers</button>

      {selectsFromGpt.map((select, index) => (
      <RadioButton 
        key={index}
        selects={selects} 
        whichAnswer={index} 
        onSelect={handleSelect} // onSelect プロップとして関数を渡す
      />
    ))}

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
