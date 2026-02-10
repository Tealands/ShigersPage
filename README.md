# サイトのリンク
https://tealands.github.io/ShigersPage/


# 今後の開発予定
- 書いたnote記事のリンク
- オリジナル問題集ページ
- 趣味で書いた企画書一覧自己紹介ページ(企画書や問題集などの趣味、予備自衛官補、所属サークル)
- 今後やりたいことリスト(GAS、Javaアプリ)


# 使用技術
- HTML(index.htmlだけ)
- React(Componentsで大量に使った)
- CSS(htmlの整形とアニメーションコンポーネントで使った)

![Code1](src/assets/Code1.png)
割とアロー関数を多用している

![ファビコン](src/assets/Shiger.jpg)
ここら辺の画像はGeminiに出力させた

# 大まかな構造
### ホーム画面
index.html->main.jsx->ScreenManager.jsx(画面遷移を管理)
<br>&emsp;->HeaderPicture.jsx
<br>&emsp;->Animetion.jsx
<br>&emsp;->App.jsx->Hero.jsx
<br>&emsp;&emsp;->Action.jsx
<br>&emsp;&emsp;->SocialIcons.jsx
<br>&emsp;->Banner.jsx

### リポジトリ画面
index.html->main.jsx->ScreenManager.jsx(画面遷移を管理)
<br>&emsp;->RepositryScreen.jsx->Repositries.jsx

### 関連サイト画面
index.html->main.jsx->ScreenManager.jsx(画面遷移を管理)
<br>&emsp;->RelatedPageScreen.jsx

![ホーム画面図](src/assets/HomeFigure.png)


