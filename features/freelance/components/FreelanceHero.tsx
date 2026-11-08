'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import FigmaCursorAnimation from '@/components/common/FigmaCursorAnimation';

export function FreelanceHero() {
  return (
    <section className="relative flex flex-col w-full select-none space-y-6 sm:space-y-8">
      {/* Back to Home Link */}
      <div className="flex items-center justify-between w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-text-black/60 hover:text-text-black transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Figma Selection & Cursor Animation Hero */}
      <div className="w-full">
        <FigmaCursorAnimation
          text={['Have an idea?', `Let's build something`]}
          badgeName="Duong Le"
        />
      </div>

      {/* Hero Description - Full Width */}
      <div className="w-full">
        <p className="text-base sm:text-lg md:text-xl text-text-black/80 font-normal leading-relaxed w-full">
          I partner with founders, businesses, and creators to transform ambitious ideas into modern digital experiences. From pixel-perfect <span className="font-semibold text-text-black">Figma UI/UX</span> to full-stack <span className="font-semibold text-text-black">Web Applications</span>, fast <span className="font-semibold text-text-black">Landing Pages</span>, and smooth cross-platform <span className="font-semibold text-text-black">Mobile Apps</span>.
        </p>
      </div>
    </section>
  );
}
