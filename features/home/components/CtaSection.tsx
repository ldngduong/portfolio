'use client';

import Link from 'next/link';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { TbMailOpenedFilled } from 'react-icons/tb';
import { CardCornerPixelBloom } from '@/components/common/CardCornerPixelBloom';

export function CtaSection() {
  return (
    <section className="relative flex flex-col w-full bg-transparent select-none space-y-6 sm:space-y-8">
      {/* Main Impact Body */}
      <div className="w-full space-y-4 sm:space-y-5 flex flex-col items-center text-center">
        <div className="space-y-1.5 sm:space-y-2 flex flex-col items-center w-full">
          <h2 className="w-full text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-black leading-tight">
            Let&apos;s build something extraordinary together.
          </h2>
          <p className="w-full text-center text-xs sm:text-sm md:text-base text-text-black/70 font-normal leading-relaxed">
            Have a project in mind, looking for a software engineer, or just want to say hi? My inbox is always open.
          </p>
        </div>

        {/* Action Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          {/* Email button */}
          <a
            href="mailto:letungduong1624@gmail.com"
            className="group relative overflow-hidden inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl border border-text-black/10 bg-white/70 hover:bg-white hover:border-text-black/25 hover:shadow-lg text-xs sm:text-sm font-semibold text-text-black transition-all duration-300 cursor-pointer"
          >
            <CardCornerPixelBloom />
            <TbMailOpenedFilled className="text-base sm:text-lg text-text-black/70 group-hover:text-text-black transition-colors relative z-20 pointer-events-none" />
            <span className="relative z-20 pointer-events-none">letungduong1624@gmail.com</span>
          </a>

          {/* LinkedIn Icon Button */}
          <Link
            href="https://www.linkedin.com/in/toiladuong/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="group relative overflow-hidden p-2.5 sm:p-3 rounded-2xl border border-text-black/10 bg-white/70 hover:bg-white hover:border-text-black/25 hover:shadow-lg text-text-black/70 hover:text-text-black transition-all duration-300 cursor-pointer"
            title="LinkedIn Profile"
          >
            <CardCornerPixelBloom />
            <FaLinkedin className="text-base sm:text-lg relative z-20 pointer-events-none" />
          </Link>

          {/* GitHub Icon Button */}
          <Link
            href="https://github.com/letungduong24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="group relative overflow-hidden p-2.5 sm:p-3 rounded-2xl border border-text-black/10 bg-white/70 hover:bg-white hover:border-text-black/25 hover:shadow-lg text-text-black/70 hover:text-text-black transition-all duration-300 cursor-pointer"
            title="GitHub Profile"
          >
            <CardCornerPixelBloom />
            <FaGithubSquare className="text-base sm:text-lg relative z-20 pointer-events-none" />
          </Link>
        </div>
      </div>

      {/* Bottom Footer Area */}
      <div className="flex items-center justify-between gap-3 w-full pt-4 border-t border-text-black/10 shrink-0">
        <div className="text-xs text-text-black/50 font-normal">
          Designed by Duong Le
        </div>

        <div className="text-xs text-text-black/50 font-normal">
          © {new Date().getFullYear()} Duong Le
        </div>
      </div>
    </section>
  );
}

