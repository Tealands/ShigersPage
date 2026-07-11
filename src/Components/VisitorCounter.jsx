import React, { useContext, useEffect, useState } from 'react';
import { ScreenContext } from './ScreenContext';

// counterapi.dev の無料カウンター（認証不要・バックエンド不要）
// 名前空間とキーを変えれば別のカウンターになる
const NAMESPACE = 'shigerspage';
const KEY = 'pageviews';
const BASE = `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}`;
// 同一セッションで二重カウントしないためのフラグ
const SESSION_FLAG = 'visitor-counted';

const VisitorCounter = () => {
  const { language } = useContext(ScreenContext);
  const [count, setCount] = useState(null);

  useEffect(() => {
    // このセッションで既にカウント済みなら取得のみ（インクリメントなし）
    const alreadyCounted = sessionStorage.getItem(SESSION_FLAG) === '1';
    const url = alreadyCounted ? `${BASE}/` : `${BASE}/up`;

    let cancelled = false;
    fetch(url)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        if (cancelled) return;
        if (typeof data.count === 'number') setCount(data.count);
        if (!alreadyCounted) sessionStorage.setItem(SESSION_FLAG, '1');
      })
      .catch(() => {
        // 取得失敗時は何も表示しない
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  const label = language === 'ja' ? '訪問者数' : 'Visitors';

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
      <span className="text-sm">
        {label}: {count.toLocaleString()}
      </span>
    </div>
  );
};

export default VisitorCounter;
