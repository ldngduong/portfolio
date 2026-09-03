'use client';

import { CardCornerPixelBloom } from '@/components/common/CardCornerPixelBloom';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiNestjs,
  SiSocketdotio,
  SiPostgresql,
  SiRedis,
  SiFigma,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
} from 'react-icons/si';
import { LuLayoutTemplate, LuSmartphone } from 'react-icons/lu';
import type { IconType } from 'react-icons';

interface SkillBadge {
  name: string;
  icon: IconType;
  color?: string;
}

interface SkillCategory {
  title: string;
  skills: SkillBadge[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'FRONTEND',
    skills: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#00D8FF' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'shadcn/ui', icon: SiShadcnui, color: '#000000' },
    ],
  },
  {
    title: 'BACKEND & DATABASE',
    skills: [
      { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
      { name: 'Socket.io', icon: SiSocketdotio, color: '#171717' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    ],
  },
  {
    title: 'UI/UX & DESIGN',
    skills: [
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Design Systems', icon: LuLayoutTemplate, color: '#8B5CF6' },
      { name: 'Responsive Layouts', icon: LuSmartphone, color: '#10B981' },
    ],
  },
  {
    title: 'DEVELOPMENT TOOLS',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="relative flex flex-col w-full bg-transparent select-none space-y-5 sm:space-y-6">
      {/* Title Skills */}
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-black">
          Skills
        </h2>
      </div>

      {/* List Badges Container với hiệu ứng Pixel Bloom luôn hiện ở góc phải dưới */}
      <div className="group relative overflow-hidden w-full p-5 sm:p-6 rounded-2xl border border-text-black/10 bg-white/70 shadow-sm">
        <CardCornerPixelBloom alwaysActive />

        <div className="relative z-10 w-full space-y-6 sm:space-y-7">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className="space-y-2.5">
              {/* Category Subtitle */}
              <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-text-black/50">
                {category.title}
              </h3>

              {/* Badges Flow */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border border-dashed border-text-black/15 bg-white/90 hover:bg-white hover:border-solid hover:border-text-black/40 hover:shadow-sm transition-all duration-200 cursor-default select-none group/badge"
                    >
                      <Icon
                        className="text-base sm:text-lg shrink-0 transition-transform duration-200 group-hover/badge:scale-110"
                        style={{ color: skill.color }}
                      />
                      <span className="text-xs sm:text-sm font-medium text-text-black">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

