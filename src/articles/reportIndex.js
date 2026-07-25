import helloReport from './report/HelloReport.md?raw';
import KaratubaReport from './report/katatuba.md?raw';
import ShorthandNotation from './report/ShorthandNotation.md?raw';
import SocialDesignProcess from './report/SocialDesignProcess.md?raw';

export const reportArticles = [
  {
    id: 1,
    slug: 'hello-report',
    title: 'report記事',
    titleEn: 'First Report Article',
    date: '2026-07-10',
    description: 'このレポートページについて。',
    descriptionEn: 'The report page.',
    content: helloReport,
  },
  {
    id: 2,
    slug: 'karatuba-report',
    title: 'カラツバ法まとめ',
    titleEn: 'Karatuba_methed',
    date: '2026-07-10',
    description: 'カラツバ法について勉強したのでまとめてみた',
    descriptionEn: 'I made report because I studied karatuba methed',
    content: KaratubaReport,
  },
  {
    id: 3,
    slug: 'shorthandnotation',
    title: '数学略記法',
    titleEn: 'Shorthand Notation',
    date: '2026-07-10',
    description: '数学で統一した新しい略記法を考えてみた',
    descriptionEn: 'I came up with a new, unified shorthand notation for mathematics.',
    content: ShorthandNotation,
  },
  {
    id: 4,
    slug: 'social-design-process',
    title: 'CE計画(東京駅新幹線対面乗り換えプロジェクト)',
    titleEn: 'CE Plan (Tokyo Station Face-to-Face Shinkansen Transfer Project)',
    date: '2026-07-23',
    description: '東京駅での東海道・東北新幹線の対面乗り換えを実現する社会設計プロセスの最終レポート。',
    descriptionEn: 'Final report on a social design process to realize face-to-face transfers between Tokaido and Tohoku Shinkansen at Tokyo Station.',
    content: SocialDesignProcess,
  },
];
