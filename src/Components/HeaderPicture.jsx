import React, { useContext, useState, useEffect } from 'react';
// 1. 画像をインポートします。パスはご自身のプロジェクト構成に合わせて調整してください。
// 例: このコンポーネントが src/Components/ にあり、画像が src/assets/ にある場合
import backScreen1 from '../assets/BackScreen1.JPG';
import backScreen2 from '../assets/BackScreen2.JPG';
import backScreen3 from '../assets/BackScreen3.JPG';
import shigerwallpaper from '../assets/shigerwallpaper.png';
import { ScreenContext } from './ScreenContext';

const HeaderPicture = ({ title, subtitle, children }) => {
  const { language, toggleLanguage } = useContext(ScreenContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [backScreen1, backScreen2, backScreen3, shigerwallpaper];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 60000); // 1分ごとに切り替え

  return () => clearInterval(interval);
}, [images.length]);

const [fade, setFade] = useState(true);

return (
    <header className="w-full h-[60vh] md:h-[75vh] relative overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Background ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? (fade ? 'opacity-100' : 'opacity-0') : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      {/* 言語切り替えボタン */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all"
        >
          {language === 'ja' ? 'English' : '日本語'}
        </button>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="space-y-4">
          {title && (
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/80 font-light">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </header>
  );
};

export default HeaderPicture;