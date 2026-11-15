'use client';

import { usePreferences } from '@/components/common/PreferencesProvider';
import { getEducation } from '@/features/education/data';

import { useState } from 'react';
import { Check } from 'lucide-react';

import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { TbMailOpenedFilled } from 'react-icons/tb';

import {
  Sheet,
  SheetContent,
  SheetTitle,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getExperiences } from '@/features/experience/data';

interface AboutSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AboutSheet({ open, onOpenChange }: AboutSheetProps) {
  const { locale, t } = usePreferences();
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@duongle.dev');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="full"
        className="!fixed !inset-0 !w-screen !max-w-none !h-[100dvh] !max-h-[100dvh] flex flex-col p-0 bg-background border-none overflow-hidden z-50
        [&>button]:bg-text-black/10 [&>button]:hover:bg-text-black/20 [&>button]:border-none [&>button]:rounded-full [&>button]:z-50 [&>button]:top-4 [&>button]:right-4 sm:[&>button]:top-5 sm:[&>button]:right-6 transition-all"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        <SheetTitle className="sr-only">{t.aboutTitle}</SheetTitle>

        <div className="flex-1 min-h-0 w-full h-full overflow-hidden">
          <div className="h-full w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 overflow-hidden">
            
            {/* LEFT COLUMN: Profile Info & Contact CTA */}
            <aside className="lg:col-span-5 w-full flex flex-col justify-between p-5 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-text-black/10 shrink-0">
              <div className="space-y-3 sm:space-y-5">
                {/* Identity */}
                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-black">
                    Duong Le
                  </h1>
                  <h2 className="text-sm sm:text-base lg:text-lg font-medium text-text-black/80">
                    {t.role}
                  </h2>
                  <p className="text-xs sm:text-sm text-text-black/65 pt-0.5 sm:pt-1 leading-relaxed max-w-xs sm:max-w-sm">
                    {t.aboutSummary}
                  </p>
                </div>

                {/* Contact Now CTA Button */}
                <div className="pt-1 sm:pt-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center px-5 sm:px-6 py-2 sm:py-2.5 text-xs font-semibold text-primary-foreground bg-primary hover:bg-primary/85 rounded-sm transition-colors cursor-pointer"
                  >
                    {emailCopied ? t.emailCopied : t.copyEmail}
                  </button>
                </div>
              </div>

              {/* Bottom: Social Links */}
              <div className="pt-3 sm:pt-6">
                <div className="flex items-center gap-4 text-text-black/75">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label={emailCopied ? t.emailCopied : t.copyEmail}
                    title={emailCopied ? t.emailCopied : t.copyEmail}
                    className="hover:opacity-60 transition-opacity cursor-pointer"
                  >
                    {emailCopied ? (
                      <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <TbMailOpenedFilled className="text-xl sm:text-2xl" />
                    )}
                  </button>
                  <Link
                    href="https://www.linkedin.com/in/toiladuong/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.linkedIn}
                    className="hover:opacity-60 transition-opacity"
                  >
                    <FaLinkedin className="text-xl sm:text-2xl" />
                  </Link>
                  
                </div>
              </div>
            </aside>

            {/* RIGHT COLUMN: Scrollable Content */}
            <main className="lg:col-span-7 flex-1 min-h-0 overflow-hidden flex flex-col">
              <ScrollArea
                className="flex-1 h-full w-full"
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
              >
                <div className="p-6 sm:p-8 lg:px-8 lg:py-10 space-y-10 max-w-3xl">
                  
                  {/* ABOUT */}
                  <section id="sheet-about" className="space-y-3 scroll-mt-8">
                    <h2 className="lg:hidden text-xs font-semibold text-text-black/50">
                      {t.about}
                    </h2>
                    <div className="space-y-3 text-xs sm:text-sm text-text-black/75 leading-relaxed font-normal">
                      <p>
                        {t.bio}
                      </p>
                      <p>
                        {t.aboutDetails}
                      </p>
                    </div>
                  </section>

                  {/* EXPERIENCE (Roadmap) */}
                  <section id="sheet-experience" className="space-y-6 scroll-mt-8">
                    <h2 className="text-xs font-semibold text-text-black/50">
                      {t.experience}
                    </h2>

                    {/* Timeline Container with vertical roadmap track */}
                    <div className="relative pl-7 space-y-8">
                      {/* Vertical line connecting roadmap items */}
                      <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-text-black/20" />

                      {getExperiences(locale).map((exp) => (
                        <div key={exp.id} className="relative group">
                          {/* Roadmap Node Dot */}
                          <div className="absolute -left-[21px] -translate-x-1/2 top-1.5 w-3.5 h-3.5 rounded-full border border-text-black/40 bg-background flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-text-black/60" />
                          </div>

                          {/* Content */}
                          <div className="space-y-2">
                            {/* Date header */}
                            <div className="text-xs text-text-black/50">
                              {exp.period}
                            </div>

                            {/* Role & Company */}
                            <h3 className="text-sm sm:text-base font-bold text-text-black flex items-center gap-1.5">
                              <span>{exp.role}</span>
                              <span className="text-text-black/40">·</span>
                              <span className="text-text-black/85">{exp.company}</span>
                            </h3>

                            {exp.companyVn && (
                              <p className="text-xs text-text-black/50 font-normal">
                                {exp.companyVn}
                              </p>
                            )}

                            {/* Descriptions */}
                            <div className="space-y-1.5 text-xs sm:text-sm text-text-black/75 leading-relaxed">
                              {exp.description.map((desc, idx) => (
                                <p key={idx}>{desc}</p>
                              ))}
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="pt-1 flex flex-wrap gap-1.5">
                              {exp.techStack.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-2.5 py-0.5 text-xs rounded-full bg-text-black/5 text-text-black/80 select-none"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* EDUCATION & CERTIFICATES */}
                  <section id="sheet-education" className="space-y-6 scroll-mt-8">
                    <h2 className="text-xs font-semibold text-text-black/50">
                      {t.education}
                    </h2>

                    <div className="relative pl-7 space-y-8">
                      <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-text-black/20" />

                      {getEducation(locale).map((item) => (
                        <div key={item.id} className="relative group">
                          {/* Roadmap Node Dot */}
                          <div className="absolute -left-[21px] -translate-x-1/2 top-1.5 w-3.5 h-3.5 rounded-full border border-text-black/40 bg-background flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-text-black/60" />
                          </div>

                          <div className="space-y-2">
                            <div className="text-xs text-text-black/50">
                              {item.period}
                            </div>

                            <div>
                              <h3 className="text-sm sm:text-base font-bold text-text-black flex items-center gap-1.5">
                                <span>{item.title}</span>
                                <span className="text-text-black/40">·</span>
                                <span className="text-text-black/85">{item.institution}</span>
                              </h3>
                              {item.honors && (
                                <p className="text-xs text-text-black/65 font-medium mt-0.5">
                                  {item.honors}
                                </p>
                              )}
                            </div>

                            <div className="space-y-1.5 text-xs sm:text-sm text-text-black/75 leading-relaxed">
                              {item.description.map((desc, idx) => (
                                <p key={idx}>{desc}</p>
                              ))}
                            </div>

                            <div className="pt-1 flex flex-wrap gap-1.5">
                              {item.skills.map((skill, idx) => (
                                <span
                                  key={idx}
                                  className="px-2.5 py-0.5 text-xs rounded-full bg-text-black/5 text-text-black/80 select-none"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                </div>
              </ScrollArea>
            </main>

          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
