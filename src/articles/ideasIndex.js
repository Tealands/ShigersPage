import helloWorld from './ideas/Hello-world.md?raw';
import animeBonds from './ideas/Anime-bonds.md?raw';
import gravediggerScheme from './ideas/Gravedigger-scheme.md?raw';
import lightbag from './ideas/Light-bag.md?raw';
import pairRecrute from './ideas/Pair-recrute.md?raw';
import recordedTest from './ideas/Recorded-test.md?raw';
import studentsStyle from './ideas/Students-style.md?raw';
import threeAccountSystem from './ideas/Three-acount-system.md?raw';

export const ideaArticles = [
  {
    id: 1,
    slug: 'hello-world',
    title: 'はじめてのアイデア記事',
    titleEn: 'First Idea Article',
    date: '2026-05-17',
    description: 'このアイデア記事ページのはじまりについて。',
    descriptionEn: 'The beginning of this idea articles page.',
    content: helloWorld,
  },
  {
    id: 2,
    slug: 'anime-bonds',
    title: 'ネット証券×出版社 共同プロジェクト企画提案書',
    titleEn: 'Net Securities × Publisher Joint Project Proposal',
    date: '2026-05-17',
    description: 'アニメ化事業債（エンタメSTO）パッケージを軸にしたファン参加型ビジネスモデルの提案。',
    descriptionEn: 'A proposal for a fan-participation business model centered on anime production bonds (Entertainment STO).',
    content: animeBonds,
  },
  {
    id: 3,
    slug: 'gravedigger-scheme',
    title: '金融商品企画提案書：墓守スキーム',
    titleEn: 'Financial Product Proposal: Gravedigger Scheme',
    date: '2026-05-17',
    description: '不動産信託と親会社履行保証による永続的供養インフラの構築を目指す金融企画。',
    descriptionEn: 'A financial plan to build a perpetual memorial infrastructure using real estate trusts and parent company guarantees.',
    content: gravediggerScheme,
  },
  {
    id: 4,
    slug: 'threeAccountSystem',
    title: '3口座管理サービス企画書',
    titleEn: 'Three-Account Management Service Proposal',
    date: '2026-05-17',
    description: '1アカウントにつき最大3口座を持てる、家族・用途別の口座一元管理サービスの企画。',
    descriptionEn: 'A proposal for a service that allows up to three accounts per user for family and purpose-based account management.',
    content: threeAccountSystem,
  },
  {
    id: 5,
    slug: 'pair-recrute',
    title: 'ペアリクルート企画',
    titleEn: 'Pair Recruit Proposal',
    date: '2026-05-17',
    description: 'ペアでの採用や協働を促進する企画書。',
    descriptionEn: 'A proposal to promote hiring and collaboration in pairs.',
    content: pairRecrute,
  },
  {
    id: 6,
    slug: 'recordedTest',
    title: '記録テスト',
    titleEn: 'Recorded Test',
    date: '2026-05-17',
    description: '模試の回答の様子を記録して振り返りをしやすくする。',
    descriptionEn: 'About the results of recorded tests.',
    content: recordedTest,
  },
  {
    id: 7,
    slug: 'studentStyle',
    title: '学生のスタイルについて',
    titleEn: 'About Student Styles',
    date: '2026-05-17',
    description: '学生の容姿に関する指導をするサービスの企画書。',
    descriptionEn: 'Considerations on student learning styles.',
    content: studentsStyle,
  },
  {
    id: 8,
    slug: 'lightbag',
    title: '身軽で旅行ができる企画',
    titleEn: 'Lightbag Proposal',
    date: '2026-05-17',
    description: '持ち物を減らして身軽に旅行ができる企画書。',
    descriptionEn: 'A proposal for a lightweight and functional bag.',
    content: lightbag,
  },
];
