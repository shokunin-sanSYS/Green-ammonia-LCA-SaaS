'use client';

import { motion } from 'framer-motion';
import { TrendingDown } from 'lucide-react';

export default function BeforeAfter() {
  const comparisons = [
    {
      label: '算定期間',
      before: '3ヶ月',
      after: '3週間',
      reduction: '85%削減想定',
    },
    {
      label: '必要人員',
      before: '専門家3名 + アシスタント2名',
      after: '1名（確認作業のみ）',
      reduction: '80%削減想定',
    },
    {
      label: '算定コスト',
      before: '約500万円/回',
      after: '約80万円/回',
      reduction: '84%削減想定',
    },
    {
      label: '監査対応',
      before: '準備に1ヶ月 + 修正往復',
      after: 'ワンクリック自動レポート',
      reduction: '工数90%削減想定',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            導入後、これだけ変わる想定です。
          </h2>
        </motion.div>

        {/* Comparison Grid */}
        <div className="space-y-8 mb-16">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                {/* Before */}
                <div className="text-center md:text-right">
                  <div className="text-sm font-semibold text-gray-500 mb-2">従来の方法</div>
                  <div className="text-2xl font-bold text-gray-400 mb-1">{item.before}</div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                </div>

                {/* Arrow with Reduction */}
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-2">
                    <TrendingDown className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-sm font-bold text-accent">{item.reduction}</div>
                </div>

                {/* After */}
                <div className="text-center md:text-left">
                  <div className="text-sm font-semibold text-primary mb-2">本サービス導入後（想定）</div>
                  <div className="text-2xl font-bold text-primary mb-1">{item.after}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-12 text-center text-white shadow-2xl"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              平均的な導入企業で
            </h3>
            <div className="text-6xl md:text-7xl font-bold mb-4">
              初年度ROI <span className="text-accent-light">320%</span>
            </div>
            <p className="text-xl text-white/90 mb-2">達成想定</p>
            <p className="text-sm text-white/70">※ 効果は試算値です。実際の効果は業種・規模により異なります</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
