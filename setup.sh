#!/bin/bash

echo "========================================="
echo "グリーンNH₃ LCA SaaS LP セットアップ"
echo "========================================="
echo ""

# プロジェクトディレクトリに移動
cd "$(dirname "$0")"

# Node.jsバージョン確認
echo "📋 Node.jsバージョンを確認中..."
node --version
npm --version
echo ""

# 依存関係のインストール
echo "📦 依存関係をインストール中..."
npm install
echo ""

# ビルドテスト
echo "🔨 ビルドをテスト中..."
npm run build
echo ""

echo "========================================="
echo "✅ セットアップ完了！"
echo "========================================="
echo ""
echo "次のステップ:"
echo "  1. ローカルで確認: npm run dev"
echo "  2. Vercelにデプロイ: vercel"
echo ""
echo "詳しくは DEPLOYMENT_GUIDE.md をご覧ください"
echo ""
