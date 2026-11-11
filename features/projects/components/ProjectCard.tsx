'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { SiFigma } from 'react-icons/si';
import { CardCornerPixelBloom } from '@/components/common/CardCornerPixelBloom';
import { buttonVariants } from '@/components/ui/button';
import type { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden flex flex-col justify-between p-4 sm:p-5 rounded-2xl border border-text-black/10 bg-white/70 hover:bg-white hover:border-text-black/25 hover:shadow-lg transition-all duration-300">
      {/* Hiệu ứng đuôi Pixel tỏa ra từ góc phải dưới cùng khi hover */}
      <CardCornerPixelBloom />

      <div className="w-full space-y-3.5 relative">
        {/* Project Mockup Image */}
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-text-black/10 bg-neutral-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>

        {/* Project Title & Role */}
        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl font-bold text-text-black tracking-tight group-hover:text-text-black transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-text-black/60">
            {project.role || `${project.category} / ${project.meta}`}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-text-black/75 leading-relaxed font-normal line-clamp-3">
          {project.description}
        </p>
      </div>

      <div className="mt-4 space-y-3">
        <ul aria-label="Technology stack" className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-xs font-medium text-text-black/65">
          {project.techStack.slice(0, 4).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
          {project.techStack.length > 4 && (
            <li>
              +{project.techStack.length - 4}
            </li>
          )}
        </ul>

        <div className="flex flex-wrap items-center gap-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Site: ${project.title}`}
              className={buttonVariants({ className: 'h-10 gap-2 rounded-full px-3.5 text-xs cursor-pointer after:absolute after:inset-0' })}
            >
              Visit Site <ArrowUpRight aria-hidden="true" />
            </a>
          )}
          {project.figmaUrl && (
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Figma: ${project.title}`}
              className={buttonVariants({ variant: 'outline', className: 'relative h-10 gap-2 rounded-full px-3.5 text-xs cursor-pointer' })}
            >
              <SiFigma aria-hidden="true" /> Figma
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

