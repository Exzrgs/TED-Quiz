import { Counter } from '../app/features/counter';
import { Container, Select } from '@mantine/core';
import React, { ReactElement, useEffect, useState } from 'react';
import { getBucket } from '@extend-chrome/storage';
import { Radio, Group } from '@mantine/core';
import RadioButton from './Radiobottun';
interface MyBucket {
  targetLang: string;
}
const bucket = getBucket<MyBucket>('my_bucket', 'sync');

const Content = () => {
  //ここにapiからうけとったやつストレージからぶち込む
  const selectsFromGpt = {
    1:
      {"problem_statement":"statement",
      "answer_options": {'first':"answer1",'second':"answer2",'third':"answer3","fourth":"answer4"},
      "answer":"correctanswer"
      },
    2:
      {"problem_statement":"statement",
      "answer_options": {'first':"answer1",'second':"answer2",'third':"answer3","fourth":"answer4"},
      "answer":"correctanswer"
      },
    3:
      {"problem_statement":"statement",
      "answer_options": {'first':"answer1",'second':"answer2",'third':"answer3","fourth":"answer4"},
      "answer":"correctanswer"
      },
    4:
      {"problem_statement":"statement",
      "answer_options": {'first':"answer1",'second':"answer2",'third':"answer3","fourth":"answer4"},
      "answer":"correctanswer"
      },
    5:
      {"problem_statement":"statement",
      "answer_options": {'first':"answer1",'second':"answer2",'third':"answer3","fourth":"answer4"},
      "answer":"correctanswer"
      },

    }
  const [lang, setLang] = useState('EN');
  const [selects, setSelects] = useState(selectsFromGpt);

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

  return (
    <div className="fixed z-[999] bottom-2 right-2 h-screen shadow-xl border-[1px] bg-black bg-opacity-50">
      <div className="flex justify-center mt-2 text-base">Content</div>
      {/* <Counter /> */}
      <RadioButton selects={selects} whichAnswer={1}/>
      <RadioButton selects={selects} whichAnswer={2}/>
      <RadioButton selects={selects} whichAnswer={3}/>
      <RadioButton selects={selects} whichAnswer={4}/>
      <RadioButton selects={selects} whichAnswer={5}/>
 
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
