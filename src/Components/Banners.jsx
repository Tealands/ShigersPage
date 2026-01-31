import React, { useContext, useState } from 'react';
import { ScreenContext } from './ScreenContext.js';
import ImageModal from './ImageModal.jsx'; 
import modIcon from '../assets/MOD.png';
import mfsIcon from '../assets/MFS.jpg';
// 【修正1】インポートが漏れていたので追加
import iamhomeIcon from '../assets/IamHome.png'; 

function Banners() {
  const { language } = useContext(ScreenContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getText = (key) => {
    const texts = {
      ja: {
        reserveOfficer: '予備自衛官補って\n知ってますか？',
        flightSim: 'Microsoft Flight Simulator 2024\n好評発売中！',
        iamhome: '「ただいま」ってちゃんと言ってますか？',
        bannerSpace: '広告スペース'
      },
      en: {
        reserveOfficer: 'Do you know about\nReserve Self-Defense Officer?',
        flightSim: 'Microsoft Flight Simulator 2024\nNow on Sale!',
        iamhome: 'Do you always say "I am home"?',
        bannerSpace: 'Banner Space'
      }
    };
    return texts[language][key];
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* 自衛官募集バナー */}
      <div className="w-full h-28 flex items-center justify-center">
        <a href="https://www.mod.go.jp/gsdf/jieikanbosyu/about/recruit/yobijieikanho.html" 
           target="_blank"
           rel="noopener noreferrer"
           className="flex items-center gap-3 bg-gradient-to-r from-pink-700 to-white text-white px-14 py-2 rounded-lg shadow-lg font-bold text-lg hover:from-red-800 hover:to-gray-900 transition duration-300 ease-in-out w-full h-full">
          <img src={modIcon} alt="" className="w-10 h-10 rounded-full border-2 border-white bg-white" />
          <span>
            {getText('reserveOfficer').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index === 0 && <br />}
              </React.Fragment>
            ))}
          </span>
        </a>
      </div>

      {/* フライトシミュレーターバナー */}
      <div className="w-full h-28 flex items-center justify-center">
        <a href="https://www.flightsimulator.com/" 
           target="_blank"
           rel="noopener noreferrer"
           className="flex items-center gap-3 bg-gradient-to-r from-blue-700 to-white text-white px-14 py-2 rounded-lg shadow-lg font-bold text-lg hover:from-blue-800 hover:to-gray-900 transition duration-300 ease-in-out w-full h-full">
          <img src={mfsIcon} alt="Microsoft Flight Simulator 2024" className="w-12 h-10 rounded-full border-2 border-white bg-white" />
          <span>
            {getText('flightSim').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index === 0 && <br />}
              </React.Fragment>
            ))}
          </span>
        </a>
      </div>
      
      {/* I am Home バナー */}
      <div className="w-full h-28 flex items-center justify-center">
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="flex items-center gap-3 bg-gradient-to-r from-green-700 to-white text-white px-14 py-2 rounded-lg shadow-lg font-bold text-lg hover:from-green-800 hover:to-gray-900 transition duration-300 ease-in-out w-full h-full text-left"
        >
          {/* 【修正】iamhomeIcon を正しく参照 */}
          <img src={iamhomeIcon} alt="I am home" className="w-12 h-10 rounded-full border-2 border-white bg-white" />
          <span>
            {getText('iamhome').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index === 0 && <br />}
              </React.Fragment>
            ))}
          </span>
        </button>
      </div>

      {/* モーダルコンポーネントの設置 */}
      <ImageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        imgSrc={iamhomeIcon}  // 【修正2】画像ソースを渡す
      />

      <div className="w-full h-28 flex items-center justify-center">
        <span className="text-gray-500 font-medium text-lg">
          {getText('bannerSpace')}
        </span>
      </div>
    </div>
  );
}

export default Banners;