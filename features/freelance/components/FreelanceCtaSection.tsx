'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { Check, ArrowRight } from 'lucide-react';
import { CardCornerPixelBloom } from '@/components/common/CardCornerPixelBloom';

export function FreelanceCtaSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@duongle.dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative flex flex-col w-full select-none space-y-6 sm:space-y-8 pt-4 scroll-mt-24">
      {/* Main Impact Card with Pixel Bloom */}
      <div className="group relative overflow-hidden w-full p-6 sm:p-10 md:p-12 rounded-3xl border border-text-black/10 bg-white/80 shadow-md text-center flex flex-col items-center space-y-6">
        <CardCornerPixelBloom alwaysActive />

        <div className="space-y-2.5 max-w-xl relative z-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-black leading-tight">
            Ready to turn your vision into reality?
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-text-black/75 leading-relaxed font-normal">
            Have a project in mind, need a full-stack developer, or looking for a modern Figma design? Let&apos;s discuss how we can build it together.
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 relative z-20 pt-1">
          {/* Click-to-copy email button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="group/btn relative overflow-hidden inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl border border-text-black/10 bg-white/90 hover:bg-white hover:border-text-black/25 hover:shadow-md text-xs sm:text-sm font-semibold text-text-black transition-all duration-300 cursor-pointer"
            title="Click to copy email"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Copied contact@duongle.dev!</span>
              </>
            ) : (
              <span>contact@duongle.dev</span>
            )}
          </button>

          {/* View Projects Link */}
          <Link
            href="/projects"
            className="group/proj inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-text-black/10 bg-white/70 hover:bg-white hover:border-text-black/25 text-xs sm:text-sm font-medium text-text-black transition-all duration-200 cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/proj:translate-x-1" />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/toiladuong/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl border border-text-black/10 bg-white/70 hover:bg-white hover:border-text-black/25 text-text-black/70 hover:text-text-black transition-all cursor-pointer"
            title="LinkedIn Profile"
          >
            <FaLinkedin className="text-base sm:text-lg" />
          </Link>
        </div>
      </div>

      {/* Bottom Footer Area */}
      <div className="flex items-center justify-between gap-3 w-full pt-6 border-t border-text-black/10 shrink-0">
        <div className="text-xs text-text-black/50 font-normal">
          Designed & Built by Duong Le
        </div>

        <div className="text-xs text-text-black/50 font-normal">
          © {new Date().getFullYear()} Duong Le
        </div>
      </div>
    </section>
  );
}
