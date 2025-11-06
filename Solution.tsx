'use client';

import { motion } from 'framer-motion';
import { Bot, Database, CheckCircle, Link as LinkIcon, ArrowRight } from 'lucide-react';

export default function Solution() {
  const features = [
    {
      icon: Bot,
      title: 'AI算定',
      description: '自動計算エンジン',
    },
    {
      icon: Database,
      title: '原単位DB',
      description: '15,000以上のデータ',
    },
    {
      icon: CheckCircle,
      title: 'ISO準拠',
      description: '14067完全対応',
    },
    {
      icon: LinkIcon,
      title: 'API連携',
      description: 'シームレス統合',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            たった3週間で、<br />
            <span className="text-primary">LCA算定を完全自動化。</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            原単位データベース×自動算定エンジン×監査対応レポート<br />
            すべてが、ひとつのプラットフォームに。
          </p>
        </motion.div>

        {/* Process Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">01</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">データ投入</h3>
              <p className="text-gray-600 mb-3">Excel・API経由で簡単入力</p>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                <span className="text-accent font-mono font-bold">3分</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">02</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">自動計算</h3>
              <p className="text-gray-600 mb-3">AI搭載エンジンが即座に算定</p>
              <div className="inline-flex items-center justify-center px-4 py-2 bg-secondary/10 rounded-full">
                <span className="text-secondary font-mono font-bold text-sm">リアルタイム</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>

            {/* Step 3 */}
            <div className="text-center md:col-start-2">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">03</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">レポート生成</h3>
              <p className="text-gray-600 mb-3">ISO準拠レポート自動作成</p>
              <div className="inline-flex items-center justify-center px-4 py-2 bg-accent/10 rounded-full">
                <span className="text-accent font-mono font-bold text-sm">ワンクリック</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="https://shokunin-sansys.github.io/LCA-calculation-SaaS/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            今すぐデモを試す
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
