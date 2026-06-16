import React, { useContext } from 'react';
import { ScreenContext } from './ScreenContext';

const RepositoriesScreen = () => {
    const { language } = useContext(ScreenContext);

    const getText = (key) => {
        const texts = {
            ja: {
                shigersPagesDesc:'このwebsiteです。',
                numberPlaceDesc: 'ナンプレ（数独）ゲームです。クリアすると...',
                moveStoneDesc: '石を動かせるようにした囲碁です。',
                maximumQuizDesc: '私たちがチームで開発したプログラミングに関するクイズサイトです。',
                sortTodoDesc: '私が個人で開発したソート機能付きTodoサイトです。ローカルファイルにデータを保存し、そこからデータを復元することもできます。',
                dictionalyDesc: '辞書作成アプリです。単語は辞書順にソートされます。',
                todoAppName: 'TodoApp（デスクトップ版）',
                todoAppDesc: 'Microsoft Access Database に対応したWindowsデスクトップTodoアプリです。Python(Flask)製で、インストーラー1つで環境構築不要で使えます。',
                todoAppFeature1: 'ASAPゾーン：今すぐやるタスクを管理',
                todoAppFeature2: 'メインリスト：期限付きタスクを管理',
                todoAppFeature3: 'JSONエクスポートでバックアップ可能',
                todoAppFeature4: 'Windows専用（64bit）',
                todoAppInstallBtn: 'インストーラーをダウンロード（tar.gz）',
                todoAppInstallNote: '※ Windows 64bit 専用。ダブルクリックで起動します。',
                note: '',
                skillsTitle1: 'プログラミング言語スキル',
                language: '使った言語',
                purpose: '用途',
                proficiency: 'どれくらい使えるか',
                skillsTitle2: 'プログラミングツールスキル',
            },
            en: {
                shigersPagesDesc:'This website`s repository',
                numberPlaceDesc: 'This is a Number Place (Sudoku) game. When you clear it...',
                moveStoneDesc: 'This is a Go game where you can move stones.',
                maximumQuizDesc: 'This is a quiz site about programming that we developed as a team.',
                sortTodoDesc: 'This is a Todo site with sorting functionality that I developed personally. It saves data to a local file and can also restore data from there.',
                dictionalyDesc: 'This is a dictionary creation app. Words are sorted in dictionary order.',
                todoAppName: 'TodoApp (Desktop)',
                todoAppDesc: 'A Windows desktop Todo app backed by Microsoft Access Database. Built with Python (Flask); one installer sets everything up — no environment setup needed.',
                todoAppFeature1: 'ASAP Zone: manage urgent tasks',
                todoAppFeature2: 'Main List: manage tasks with deadlines',
                todoAppFeature3: 'JSON export for backup',
                todoAppFeature4: 'Windows only (64-bit)',
                todoAppInstallBtn: 'Download Installer (tar.gz)',
                todoAppInstallNote: '* Windows 64-bit only. Double-click to run.',
                note: 'From top to bottom, developed in the second semester of freshman year, first semester of sophomore year, and second semester of sophomore year.',
                skillsTitle1: 'Programming Language Skills',
                language: 'Language',
                purpose: 'Purpose',
                proficiency: 'Proficiency',
                skillsTitle2: 'Programming Tools Skills',
            }
        };
        return texts[language][key];
    };

    const skillsData1 = [
        { lang: 'C', purpose: language === 'ja' ? '大学の授業' : 'University courses', prof: '〇' },
        { lang: 'C++', purpose: language === 'ja' ? '競技プログラミング' : 'Competitive programming', prof: '〇' },
        { lang: 'C#', purpose: 'Unity', prof: '△' },
        { lang: 'Java(Kotlin)', purpose: language === 'ja' ? '大学の授業' : 'University courses', prof: '△' },
        { lang: 'React(js,ts)', purpose: language === 'ja' ? 'webサイト' : 'Website', prof: '〇' },
        { lang: 'Python', purpose: language === 'ja' ? '大学の授業、Blender' : 'University courses', prof: '〇' },
        { lang: 'SQL', purpose: language === 'ja' ? 'データベース' : 'Database', prof: '〇' },
        { lang: 'HTML', purpose: language === 'ja' ? 'webサイト' : 'Website', prof: '〇' },
        { lang: 'MarkDown', purpose: language === 'ja' ? 'メモ' : 'Notes', prof: '〇' },
        { lang: 'CSS', purpose: language === 'ja' ? 'webサイト' : 'Website', prof: '〇' },
        { lang: 'ShellScript', purpose: language === 'ja' ? 'コマンドの効率化' : 'Command efficiency', prof: '〇' }
    ];

    const skillsData2 = [
        { tool: 'VScode', purpose: language === 'ja' ? 'プログラミング全般' : 'General programming', prof: '◎' },
        { tool: 'GitHub', purpose: language === 'ja' ? 'Webサイト・ゲーム開発' : 'Website and game development', prof: '◎' },
        { tool: 'Unity', purpose: language === 'ja' ? 'ゲーム開発' : 'Game development', prof: '△' },
        { tool: 'Blender', purpose: language === 'ja' ? 'アニメーション開発' : 'Animation development', prof: '△' },
        { tool: 'Android Studio', purpose: language === 'ja' ? 'モバイルアプリ開発' : 'Mobile App development', prof: '△' }                
    ];

    return (
        <>
            <div className="flex-1 py-12">
                <div className="w-full max-w-4xl mx-auto px-4">
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="https://github.com/Tealands/ShigersPage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline text-xl"
                            >
                                Shiger's website
                            </a>                            
                            <br></br>
                            <span className="text-gray-400">{getText('shigersPagesDesc')}</span>
                        </li>                          
                        <li>
                            <a
                                href="https://github.com/Tealands/ShigersGame"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline text-xl"
                            >
                                Number Place
                            </a>                            
                            <br></br>
                            <span className="text-gray-400">{getText('numberPlaceDesc')}</span>
                        </li>      
                        <li>
                            <a
                                href="https://github.com/Tealands/ShigersGame"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline text-xl"
                            >
                                {language === 'ja' ? '移碁' : 'Move Stone'}
                            </a>                            
                            <br></br>
                            <span className="text-gray-400">{getText('moveStoneDesc')}</span>
                        </li>                                            
                        <li>
                            <a
                                href="https://quiz.game.teams.maximum.vc/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline text-xl"
                            >
                                Maximum Quiz(このリポジトリは公開できません)
                            </a>
                            <br></br>
                            <span className="text-gray-400">{getText('maximumQuizDesc')}</span>
                        </li>                        
                        <li>
                            <a
                                href="https://tealands.github.io/MakeDictionaly/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline text-xl"
                            >
                                MakeDictionaly
                            </a>
                            <br></br>
                            <span className="text-gray-400">{getText('dictionalyDesc')}</span>
                        </li>
                        <li>
                            <a
                                href="https://github.com/Tealands/SortTodo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline text-xl"
                            >
                                {language === 'ja' ? 'ソート付きTodo' : 'Sorted Todo'}
                            </a>
                            <br></br>
                            <span className="text-gray-400">{getText('sortTodoDesc')}</span>
                        </li>
                        <li>
                            <a
                                href="https://github.com/Tealands/TodoApp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline text-xl"
                            >
                                TodoApp
                            </a>
                            <br />
                            <span className="text-gray-400">{getText('todoAppDesc')}</span>
                            <ul className="mt-2 ml-4 list-disc text-gray-400 text-sm space-y-1">
                            </ul>
                            <div className="mt-3">
                                <a
                                    href="https://github.com/Tealands/TodoApp/archive/refs/tags/v1.0.0.tar.gz"
                                    download="TodoApp.tar.gz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors text-sm font-medium"
                                >
                                TodoApp
                                </a>
                            <br></br>                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
                                    </svg>
                                    {getText('todoAppInstallBtn')}
                                <p className="mt-1 text-gray-500 text-xs">{getText('todoAppInstallNote')}</p>
                            </div>
                        </li>
                        <h3>{getText('note')}</h3>
                        

                    </ul>

                    {/* 言語スキル表 */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-white mb-4">{getText('skillsTitle')}</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                                <thead>
                                    <tr className="bg-white/20">
                                        <th className="px-4 py-2 text-center text-white font-semibold">{getText('language')}</th>
                                        <th className="px-4 py-2 text-center text-white font-semibold">{getText('purpose')}</th>
                                        <th className="px-4 py-2 text-center text-white font-semibold">{getText('proficiency')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {skillsData1.map((skill, index) => (
                                        <tr key={index} className="border-t border-white/2">{/*ここで横線の太さを変更*/}
                                            <td className="px-4 py-2 text-white">{skill.lang}</td>
                                            <td className="px-4 py-2 text-white">{skill.purpose}</td>
                                            <td className="px-4 py-2 text-white">{skill.prof}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RepositoriesScreen;
