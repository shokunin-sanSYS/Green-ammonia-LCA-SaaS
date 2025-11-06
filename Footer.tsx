'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = {
    product: [
      { label: '機能', href: '#features' },
      { label: '料金', href: '#pricing' },
      { label: 'ベータテスター募集', href: '#beta-tester' },
      { label: 'よくある質問', href: '#faq' },
    ],
    company: [
      { label: 'お問い合わせ', href: 'https://shokunin-san-com.studio.site/AI-form14' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                グリーンNH₃ LCA自動算定SaaS
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                グリーンアンモニアのカーボンフットプリント算定を<br />
                完全自動化し、サステナビリティ経営を加速します。
              </p>
              <div className="flex gap-2 text-sm text-gray-500">
                <span className="px-3 py-1 bg-white/5 rounded-full">ISO14067準拠</span>
                <span className="px-3 py-1 bg-white/5 rounded-full">2025年春リリース</span>
              </div>
            </motion.div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-white">製品</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-white">企業情報</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 グリーンNH₃ LCA自動算定SaaS. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                利用規約
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                プライバシーポリシー
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                特定商取引法
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
