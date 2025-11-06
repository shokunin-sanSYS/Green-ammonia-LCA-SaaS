# グリーンNH₃ LCA自動算定SaaS - ランディングページ

グリーンアンモニアのLCA（ライフサイクルアセスメント）自動算定SaaSのプロフェッショナルなランディングページです。

## 🎯 プロジェクト概要

- **フレームワーク**: Next.js 14 (App Router)
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **デプロイ先**: Vercel

## ✨ 特徴

- ✅ レスポンシブデザイン（モバイル・タブレット・デスクトップ対応）
- ✅ スムーズなスクロールアニメーション
- ✅ SEO最適化済み
- ✅ ISO14067準拠設計をアピール
- ✅ ベータテスター募集セクション付き
- ✅ フローティングCTAボタン
- ✅ デモサイトと問い合わせフォームへの適切な誘導

## 📋 含まれるセクション

1. **Hero（ファーストビュー）**
   - キャッチーなヘッドライン
   - 2つのCTA（デモ / 問い合わせ）
   - アニメーションダッシュボードモックアップ

2. **Problem（課題提示）**
   - 3つの主要課題
   - 追加の課題リスト

3. **Solution（ソリューション）**
   - 3ステップの処理フロー
   - 4つの主要機能

4. **Before/After（導入効果）**
   - 導入前後の比較
   - ROI表示

5. **Pricing（料金プラン）**
   - 3プラン（Starter / Pro / Enterprise）
   - ベータテスター特典の案内

6. **Beta Tester（ベータテスター募集）**
   - 参加メリット
   - 募集条件
   - 先着10社限定

7. **FAQ（よくある質問）**
   - アコーディオン形式
   - 10項目の質問と回答

8. **Final CTA（最終誘導）**
   - デモと問い合わせの2カラムCTA

9. **Footer（フッター）**
   - リンク集
   - 法務情報

10. **Floating CTA（フローティングボタン）**
    - スクロール時に表示
    - 常時アクセス可能なCTA

## 🚀 Vercelへのデプロイ手順

### 方法1: GitHub経由（推奨）

1. **GitHubリポジトリを作成**
   ```bash
   cd green-nh3-lp
   git init
   git add .
   git commit -m "Initial commit: LCA SaaS Landing Page"
   gh repo create green-nh3-lp --public --source=. --push
   ```

2. **Vercelと連携**
   - [Vercel](https://vercel.com)にログイン
   - "Add New Project" をクリック
   - GitHubリポジトリを選択
   - "Deploy" をクリック

### 方法2: Vercel CLI経由

1. **Vercel CLIをインストール**
   ```bash
   npm i -g vercel
   ```

2. **プロジェクトディレクトリでデプロイ**
   ```bash
   cd green-nh3-lp
   vercel
   ```

3. **本番環境にデプロイ**
   ```bash
   vercel --prod
   ```

## 🛠️ ローカル開発

1. **依存関係をインストール**
   ```bash
   npm install
   ```

2. **開発サーバーを起動**
   ```bash
   npm run dev
   ```

3. **ブラウザで開く**
   ```
   http://localhost:3000
   ```

## 📝 カスタマイズ方法

### URLの変更
以下の2つのURLが使用されています：

- **デモサイト**: `https://shokunin-sansys.github.io/LCA-calculation-SaaS/`
- **問い合わせフォーム**: `https://shokunin-san-com.studio.site/AI-form14`

これらを変更する場合は、以下のファイルを検索して置換してください：
```bash
grep -r "shokunin-sansys.github.io" components/
grep -r "shokunin-san-com.studio.site" components/
```

### カラースキームの変更
`tailwind.config.ts` で以下の色を編集できます：
- `primary`: メインカラー（深緑）
- `secondary`: セカンダリカラー（青）
- `accent`: アクセントカラー（明るい緑）

### コンテンツの変更
各セクションは `components/` ディレクトリ内の個別ファイルで管理されています：
- `Hero.tsx` - ファーストビュー
- `Problem.tsx` - 課題提示
- `Solution.tsx` - ソリューション
- `BeforeAfter.tsx` - 導入効果
- `Pricing.tsx` - 料金プラン
- `BetaTester.tsx` - ベータテスター募集
- `FAQ.tsx` - よくある質問
- `FinalCTA.tsx` - 最終CTA
- `Footer.tsx` - フッター
- `FloatingCTA.tsx` - フローティングCTA

## 📦 プロジェクト構造

```
green-nh3-lp/
├── app/
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # メインページ
│   └── globals.css         # グローバルスタイル
├── components/
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Solution.tsx
│   ├── BeforeAfter.tsx
│   ├── Pricing.tsx
│   ├── BetaTester.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   └── FloatingCTA.tsx
├── public/                 # 静的ファイル
├── tailwind.config.ts      # Tailwind設定
├── package.json
└── README.md
```

## 🎨 デザインシステム

### カラーパレット
- **Primary (深緑)**: #0A5F3C - グリーンアンモニアを象徴
- **Secondary (青)**: #2563EB - クリーンエネルギー
- **Accent (明るい緑)**: #10B981 - 成長・効率化

### タイポグラフィ
- **見出し**: Bold、大きめのサイズ
- **本文**: Regular、読みやすいサイズ
- **数値**: Monospace（等幅フォント）

### スペーシング
- セクション間: 80px (py-20)
- 要素間: 適度な余白で読みやすさを確保

## 🔧 トラブルシューティング

### ビルドエラーが発生した場合
```bash
# node_modulesとキャッシュを削除
rm -rf node_modules .next
npm install
npm run build
```

### アニメーションが動作しない場合
- Framer Motionが正しくインストールされているか確認
```bash
npm install framer-motion
```

## 📄 ライセンス

このプロジェクトは需要調査用のLPとして作成されています。

## 🤝 サポート

質問や問題がある場合は、お問い合わせフォームからご連絡ください。

---

**開発者へのメモ**:
- 需要調査段階のため、実績数値は記載していません
- 「想定」「予定」表現を使用しています
- ベータテスター募集を強調しています
- デモサイトへの誘導を優先しています
