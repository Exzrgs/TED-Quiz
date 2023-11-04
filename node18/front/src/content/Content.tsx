import { Counter } from '../app/features/counter';
import { Container, Select } from '@mantine/core';
import React, { ReactElement, useEffect, useState } from 'react';
import { getBucket } from '@extend-chrome/storage';
interface MyBucket {
  targetLang: string;
}
const bucket = getBucket<MyBucket>('my_bucket', 'sync');

const Content = () => {
  const [lang, setLang] = useState('EN');
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
      <div className="flex justify-center mt-2 text-base">Content Counter</div>
      <Counter />
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
