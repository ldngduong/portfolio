'use client';

import { useState } from 'react';
import { FREELANCE_FAQS } from '../data';
import { Plus, Minus } from 'lucide-react';
import { CardCornerPixelBloom } from '@/components/common/CardCornerPixelBloom';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative flex flex-col w-full select-none space-y-5 sm:space-y-6 scroll-mt-24">
      {/* Section Header - Full Width */}
      <div className="space-y-1.5 w-full">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-black">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-text-black/70 w-full font-normal leading-relaxed">
          Everything you need to know about starting a project, communication channels, and delivery expectations.
        </p>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3 w-full">
        {FREELANCE_FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="group relative overflow-hidden rounded-2xl border border-text-black/10 bg-white/70 hover:bg-white transition-all duration-300"
            >
              <CardCornerPixelBloom />

              <div className="relative z-20">
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-text-black tracking-tight">
                    {faq.question}
                  </span>
                  <span className="w-7 h-7 rounded-lg bg-text-black/5 flex items-center justify-center text-text-black shrink-0 transition-transform duration-200">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-text-black/75 leading-relaxed border-t border-text-black/5">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
