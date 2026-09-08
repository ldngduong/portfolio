'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CardCornerPixelBloom } from '@/components/common/CardCornerPixelBloom';
import type { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const targetUrl = project.demoUrl || project.githubUrl || '#';

  return (
    <Link
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden flex flex-col justify-between p-4 sm:p-5 rounded-2xl border border-text-black/10 bg-white/70 hover:bg-white hover:border-text-black/25 hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      {/* Hiệu ứng đuôi Pixel tỏa ra từ góc phải dưới cùng khi hover */}
      <CardCornerPixelBloom />

      <div className="w-full space-y-3.5 relative z-20 pointer-events-none">
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

      {/* Bottom Footer Row: Tech Stack & Visit Site */}
      <div className="pt-4 mt-4 border-t border-text-black/10 flex items-center justify-between gap-3 relative z-20 pointer-events-none">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-1.5 min-w-0">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-text-black/5 text-text-black/75 border border-text-black/5"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[10px] font-medium text-text-black/50 px-1">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Visit site */}
        <span className="text-xs sm:text-sm font-medium text-text-black/60 group-hover:text-text-black group-hover:underline transition-colors shrink-0">
          Visit site
        </span>
      </div>
    </Link>
  );
}

