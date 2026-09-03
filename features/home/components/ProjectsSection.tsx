'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ALL_PROJECTS_DATA, ProjectCard } from '@/features/projects';

export function ProjectsSection() {
  const featuredProjects = ALL_PROJECTS_DATA.slice(0, 2);

  return (
    <section className="relative flex flex-col w-full bg-transparent select-none space-y-5 sm:space-y-6">
      {/* Title Projects & Link to full projects page */}
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-black">
          Projects
        </h2>

        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-text-black/60 hover:text-text-black transition-colors group cursor-pointer"
        >
          <span>View all projects</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Projects Grid: 2 cột dạng Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

