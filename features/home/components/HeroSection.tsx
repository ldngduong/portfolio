'use client';

import { usePreferences } from '@/components/common/PreferencesProvider';

import { useState } from 'react';
import Image from 'next/image';
import HeroImage from '@/public/hero1hero.webp';
import { FaLinkedin } from 'react-icons/fa';
import { TbMailOpenedFilled } from 'react-icons/tb';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { AboutSheet } from '@/features/about/components/AboutSheet';

export function HeroSection() {
  const { t } = usePreferences();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@duongle.dev');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <>
      <section className="relative flex flex-col w-full bg-transparent select-none space-y-6 sm:space-y-8">
        {/* Top Profile Header */}
        <div className="flex items-center gap-6 sm:gap-8">
          {/* Avatar to (không nền xám, ấn vào mở About Sheet) */}
          <div
            onClick={() => setIsAboutOpen(true)}
            className="group relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-text-black/15 shrink-0 bg-transparent shadow-sm cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            title={t.viewAbout}
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
                title={t.viewAbout}
              >
                Duong Le
              </h1>
            </div>

            {/* Role font-bold */}
            <p className="font-bold text-text-black/80">
              {t.role}
            </p>

            {/* Contact Icons đặt dưới Role */}
            <div className="flex items-center gap-2.5 pt-1 text-text-black/70">
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label={emailCopied ? t.emailCopied : t.copyEmail}
                title={emailCopied ? t.emailCopied : t.copyEmail}
                className="hover:text-text-black transition-colors cursor-pointer"
              >
                {emailCopied ? (
                  <Check className="w-[18px] h-[18px] text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <TbMailOpenedFilled className="text-lg sm:text-xl" />
                )}
              </button>

              <Link
                href="https://www.linkedin.com/in/toiladuong/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.linkedIn}
                className="hover:text-text-black transition-colors"
              >
                <FaLinkedin className="text-lg sm:text-xl" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bio tóm gọn & Full Width */}
        <div className="w-full">
          <p className="text-base sm:text-lg md:text-xl text-text-black/75 leading-relaxed font-normal">
            {t.bio}
          </p>
        </div>
      </section>

      {/* About Sheet Drawer */}
      <AboutSheet open={isAboutOpen} onOpenChange={setIsAboutOpen} />
    </>
  );
}
