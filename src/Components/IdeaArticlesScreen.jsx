import React, { useState, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import { ScreenContext } from './ScreenContext';
import { ideaArticles } from '../articles/ideasIndex';

const IdeaArticlesScreen = () => {
  const { openTitleScreen, language } = useContext(ScreenContext);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const t = {
    ja: {
      title: 'アイデア記事',
      subtitle: '思いついたこと・考えたことを書いています',
      backToList: '← 記事一覧に戻る',
      backToTitle: 'タイトルへ戻る',
      postedOn: '投稿日',
    },
    en: {
      title: 'Idea Articles',
      subtitle: 'Thoughts and ideas that come to mind',
      backToList: '← Back to List',
      backToTitle: 'Back to Title',
      postedOn: 'Posted on',
    },
  }[language] || {
    title: 'アイデア記事',
    subtitle: '思いついたこと・考えたことを書いています',
    backToList: '← 記事一覧に戻る',
    backToTitle: 'タイトルへ戻る',
    postedOn: '投稿日',
  };

  const getTitle = (article) => language === 'en' ? article.titleEn : article.title;
  const getDescription = (article) => language === 'en' ? article.descriptionEn : article.description;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {selectedArticle && (
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
              >
                {t.backToList}
              </button>
            )}
            <h1 className="text-xl font-bold text-white">
              {selectedArticle ? getTitle(selectedArticle) : t.title}
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
        {!selectedArticle ? (
          /* Article List */
          <>
            <p className="text-gray-400 mb-8">{t.subtitle}</p>
            <div className="flex flex-col gap-4">
              {ideaArticles.map((article) => (
                <button
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="text-left w-full bg-gray-800/60 hover:bg-gray-700/60 border border-white/10 hover:border-indigo-500/40 rounded-2xl p-6 transition-all group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors mb-1">
                        {getTitle(article)}
                      </h2>
                      <p className="text-gray-400 text-sm mb-3">{getDescription(article)}</p>
                      <span className="text-xs text-gray-500">
                        {t.postedOn}: {article.date}
                      </span>
                    </div>
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-indigo-400 shrink-0 mt-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          /* Article Viewer */
          <article className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h1:text-3xl prose-h1:border-b prose-h1:border-white/20 prose-h1:pb-4
            prose-h2:text-2xl prose-h2:mt-8
            prose-h3:text-xl prose-h3:mt-6
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-em:text-gray-300
            prose-blockquote:border-indigo-500 prose-blockquote:bg-indigo-900/20 prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:text-gray-300
            prose-code:text-indigo-300 prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-gray-800 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
            prose-ul:text-gray-300 prose-ol:text-gray-300
            prose-li:marker:text-indigo-400
            prose-hr:border-white/20
            prose-table:w-full prose-table:border-collapse
            prose-th:border prose-th:border-white/20 prose-th:bg-white/10 prose-th:px-4 prose-th:py-2 prose-th:text-left
            prose-td:border prose-td:border-white/20 prose-td:px-4 prose-td:py-2
          ">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>{selectedArticle.content}</ReactMarkdown>
          </article>
        )}
      </div>
    </div>
  );
};

export default IdeaArticlesScreen;
