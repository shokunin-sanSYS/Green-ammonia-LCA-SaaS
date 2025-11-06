'use client';

import { motion } from 'framer-motion';
import { Rocket, MessageCircle, Check, Users } from 'lucide-react';

export default function BetaTester() {
  const benefits = [
    '正式版リリース前に先行利用',
    '特別価格（正規料金の50%OFF、6ヶ月間）',
    '機能開発への意見反映',
    '専任担当による手厚いサポート',
    '導入事例として貴社名掲載（希望者のみ）',
  ];

  const requirements = [
    'グリーンアンモニアのLCA算定ニーズがある',
    '月1回程度のフィードバックミーティングに参加可能',
    'サービス改善への積極的な提案・協力',
  ];

  return (
    <section id="beta-tester" className="py-20 bg-gradient-to-br from-primary via-primary-light to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold mb-6">
            <Users className="w-5 h-5" />
            先着10社限定募集
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            一緒にサービスを作りませんか？<br />
            ベータテスター募集
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <Check className="w-6 h-6 text-accent" />
              </div>
              ベータ版参加のメリット
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              募集条件
            </h3>
            <ul className="space-y-4 mb-8">
              {requirements.map((requirement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 text-white"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">•</span>
                  </div>
                  <span>{requirement}</span>
                </motion.li>
              ))}
            </ul>

            {/* Recruitment Slots */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-sm text-white/80 mb-2">募集枠</div>
              <div className="text-4xl font-bold text-white mb-2">先着10社限定</div>
              <div className="text-sm text-white/80">お早めにお申し込みください</div>
            </div>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://shokunin-sansys.github.io/LCA-calculation-SaaS/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <Rocket className="w-5 h-5" />
            まずはデモを試す
          </a>

          <a
            href="https://shokunin-san-com.studio.site/AI-form14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            ベータテスターに応募
          </a>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-white/80 text-sm mt-6"
        >
          ※ 応募フォームで「ベータテスター希望」を選択してください
        </motion.p>
      </div>
    </section>
  );
}
