import React, { useState, useEffect } from 'react';
import { ScreenContext } from './Components/ScreenContext';
import App from './App.jsx';
import Banners from './Components/Banners.jsx';
import Hero from './Components/Hero';
import RelatedPageScreen from './Components/RelatedPageScreen.jsx';
import RepositoryScreen from './Components/RepositoryScreen.jsx';
import IdeaArticlesScreen from './Components/IdeaArticlesScreen.jsx';
import OriginalProblemsScreen from './Components/OriginalProblemsScreen.jsx';
import TypingAnimation from './Components/Animetion';
import HeaderPicture from './Components/HeaderPicture.jsx';


{/*ここで画面遷移を管理します。*/ }
const ScreenManager = () => {
    const [currentScreen, setCurrentScreen] = useState('TITLE');
    const [language, setLanguage] = useState('ja'); // 'ja' or 'en'

    const openTitleScreen = () => setCurrentScreen('TITLE');
    const openRelatedPageScreen = () => setCurrentScreen('RelatedPage');
    const openRepositoryScreen = () => setCurrentScreen('REPOSITORY');
    const openIdeaArticlesScreen = () => setCurrentScreen('IDEA_ARTICLES');
    const openOriginalProblemsScreen = () => setCurrentScreen('ORIGINAL_PROBLEMS');

    const toggleLanguage = () => setLanguage(prev => prev === 'ja' ? 'en' : 'ja');

    // Expose functions globally for calling from console or other non-react parts if needed,
    // or just to fulfill the "prepare functions" requirement visibly.
    useEffect(() => {
        window.openTitleScreen = openTitleScreen;
        window.openSelfIntroductionScreen = openRelatedPageScreen;
        window.openRepositoryScreen = openRepositoryScreen;
        window.openIdeaArticlesScreen = openIdeaArticlesScreen;
        window.openOriginalProblemsScreen = openOriginalProblemsScreen;

        // Cleanup
        return () => {
            delete window.openTitleScreen;
            delete window.openRelatedPageScreen;
            delete window.openRepositoryScreen;
            delete window.openIdeaArticlesScreen;
            delete window.openOriginalProblemsScreen;
        };
    }, []);

    const renderScreen = () => {
        switch (currentScreen) {
            case 'TITLE':
                return (
                    <div className="min-h-screen bg-gray-900">
                        {/* ここでタイトルやサブタイトルを渡します */}
                        <div className="relative">
                            <HeaderPicture />
                            {/* アニメーションをヘッダー画像にかぶせる */}
                            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
                                <TypingAnimation />
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex flex-col md:flex-row gap-8 max-w-[1600px] mx-auto">
                                <div className="flex-1">
                                    <App />
                                </div>
                                <div className="w-full md:w-80 shrink-0 mt-8 md:mt-0">
                                    <div className="sticky top-4">
                                        <Banners />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'RelatedPage':
                return (
                    <div className="min-h-screen bg-gray-900">
                        {/* 必要に応じて共通ヘッダーなどをここに追加 */}
                        <RelatedPageScreen />
                        {/* テスト用の戻るボタン */}
                        <button
                            onClick={openTitleScreen}
                            className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            {language === 'ja' ? 'タイトルへ戻る' : 'Back to Title'}
                        </button>
                    </div>
                );
            case 'REPOSITORY':
                return (
                    <div className="min-h-screen bg-gray-900">
                        <RepositoryScreen />
                        {/* テスト用の戻るボタン */}
                        <button
                            onClick={openTitleScreen}
                            className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            {language === 'ja' ? 'タイトルへ戻る' : 'Back to Title'}
                        </button>
                    </div>
                );
            case 'IDEA_ARTICLES':
                return <IdeaArticlesScreen />;
            case 'ORIGINAL_PROBLEMS':
                return <OriginalProblemsScreen />;
            default:
                return <div>Unknown Screen</div>;
        }
    };

    return (
        <ScreenContext.Provider value={{ openTitleScreen, openRelatedPageScreen, openRepositoryScreen, openIdeaArticlesScreen, openOriginalProblemsScreen, language, toggleLanguage }}>
            {renderScreen()}
        </ScreenContext.Provider>
    );
};

export default ScreenManager;
