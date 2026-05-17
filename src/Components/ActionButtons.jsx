import React, { useContext } from 'react';
import { ScreenContext } from './ScreenContext';

const ActionButtons = () => {
  const context = useContext(ScreenContext);
  const { openRelatedPageScreen, openRepositoryScreen, openIdeaArticlesScreen, openOriginalProblemsScreen, language } = context || {};

  const getText = (key) => {
    const texts = {
      ja: {
        relatedSites: '関連サイト',
        viewRepositories: 'リポジトリを見る',
        ideaArticles: 'アイデア記事',
        originalProblems: 'オリジナル問題',
      },
      en: {
        relatedSites: 'Related Sites',
        viewRepositories: 'View Repositories',
        ideaArticles: 'Idea Articles',
        originalProblems: 'Original Problems',
      }
    };
    return texts[language]?.[key] ?? texts['ja'][key];
  };

  const buttons = [
    {
      label: getText('relatedSites'),
      onClick: () => openRelatedPageScreen?.(),
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      colorClass: 'bg-indigo-600/80 hover:bg-indigo-500 border border-indigo-400/40 text-white',
    },
    {
      label: getText('viewRepositories'),
      onClick: () => openRepositoryScreen?.(),
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
      colorClass: 'bg-white/10 hover:bg-white/20 border border-white/30 text-white',
    },
    {
      label: getText('ideaArticles'),
      onClick: () => openIdeaArticlesScreen?.(),
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      colorClass: 'bg-indigo-900/40 hover:bg-indigo-800/60 border border-indigo-400/30 hover:border-indigo-400/60 text-indigo-300',
    },
    {
      label: getText('originalProblems'),
      onClick: () => openOriginalProblemsScreen?.(),
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      colorClass: 'bg-purple-900/40 hover:bg-purple-800/60 border border-purple-400/30 hover:border-purple-400/60 text-purple-300',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 pt-4 w-full">
      {buttons.map(({ label, onClick, icon, colorClass }) => (
        <button
          key={label}
          onClick={onClick}
          className={`${colorClass} backdrop-blur-md rounded-xl font-semibold transition-all active:scale-95 flex flex-col items-center justify-center gap-2 py-5 px-3`}
        >
          {icon}
          <span className="text-sm leading-tight text-center">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;
