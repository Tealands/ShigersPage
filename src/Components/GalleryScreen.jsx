import React, { useState, useContext } from 'react';
import { ScreenContext } from './ScreenContext';

// BackScreen
import fallingSun from '../assets/BackScreen/FallingSun.JPG';
import nightView from '../assets/BackScreen/NightView.JPG';
import seaSide from '../assets/BackScreen/SeaSide.JPG';
import shigerwallpaper from '../assets/WallPaper/shigerwallpaper.png';
import aTownAtDusk from '../assets/BackScreen/ATownAtDusk.jpg';
import blueOcean from '../assets/BackScreen/BlueOcean.JPG';
import blueRiver from '../assets/BackScreen/BlueRiver.JPG';
import shaningBridge from '../assets/BackScreen/ShaningBridge.JPG';
import winterRiver from '../assets/BackScreen/WinterRiver.JPG';

// Vertical
import forestRiver from '../assets/Vertical/ForestRiver.JPG';
import penguin from '../assets/Vertical/Penguin.JPG';
import twinTower from '../assets/Vertical/TwinTower.JPG';
import underGround from '../assets/Vertical/UnderGround.jpg';

const backScreenPhotos = [
    { src: fallingSun,     captionJa: '落陽',       captionEn: 'Falling Sun' },
    { src: nightView,      captionJa: '夜景',        captionEn: 'Night View' },
    { src: seaSide,        captionJa: '海辺',        captionEn: 'Sea Side' },
    { src: aTownAtDusk,    captionJa: '夕暮れの街',  captionEn: 'A Town at Dusk' },
    { src: blueOcean,      captionJa: '青い海',      captionEn: 'Blue Ocean' },
    { src: blueRiver,      captionJa: '青い川',      captionEn: 'Blue River' },
    { src: shaningBridge,  captionJa: '輝く橋',      captionEn: 'Shining Bridge' },
    { src: winterRiver,    captionJa: '冬の川',      captionEn: 'Winter River' },
];

const verticalPhotos = [
    { src: forestRiver, captionJa: '森の川',    captionEn: 'Forest River' },
    { src: penguin,     captionJa: 'ペンギン',  captionEn: 'Penguin' },
    { src: twinTower,   captionJa: 'ツインタワー', captionEn: 'Twin Tower' },
    { src: underGround, captionJa: '地下鉄',    captionEn: 'Underground' },
];

const PhotoGrid = ({ photos, aspectClass, onSelect, language }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
            <button
                key={i}
                onClick={() => onSelect(photo)}
                className={`group relative overflow-hidden rounded-xl ${aspectClass} bg-gray-800 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:scale-[1.02] focus:outline-none`}
            >
                <img
                    src={photo.src}
                    alt={language === 'ja' ? photo.captionJa : photo.captionEn}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                    <p className="w-full px-3 py-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent">
                        {language === 'ja' ? photo.captionJa : photo.captionEn}
                    </p>
                </div>
            </button>
        ))}
    </div>
);

const GalleryScreen = () => {
    const { language, openTitleScreen } = useContext(ScreenContext);
    const [selected, setSelected] = useState(null);

    const title = language === 'ja' ? 'ギャラリー' : 'Gallery';

    return (
        <div className="min-h-screen bg-gray-900">
            {/* ヘッダー */}
            <div className="w-full h-[45vh] md:h-[55vh] relative bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
                            {title}
                        </h1>
                        <p className="text-white/70 text-lg md:text-xl">
                            {language === 'ja' ? '写真アルバム' : 'Photo Album'}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-12 space-y-14">
                {/* BackScreen セクション */}
                <section>
                    <h2 className="text-white/80 text-2xl font-bold mb-5 border-b border-white/10 pb-2">
                        {language === 'ja' ? '風景写真' : 'Landscapes'}
                    </h2>
                    <PhotoGrid
                        photos={backScreenPhotos}
                        aspectClass="aspect-video"
                        onSelect={setSelected}
                        language={language}
                    />
                </section>

                {/* Vertical セクション */}
                <section>
                    <h2 className="text-white/80 text-2xl font-bold mb-5 border-b border-white/10 pb-2">
                        {language === 'ja' ? '縦写真' : 'Portraits'}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {verticalPhotos.map((photo, i) => (
                            <button
                                key={i}
                                onClick={() => setSelected(photo)}
                                className="group relative overflow-hidden rounded-xl aspect-[3/4] bg-gray-800 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:scale-[1.02] focus:outline-none"
                            >
                                <img
                                    src={photo.src}
                                    alt={language === 'ja' ? photo.captionJa : photo.captionEn}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                                    <p className="w-full px-3 py-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent">
                                        {language === 'ja' ? photo.captionJa : photo.captionEn}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </section>
            </div>

            {/* ライトボックス */}
            {selected && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="relative max-w-3xl w-full"
                        onClick={e => e.stopPropagation()}
                    >
                        <img
                            src={selected.src}
                            alt={language === 'ja' ? selected.captionJa : selected.captionEn}
                            className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                        />
                        <p className="text-white/80 text-center mt-3 text-lg">
                            {language === 'ja' ? selected.captionJa : selected.captionEn}
                        </p>
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* 戻るボタン */}
            <button
                onClick={openTitleScreen}
                className="fixed bottom-4 right-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-colors"
            >
                {language === 'ja' ? 'タイトルへ戻る' : 'Back to Title'}
            </button>
        </div>
    );
};

export default GalleryScreen;
