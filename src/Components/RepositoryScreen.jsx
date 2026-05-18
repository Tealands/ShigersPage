import React, { useContext } from 'react';
import Repositories from './Repositories.jsx';
import { ScreenContext } from './ScreenContext';
import GeminiImg from '../assets/AI/Gemini.png';
import AntigravityImg from '../assets/AI/Antigravity.png';
import CopilotImg from '../assets/AI/Copilot.png';
import ChatGPTImg from '../assets/AI/ChatGPT.png';
import ClaudeImg from '../assets/AI/Claude.png';

const RepositoryScreen = () => {
    const { language } = useContext(ScreenContext);

    const title = language === 'ja' ? 'リポジトリ' : 'Repositories';

    const getText = (key) => {
        const texts = {
            ja: {
                toolsTitle: '使用ツール',
                tool: '使用ツール',
                purpose: '用途',
                proficiency: 'どれくらい使えるか',
                codingSupportedBy: 'Coding Supported by'
            },
            en: {
                toolsTitle: 'Tools I Used',
                tool: 'Tool',
                purpose: 'Purpose',
                proficiency: 'Proficiency',
                codingSupportedBy: 'Coding Supported by'
            }
        };
        return texts[language][key];
    };

    const toolsData = [
        { tool: 'VScode', purpose: language === 'ja' ? 'プログラミング全般' : 'General programming', prof: '◎' },
        { tool: 'GitHub', purpose: language === 'ja' ? 'Webサイト・ゲーム開発' : 'Website and game development', prof: '〇' },
        { tool: 'Unity', purpose: language === 'ja' ? 'ゲーム開発' : 'Game development', prof: '△' },
        { tool: 'Blender', purpose: language === 'ja' ? 'アニメーション開発' : 'Amimation development', prof: '△' },
        { tool: 'Android Stodio', purpose: language === 'ja' ? 'モバイルアプリ開発' : 'Mobile App development', prof: '△' } 
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="w-full h-[60vh] md:h-[75vh] relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
                            {title}
                        </h1>
                    </div>
                </div>
            </div>
            {/* 必要に応じて共通ヘッダーなどをここに追加 */}
            <div className="p-8 max-w-4xl mx-auto">
                <Repositories />
            </div>
            <div className="p-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-4">{getText('toolsTitle')}</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                        <thead>
                            <tr className="bg-white/20">
                                <th className="px-4 py-2 text-center text-white font-semibold">{getText('tool')}</th>
                                <th className="px-4 py-2 text-center text-white font-semibold">{getText('purpose')}</th>
                                <th className="px-4 py-2 text-center text-white font-semibold">{getText('proficiency')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {toolsData.map((toolItem, index) => (
                                <tr key={index} className="border-t border-white/20">
                                    <td className="px-4 py-2 text-white">{toolItem.tool}</td>
                                    <td className="px-4 py-2 text-white">{toolItem.purpose}</td>
                                    <td className="px-4 py-2 text-white">{toolItem.prof}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="p-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-4">{getText('codingSupportedBy')}</h2>
                <div className="flex flex-wrap gap-4">
                    <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer">
                        <img src={GeminiImg} alt="Gemini" className="w-24 h-24 object-contain" />
                    </a>
                    <a href="https://antigravity.google/" target="_blank" rel="noopener noreferrer">
                        <img src={AntigravityImg} alt="Antigravity" className="w-24 h-24 object-contain" />
                    </a>
                    <a href="https://copilot.microsoft.com/" target="_blank" rel="noopener noreferrer">
                        <img src={CopilotImg} alt="Copilot" className="w-24 h-24 object-contain" />
                    </a>
                    <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">
                        <img src={ChatGPTImg} alt="ChatGPT" className="w-24 h-24 object-contain" />
                    </a>
                    <a href="https://claude.com/" target="_blank" rel="noopener noreferrer">
                        <img src={ClaudeImg} alt="Claude" className="w-24 h-24 object-contain" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RepositoryScreen;
