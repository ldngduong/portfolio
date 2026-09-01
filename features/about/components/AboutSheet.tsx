'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { TbMailOpenedFilled } from 'react-icons/tb';

import {
  Sheet,
  SheetContent,
  SheetTitle,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';

interface AboutSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyVn?: string;
  period: string;
  location: string;
  description: string[];
  techStack: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: '3nest-invest',
    role: 'Frontend Developer',
    company: '3NestInvest',
    period: '2026 — Present',
    location: 'Hanoi, Vietnam',
    description: [
      'Engineer high-performance web applications and responsive client dashboards using Next.js, React, and TypeScript.',
      'Architect modular UI design systems with Tailwind CSS, ensuring smooth rendering performance and consistent user experience.',
      'Collaborate with cross-functional product and backend teams to integrate secure RESTful APIs and real-time data workflows.',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'REST APIs',
    ],
  },
  {
    id: 'ecco',
    role: 'Backend Developer Intern',
    company: 'ECCO',
    companyVn: 'Center for Economic and Community Development',
    period: 'Jan — Feb 2026',
    location: 'Hanoi, Vietnam',
    description: [
      'Developed and maintained RESTful API services and backend workflows supporting community-focused digital platforms.',
      'Designed relational database models, handled data migrations, and optimized SQL queries in PostgreSQL.',
      'Implemented API validation, error handling pipelines, and conducted endpoint testing with Postman and Docker.',
    ],
    techStack: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'REST APIs',
      'Docker',
      'Postman',
    ],
  },
  {
    id: 'freelance',
    role: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2024 — Present',
    location: 'Remote',
    description: [
      'Delivered bespoke web applications, landing pages, and interactive client platforms from Figma concepts to production deployment.',
      'Transformed complex design layouts into pixel-perfect, accessible code with responsive behaviors and web performance optimization.',
      'Managed client communication, technical requirements scoping, and automated deployment pipelines on Vercel.',
    ],
    techStack: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Figma to Code',
      'Vercel',
    ],
  },
];

interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  honors?: string;
  description: string[];
  skills: string[];
}

const EDUCATION: EducationItem[] = [
  {
    id: 'tlu',
    title: 'Bachelor of Software Engineering',
    institution: 'Thuyloi University (TLU)',
    period: '10/2022 — 8/2026',
    honors: 'Graduated with Honors',
    description: [
      'Completed a 4-year engineering curriculum covering Software Architecture, Algorithms & Data Structures, Database Systems, Object-Oriented Design, and Fullstack Web Development.',
      'Graduated with honors; led capstone engineering projects applying agile software methodologies.',
    ],
    skills: [
      'Software Architecture',
      'Data Structures & Algorithms',
      'Database Systems',
      'OOP Design',
      'System Analysis',
    ],
  },
  {
    id: 'udemy-figma',
    title: 'Learn Figma: UI/UX Design Masterclass',
    institution: 'Udemy',
    period: '2025',
    honors: 'Certificate of Completion',
    description: [
      'Mastered end-to-end UI/UX product design workflows from fundamental principles to production-ready design systems.',
      'Built interactive high-fidelity prototypes, component architectures, auto layout rules, design tokens, and seamless developer handoffs.',
    ],
    skills: [
      'Figma',
      'UI/UX Design',
      'Design Systems',
      'Prototyping',
      'Auto Layout',
      'Design Tokens',
    ],
  },
];

