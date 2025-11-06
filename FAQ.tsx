'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'デモではどこまで試せますか？',
      answer: '実際の算定プロセスをすべて体験できます。サンプルデータを使って、データ投入→自動算定→レポート出力まで一通りの操作が可能です。所要時間は約3分です。',
    },
    {
      question: '既存システム（ERP、MESなど）との連携は可能ですか？',
      answer: 'はい。REST API / GraphQL対応で、主要なERPシステム（SAP、Oracle、Microsoft Dynamicsなど）と連携実績があります。初期設定時に専任SEがサポートします。',
    },
    {
      question: '算定精度はどの程度ですか？',
      answer: '誤差±5%以内を目標としています。ISO14067の要件を満たす算定方法を採用し、第三者検証にも対応できる品質を目指しています。',
    },
    {
      question: 'ISO14067への対応状況は？',
      answer: '全プランでISO14067の要件を満たす設計となっています。算定方法、データ品質管理、トレーサビリティなど、規格が求めるすべての項目に対応予定です。',
    },
    {
      question: 'データセキュリティは？',
      answer: 'ISO27001認証取得を目指しています。データは暗号化（AES-256）され、国内データセンターで管理されます。また、アクセス制御、監査ログ、定期的な脆弱性診断を実施予定です。',
    },
    {
      question: '導入期間はどのくらいですか？',
      answer: '標準的な導入期間は6週間を想定しています（PoC 2週間 + 本導入4週間）。ただし、既存システムとの連携範囲により前後する場合があります。',
    },
    {
      question: 'サポート体制は？',
      answer: 'Starter: メール対応（平日10-18時）、Pro: チャット対応（平日9-19時）、Enterprise: 専任カスタマーサクセスマネージャー配置＋24時間緊急対応をご用意する予定です。',
    },
    {
      question: '原単位データベースの更新頻度は？',
      answer: '毎月自動更新を予定しています。IDEA v3、Ecoinventなど主要データベースの最新版を常に反映します。また、カスタム原単位の登録・管理も可能です。',
    },
    {
      question: 'まだ正式リリース前ですが、デモは実際のシステムですか？',
      answer: 'はい。デモは開発中の実際のシステムです。主要機能は実装済みで、操作感や算定精度を確認いただけます。',
    },
    {
      question: 'ベータ版はいつから利用できますか？',
      answer: '2025年春を予定しています。事前登録いただいた方、またはベータテスターにお申し込みいただいた方には優先的にご案内します。',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            よくあるご質問
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-primary/30 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  Q. {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      A. {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">まだ疑問がある方へ</p>
          <a
            href="https://shokunin-san-com.studio.site/AI-form14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-semibold transition-colors underline underline-offset-4"
          >
            その他のご質問は、お気軽にお問い合わせください →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
