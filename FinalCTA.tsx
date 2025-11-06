'use client';

import { motion } from 'framer-motion';
import { Rocket, MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            まずは、デモで<br />
            体験してみてください。
          </h2>
        </motion.div>

        {/* Two Column CTAs */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Demo CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-3">
              まずは体験してみる
            </h3>
            <ul className="text-white/80 text-center mb-8 space-y-2">
              <li>登録不要・3分で完了</li>
              <li>実際の操作感を今すぐ確認</li>
            </ul>
            <a
              href="https://shokunin-sansys.github.io/LCA-calculation-SaaS/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
            >
              <span className="flex items-center justify-center gap-2">
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                デモを試す
              </span>
            </a>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-primary-light" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-3">
              相談・お問い合わせ
            </h3>
            <ul className="text-white/80 text-center mb-8 space-y-2">
              <li>ベータテスター応募</li>
              <li>導入相談・見積もり</li>
              <li>サービス詳細のご説明</li>
            </ul>
            <a
              href="https://shokunin-san-com.studio.site/AI-form14"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
            >
              <span className="flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                お問い合わせ
              </span>
            </a>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-white/60"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            ISO14067準拠設計
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            2025年春リリース予定
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            ベータ版先着10社募集中
          </div>
        </motion.div>
      </div>
    </section>
  );
}
