import React, { useContext } from 'react';
import { ScreenContext } from './ScreenContext';

const qualifications = [
    {
        nameJa: '普通自動車第一種運転免許',
        nameEn: 'Ordinary Motor Vehicle License (Class 1)',
        dateJa: '2024年',
        dateEn: '2024',
        issuerJa: '公安委員会',
        issuerEn: 'Public Safety Commission',
        icon: '🚗',
    },
    {
        nameJa: '実用英語技能検定 2級',
        nameEn: 'EIKEN Grade 2 (English Proficiency)',
        dateJa: '2023年',
        dateEn: '2023',
        issuerJa: '公益財団法人 日本英語検定協会',
        issuerEn: 'The Eiken Foundation of Japan',
        icon: '🇬🇧',
    },
    {
        nameJa: '実用数学技能検定 2級',
        nameEn: 'Math Certification Grade 2',
        dateJa: '2022年',
        dateEn: '2022',
        issuerJa: '公益財団法人 日本数学検定協会',
        issuerEn: 'Japan Mathematics Certification Association',
        icon: '📐',
    },
];

const targetQualifications = [
    {
        nameJa: '基本情報技術者試験',
        nameEn: 'Fundamental IT Engineer Examination (FE)',
        issuerJa: '独立行政法人 情報処理推進機構 (IPA)',
        issuerEn: 'Information-technology Promotion Agency (IPA)',
        icon: '💻',
    },
    {
        nameJa: '応用情報技術者試験',
        nameEn: 'Applied IT Engineer Examination (AP)',
        issuerJa: '独立行政法人 情報処理推進機構 (IPA)',
        issuerEn: 'Information-technology Promotion Agency (IPA)',
        icon: '🖥️',
    },
];

const QualificationsScreen = () => {
    const { language, openTitleScreen } = useContext(ScreenContext);

    const title = language === 'ja' ? '保有資格一覧' : 'Qualifications';

    return (
        <div className="min-h-screen bg-gray-900">
            {/* ヘッダー */}
            <div className="w-full h-[45vh] md:h-[55vh] relative bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
                            {title}
                        </h1>
                        <p className="text-white/70 text-lg md:text-xl">
                            {language === 'ja' ? '取得した資格・免許の一覧' : 'List of Certificates & Licenses'}
                        </p>
                    </div>
                </div>
            </div>

            {/* 保有資格一覧 */}
            <div className="max-w-3xl mx-auto px-4 pt-12 pb-6">
                <h2 className="text-white/80 text-2xl font-bold mb-5 border-b border-white/10 pb-2">
                    {language === 'ja' ? '保有資格' : 'Obtained'}
                </h2>
                <ul className="space-y-5">
                    {qualifications.map((q, i) => (
                        <li
                            key={i}
                            className="bg-gray-800/60 border border-white/10 hover:border-amber-400/40 rounded-2xl px-6 py-5 flex items-start gap-4 transition-colors duration-200"
                        >
                            <span className="text-4xl leading-none mt-1">{q.icon}</span>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-white font-bold text-xl leading-snug">
                                    {language === 'ja' ? q.nameJa : q.nameEn}
                                </h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    {language === 'ja' ? q.issuerJa : q.issuerEn}
                                </p>
                            </div>
                            <span className="shrink-0 text-amber-400 font-semibold text-sm bg-amber-900/40 border border-amber-400/30 rounded-lg px-3 py-1 mt-1">
                                {language === 'ja' ? q.dateJa : q.dateEn}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* 今後取得したい資格 */}
            <div className="max-w-3xl mx-auto px-4 pt-6 pb-24">
                <h2 className="text-white/80 text-2xl font-bold mb-5 border-b border-white/10 pb-2">
                    {language === 'ja' ? '今後取得したい資格' : 'Target Qualifications'}
                </h2>
                <ul className="space-y-5">
                    {targetQualifications.map((q, i) => (
                        <li
                            key={i}
                            className="bg-gray-800/30 border border-white/10 hover:border-blue-400/40 rounded-2xl px-6 py-5 flex items-start gap-4 transition-colors duration-200"
                        >
                            <span className="text-4xl leading-none mt-1 opacity-60">{q.icon}</span>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-white/70 font-bold text-xl leading-snug">
                                    {language === 'ja' ? q.nameJa : q.nameEn}
                                </h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    {language === 'ja' ? q.issuerJa : q.issuerEn}
                                </p>
                            </div>
                            <span className="shrink-0 text-blue-400 font-semibold text-sm bg-blue-900/30 border border-blue-400/30 rounded-lg px-3 py-1 mt-1">
                                {language === 'ja' ? '目標' : 'Goal'}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* 戻るボタン */}
            <button
                onClick={openTitleScreen}
                className="fixed bottom-4 right-4 bg-amber-600 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-colors"
            >
                {language === 'ja' ? 'タイトルへ戻る' : 'Back to Title'}
            </button>
        </div>
    );
};

export default QualificationsScreen;
