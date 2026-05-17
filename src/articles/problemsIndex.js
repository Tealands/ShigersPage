import xPlusAN from './problems/(x+a)^n.md?raw';
import repeatingOnes from './problems/1111-11-mod6.md?raw';

export const problemArticles = [
  {
    id: 1,
    slug: 'x-plus-a-n-remainder',
    title: '整式を(x+a)^nで割った余り',
    titleEn: 'Remainder when dividing a polynomial by (x+a)^n',
    date: '2026-05-17',
    difficulty: '★★★',
    difficultyLabel: '上級',
    difficultyLabelEn: 'Advanced',
    description: 'nは自然数、aは複素数範囲の定数とするときの余りを求める問題。',
    descriptionEn: 'Find the remainder when dividing a polynomial by (x+a)^n, where n is a natural number and a is a complex constant.',
    content: xPlusAN,
  },
  {
    id: 2,
    slug: 'repeating-ones-mod-6',
    title: '1111…11を6で割った余り',
    titleEn: 'Remainder of 111...1 divided by 6',
    date: '2026-05-17',
    difficulty: '★☆☆',
    difficultyLabel: '入門',
    difficultyLabelEn: 'Beginner',
    description: 'nは自然数とする。1がn個並んだ整数を6で割った余りを求める問題。',
    descriptionEn: 'Find the remainder when a repunit (n ones) is divided by 6.',
    content: repeatingOnes,
  },
];
