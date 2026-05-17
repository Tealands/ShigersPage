# サイトのリンク
https://tealands.github.io/ShigersPage/


# ローカルでの実行方法

インストール
```bash
npm install
```

実行
```bash
npm run dev
```


# 今後の開発予定
- ClaudeでCI/CDの構築を試みる予定
- アクセス数が分かるようにする
- 画面遷移のアニメーションを追加する予定
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
<br>&emsp;&emsp;->ActionButtons.jsx
<br>&emsp;&emsp;->SocialIcons.jsx
<br>&emsp;->Banners.jsx

### リポジトリ画面
index.html->main.jsx->ScreenManager.jsx(画面遷移を管理)
<br>&emsp;->RepositoryScreen.jsx->Repositories.jsx

### 関連サイト画面
index.html->main.jsx->ScreenManager.jsx(画面遷移を管理)
<br>&emsp;->RelatedPageScreen.jsx

### アイデア記事画面
index.html->main.jsx->ScreenManager.jsx(画面遷移を管理)
<br>&emsp;->IdeaArticlesScreen.jsx

### オリジナル問題画面
index.html->main.jsx->ScreenManager.jsx(画面遷移を管理)
<br>&emsp;->OriginalProblemsScreen.jsx

![ホーム画面図](src/assets/HomeFigure.png)