export function AboutSheet({ open, onOpenChange }: AboutSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="full"
        className="!fixed !inset-0 !w-screen !max-w-none !h-screen !max-h-screen flex flex-col p-0 bg-background border-none overflow-hidden z-50
        [&>button]:bg-text-black/10 [&>button]:hover:bg-text-black/20 [&>button]:border-none [&>button]:rounded-full [&>button]:z-50 [&>button]:top-5 [&>button]:right-6 transition-all"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        <SheetTitle className="sr-only">About Duong Le - Profile & Experience</SheetTitle>

        <div className="flex-1 min-h-0 w-full h-full overflow-hidden">
          <div className="h-full w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
            
            {/* LEFT COLUMN: Profile Info & Contact CTA */}
            <aside className="lg:col-span-5 h-full flex flex-col justify-between p-6 sm:p-8 lg:p-10 overflow-y-auto lg:overflow-y-hidden border-b lg:border-b-0 lg:border-r border-text-black/10">
              <div className="space-y-5">
                {/* Identity */}
                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-black">
                    Duong Le
                  </h1>
                  <h2 className="text-base sm:text-lg font-medium text-text-black/80">
                    Software Engineer
                  </h2>
                  <p className="text-sm text-text-black/65 pt-1 leading-relaxed max-w-xs">
                    Building scalable web applications with clean architecture — bridging smooth frontend with high-performance backends.
                  </p>
                </div>

                {/* Contact Now CTA Button */}
                <div className="pt-2">
                  <a
                    href="mailto:letungduong1624@gmail.com"
                    className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold text-white bg-text-black hover:bg-neutral-800 rounded-sm transition-colors cursor-pointer"
                  >
                    Contact Now
                  </a>
                </div>
              </div>

                {/* Bottom: Social Links */}
                <div className="pt-6">
                  <div className="flex items-center gap-4 text-text-black/75">
                    <Link
                      href="mailto:letungduong1624@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Email Duong Le"
                      className="hover:opacity-60 transition-opacity"
                    >
                      <TbMailOpenedFilled className="text-2xl" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/toiladuong/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="hover:opacity-60 transition-opacity"
                    >
                      <FaLinkedin className="text-2xl" />
                    </Link>
                    <Link
                      href="https://github.com/letungduong24"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="hover:opacity-60 transition-opacity"
                    >
                      <FaGithubSquare className="text-2xl" />
                    </Link>
                  </div>
                </div>
              </aside>

              {/* RIGHT COLUMN: Scrollable Content */}
              <main className="lg:col-span-7 h-full min-h-0 overflow-hidden flex flex-col bg-background">
                <ScrollArea
                  className="flex-1 h-full w-full"
                  onWheel={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                >
                  <div className="p-6 sm:p-8 lg:px-8 lg:py-10 space-y-10 max-w-3xl">
                    
                    {/* ABOUT */}
                    <section id="sheet-about" className="space-y-3 scroll-mt-8">
                      <h2 className="lg:hidden text-xs font-semibold text-text-black/50">
                        About
                      </h2>
                      <div className="space-y-3 text-sm text-text-black/75 leading-relaxed font-normal">
                        <p>
                          I am a Software Engineer focused on building fast, accessible, and maintainable digital products. I combine responsive frontend engineering in <strong>Next.js</strong>, <strong>React</strong>, and <strong>TypeScript</strong> with solid backend foundations in <strong>Node.js</strong> and <strong>PostgreSQL</strong>.
                        </p>
                        <p>
                          Whether turning intricate Figma designs into production-ready web apps or architecting scalable backend APIs, I prioritize clean code structure, performance optimization, and thoughtful user interactions.
                        </p>
                      </div>
                    </section>

                    {/* EXPERIENCE (Roadmap) */}
                    <section id="sheet-experience" className="space-y-6 scroll-mt-8">
                      <h2 className="text-xs font-semibold text-text-black/50">
                        Experience
                      </h2>

                      {/* Timeline Container with vertical roadmap track */}
                      <div className="relative pl-7 space-y-8">
                        {/* Vertical line connecting roadmap items */}
                        <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-text-black/20" />

                        {EXPERIENCES.map((exp) => (
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
                              <h3 className="text-base font-bold text-text-black flex items-center gap-1.5">
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
                        Education & Certifications
                      </h2>

                      <div className="relative pl-7 space-y-8">
                        <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-text-black/20" />

                        {EDUCATION.map((item) => (
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
                                <h3 className="text-base font-bold text-text-black flex items-center gap-1.5">
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
