'use client';

import { motion } from 'framer-motion';
import { Check, Rocket, MessageCircle, Star } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '¥500,000',
      period: '/月',
      description: '算定業務の効率化を開始',
      features: [
        '基本算定機能',
        '月次レポート',
        'Web UI',
        '5ユーザー',
        'メールサポート',
      ],
      cta: 'デモを試す',
      ctaLink: 'https://shokunin-sansys.github.io/LCA-calculation-SaaS/',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '¥1,000,000',
      period: '/月',
      description: '本格的に自動化したい',
      badge: '推奨',
      features: [
        'Starter機能 + 以下',
        'API連携',
        'カスタム原単位',
        '週次レポート',
        '20ユーザー',
        'チャットサポート',
      ],
      cta: 'デモを試す',
      ctaLink: 'https://shokunin-sansys.github.io/LCA-calculation-SaaS/',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '¥2,500,000',
      period: '/月',
      description: 'グループ全体で運用したい',
      features: [
        'Pro機能全て + 以下',
        '専任CSM',
        '監査代行',
        '無制限API',
        'カスタム開発',
        'SLA保証',
        '無制限ユーザー',
      ],
      cta: 'お問い合わせ',
      ctaLink: 'https://shokunin-san-com.studio.site/AI-form14',
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            明快な料金体系（予定）
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            全プランISO14067準拠 | 初期費用別途 | 年間契約で10%OFF
          </p>
          <p className="text-sm text-gray-500">
            ※ 正式リリース時の価格です　※ ベータ版参加企業には特別価格をご用意
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 ${
                plan.highlighted
                  ? 'ring-2 ring-primary shadow-2xl scale-105 z-10'
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-xl text-gray-600">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-primary' : 'text-accent'
                    }`} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={plan.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-primary hover:bg-primary-light text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  {plan.cta === 'デモを試す' ? (
                    <Rocket className="w-5 h-5" />
                  ) : (
                    <MessageCircle className="w-5 h-5" />
                  )}
                  {plan.cta}
                </span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Beta CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20"
        >
          <p className="text-lg text-gray-700 mb-4">
            💡 ベータ版参加をご希望の方・料金について相談したい方は
          </p>
          <a
            href="https://shokunin-san-com.studio.site/AI-form14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-semibold transition-colors underline underline-offset-4"
          >
            こちらからお問い合わせください
            <MessageCircle className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
