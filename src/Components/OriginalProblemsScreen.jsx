import React, { useState, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { ScreenContext } from './ScreenContext';
import { problemArticles } from '../articles/problemsIndex';

const difficultyColor = {
  '★☆☆': 'text-green-400 bg-green-400/10 border-green-400/30',
  '★★☆': 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  '★★★': 'text-red-400 bg-red-400/10 border-red-400/30',
};

const OriginalProblemsScreen = () => {
  const { openTitleScreen, language } = useContext(ScreenContext);
  const [selectedProblem, setSelectedProblem] = useState(null);

  const t = {
    ja: {
      title: 'オリジナル問題',
      subtitle: '自作のプログラミング問題集です。ヒントと解答付き。',
      backToList: '← 問題一覧に戻る',
      backToTitle: 'タイトルへ戻る',
      postedOn: '投稿日',
      difficulty: '難易度',
    },
    en: {
      title: 'Original Problems',
      subtitle: 'A collection of original programming problems with hints and solutions.',
      backToList: '← Back to List',
      backToTitle: 'Back to Title',
      postedOn: 'Posted on',
      difficulty: 'Difficulty',
    },
  }[language] || {
    title: 'オリジナル問題',
    subtitle: '自作のプログラミング問題集です。ヒントと解答付き。',
    backToList: '← 問題一覧に戻る',
    backToTitle: 'タイトルへ戻る',
    postedOn: '投稿日',
    difficulty: '難易度',
  };

  const getTitle = (p) => language === 'en' ? p.titleEn : p.title;
  const getDescription = (p) => language === 'en' ? p.descriptionEn : p.description;
  const getDifficultyLabel = (p) => language === 'en' ? p.difficultyLabelEn : p.difficultyLabel;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {selectedProblem && (
              <button
                onClick={() => setSelectedProblem(null)}
                className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
              >
                {t.backToList}
              </button>
            )}
            <h1 className="text-xl font-bold text-white">
              {selectedProblem ? getTitle(selectedProblem) : t.title}
            </h1>
          </div>
          <button
            onClick={openTitleScreen}
            className="text-sm text-gray-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-white/20 hover:border-white/40"
          >
            {t.backToTitle}
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        {!selectedProblem ? (
          /* Problem List */
          <>
            <p className="text-gray-400 mb-8">{t.subtitle}</p>
            <div className="flex flex-col gap-4">
              {problemArticles.map((problem) => (
                <button
                  key={problem.id}
                  onClick={() => setSelectedProblem(problem)}
                  className="text-left w-full bg-gray-800/60 hover:bg-gray-700/60 border border-white/10 hover:border-purple-500/40 rounded-2xl p-6 transition-all group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {getTitle(problem)}
                        </h2>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full border shrink-0 ${difficultyColor[problem.difficulty] || 'text-gray-400 bg-gray-400/10 border-gray-400/30'}`}>
                          {problem.difficulty} {getDifficultyLabel(problem)}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{getDescription(problem)}</p>
                      <span className="text-xs text-gray-500">
                        {t.postedOn}: {problem.date}
                      </span>
                    </div>
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-purple-400 shrink-0 mt-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          /* Problem Viewer */
          <article className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h1:text-3xl prose-h1:border-b prose-h1:border-white/20 prose-h1:pb-4
            prose-h2:text-2xl prose-h2:mt-8
            prose-h3:text-xl prose-h3:mt-6
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-em:text-gray-300
            prose-blockquote:border-purple-500 prose-blockquote:bg-purple-900/20 prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:text-gray-300
            prose-code:text-purple-300 prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-gray-800 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
            prose-ul:text-gray-300 prose-ol:text-gray-300
            prose-li:marker:text-purple-400
            prose-hr:border-white/20
            [&_details]:bg-gray-800/60 [&_details]:border [&_details]:border-white/10 [&_details]:rounded-xl [&_details]:p-4 [&_details]:my-4
            [&_summary]:cursor-pointer [&_summary]:font-semibold [&_summary]:text-purple-300 [&_summary]:select-none
          ">
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{selectedProblem.content}</ReactMarkdown>
          </article>
        )}
      </div>
    </div>
  );
};

export default OriginalProblemsScreen;
