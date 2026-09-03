'use client';

import { useState } from 'react';
import Image from 'next/image';
import HeroImage from '@/public/hero1hero.webp';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { TbMailOpenedFilled } from 'react-icons/tb';
import Link from 'next/link';
import { AboutSheet } from '@/features/about/components/AboutSheet';

export function HeroSection() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <>
      <section className="relative flex flex-col w-full bg-transparent select-none space-y-6 sm:space-y-8">
        {/* Top Profile Header */}
        <div className="flex items-center gap-6 sm:gap-8">
          {/* Avatar to (không nền xám, ấn vào mở About Sheet) */}
          <div
            onClick={() => setIsAboutOpen(true)}
            className="group relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-text-black/15 shrink-0 bg-transparent shadow-sm cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            title="View About details"
          >
            <Image
              src={HeroImage}
              alt="Duong Le"
              fill
              priority
              className="object-cover object-top transition-opacity duration-300 group-hover:opacity-90"
            />
          </div>

          {/* Cột thông tin bên phải */}
          <div className="flex flex-col justify-center space-y-1.5">
            {/* Tên to (ấn vào mở About Sheet) */}
            <div>
              <h1
                onClick={() => setIsAboutOpen(true)}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-black leading-tight cursor-pointer hover:opacity-70 transition-opacity inline-block"
                title="View About details"
              >
                Duong Le
              </h1>
            </div>

            {/* Role font-bold */}
            <p className="font-bold text-text-black/80">
              Software Engineer
            </p>

            {/* Contact Icons đặt dưới Role */}
            <div className="flex items-center gap-2.5 pt-1 text-text-black/70">
              <Link
                href="mailto:letungduong1624@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send email"
                className="hover:text-text-black transition-colors"
              >
                <TbMailOpenedFilled className="text-lg sm:text-xl" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/toiladuong/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="hover:text-text-black transition-colors"
              >
                <FaLinkedin className="text-lg sm:text-xl" />
              </Link>

              <Link
                href="https://github.com/letungduong24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="hover:text-text-black transition-colors"
              >
                <FaGithubSquare className="text-lg sm:text-xl" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bio tóm gọn & Full Width */}
        <div className="w-full">
          <p className="text-base sm:text-lg md:text-xl text-text-black/75 leading-relaxed font-normal">
            <strong className="font-bold text-text-black">Software Engineer</strong> specializing in building fast, accessible, and scalable digital products. Bridging responsive frontend engineering in <strong className="font-bold text-text-black">Next.js</strong>, <strong className="font-bold text-text-black">React</strong>, and <strong className="font-bold text-text-black">TypeScript</strong> with solid backend architectures in <strong className="font-bold text-text-black">Node.js</strong> and <strong className="font-bold text-text-black">PostgreSQL</strong> — focusing on clean code, performance, and thoughtful user interactions.
          </p>
        </div>
      </section>

      {/* About Sheet Drawer */}
      <AboutSheet open={isAboutOpen} onOpenChange={setIsAboutOpen} />
    </>
  );
}

