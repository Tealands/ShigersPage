import React from 'react';
import iamhomeIcon from '../assets/IamHome.png';

function ImageModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    // 背景のオーバーレイ
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      onClick={onClose} // 背景クリックで閉じる
    >
      <div className="relative max-w-3xl w-full bg-white rounded-lg p-2 shadow-2xl">
        {/* 閉じるボタン */}
        <button 
          className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300"
          onClick={onClose}
        >
          &times;
        </button>
        
        {/* 画像本体 */}
        <img 
          src={iamhomeIcon} 
          alt="I am Home Preview" 
          className="w-full h-auto rounded shadow-inner"
          onClick={(e) => e.stopPropagation()} // 画像クリックで閉じないようにする
        />
      </div>
    </div>
  );
}

export default ImageModal;