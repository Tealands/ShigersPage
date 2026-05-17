import React, { useContext } from 'react';

import SocialIcons from './SocialIcons';
import ActionButtons from './ActionButtons';
import snowManIcon from '../assets/SnowMan1.png';
import { ScreenContext } from './ScreenContext';

const Hero = () => {
  const { language } = useContext(ScreenContext);

  const getText = (key) => {
    const texts = {
      ja: {
        title: 'しげるのウェブサイト',
        subtitle: 'ソフトウェア & ゲーム製作勉強中の大学生',
        description: '私はしげる、ソフトウェア開発とゲーム制作に情熱を持つ大学生です。現在はアイフラッグという会社でエンジニアとして長期インターンに参加しています。私のプロジェクトと経験を共有する個人ウェブサイトへようこそ。'
      },
      en: {
        title: "Shiger's website",
        subtitle: 'Software Developer & Game Creator',
        description: 'I am Shiger, a university student passionate about software development and game creation. I enjoy exploring new technologies and turning ideas into reality through code. Welcome to my personal website where I share my projects and experiences.'
      }
    };
    return texts[language][key];
  };

  return (
    <div className="flex flex-col items-center text-center space-y-8">

      {/* メインタイトル（白で視認性を確保） */}
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
          <span className="text-white/90">{getText('title')}</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light">
          {getText('subtitle')}
        </p>
      </div>

      {/*アイコン画像*/}
      <div className="relative">
        <img
          src={snowManIcon}
          alt="Shiger Icon"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-xl"
        />
      </div>

      {/* 自己紹介文（背景に埋もれないよう影を少し追加） */}
      <p className="max-w-2xl text-lg text-white/90 leading-relaxed px-4 drop-shadow">
        {getText('description')}
      </p>

      {/* アクションボタン */}
      <ActionButtons />

      <div className="pt-12">
        <SocialIcons />
      </div>
    </div>
  );
};

export default Hero;