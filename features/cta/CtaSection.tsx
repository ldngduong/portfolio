'use client';

import Link from 'next/link';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { TbMailOpenedFilled } from 'react-icons/tb';

export function CtaSection() {
  return (
    <section className="px-4 sm:px-6 pb-4 sm:pb-6 pt-16 sm:pt-20 md:pt-22 relative flex flex-col h-full min-h-0 w-full bg-transparent overflow-hidden justify-between select-none">
      <div className="shrink-0" />

      {/* Main Impact Body (Căn trái, kích thước lớn) */}
      <div className="max-w-4xl space-y-4 sm:space-y-6 my-auto">
        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-black leading-[1.08] sm:leading-[1.05]">
            Let&apos;s build something extraordinary together.
          </h2>
          <p className="text-xs sm:text-base md:text-lg lg:text-xl text-text-black/70 max-w-2xl font-normal leading-relaxed pt-1 sm:pt-2">
            Have a project in mind, looking for a software engineer, or just want to say hi? My inbox is always open.
          </p>
        </div>

        {/* Action Button: Direct mailto link */}
        <div className="pt-2 sm:pt-4">
          <a
            href="mailto:letungduong1624@gmail.com"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3.5 text-xs sm:text-base font-bold text-white bg-text-black hover:bg-neutral-800 rounded-sm transition-all shadow-sm hover:shadow cursor-pointer"
          >
            Contact Now
          </a>
        </div>
      </div>

      {/* Bottom Footer Area */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full pt-4 border-t border-text-black/10 shrink-0">
        <div className="flex items-center gap-4 text-text-black">
          <Link
            href="mailto:letungduong1624@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email Duong Le"
            className="hover:opacity-60 transition-opacity"
          >
            <TbMailOpenedFilled className="text-2xl sm:text-3xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/toiladuong/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:opacity-60 transition-opacity"
          >
            <FaLinkedin className="text-2xl sm:text-3xl" />
          </Link>
          <Link
            href="https://github.com/letungduong24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:opacity-60 transition-opacity"
          >
            <FaGithubSquare className="text-2xl sm:text-3xl" />
          </Link>
        </div>

        <div className="text-xs sm:text-sm text-text-black/50 font-normal">
          © {new Date().getFullYear()} Duong Le
        </div>
      </div>
    </section>
  );
}
