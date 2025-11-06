'use client';

import { motion } from 'framer-motion';
import { Clock, Users, FileCheck, X } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: Clock,
      title: '3ヶ月',
      description: '算定に膨大な工数がかかる',
    },
    {
      icon: Users,
      title: '専門人材',
      description: '不足でプロジェクトが進まない',
    },
    {
      icon: FileCheck,
      title: '監査対応',
      description: 'エビデンス管理だけで1ヶ月',
    },
  ];

  const additionalProblems = [
    '原単位データベースの更新が追いつかない',
    '取引先からの開示要求に即応できない',
    '複数拠点・複数製品の一元管理ができない',
    'ISO14067の要件を満たせているか不安',
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
            LCA算定、こんな課題ありませんか？
          </h2>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Problems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-4">
            {additionalProblems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{problem}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transition Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-gray-600">
            → これらの課題を、<span className="font-bold text-primary">すべて解決します</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
