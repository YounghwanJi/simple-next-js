"use client"

import React, { useState } from 'react';
import { FAQS } from '../../../shared/lib/constants';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-medium mb-4 tracking-tight text-center">
        Frequently asked questions
      </h2>
      <p className="text-zinc-400 text-center mb-16 text-lg">
        Everything you need to know about Memo.
      </p>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div
            key={faq.question}
            className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full px-8 py-6 text-left flex justify-between items-center gap-4"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-5 h-5 transition-transform flex-shrink-0 ${
                  openIndex === idx ? 'rotate-180' : ''
                }`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-8 pb-6 text-zinc-400 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
