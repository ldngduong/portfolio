import type { Metadata } from 'next';
import { Navbar } from '@/components/common/Navbar';
import { ALL_PROJECTS_DATA, ProjectCard } from '@/features/projects';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects — Duong Le',
  description: 'Full list of engineering projects and digital products built by Duong Le.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-text-black selection:bg-text-black selection:text-white">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Container */}
      <main className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-10 sm:pb-16 space-y-8 sm:space-y-10">
        {/* Header with Back Link & Title */}
        <div className="space-y-3 sm:space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-text-black/60 hover:text-text-black transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <div className="space-y-1.5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-black">
              All Projects
            </h1>
            <p className="text-sm sm:text-base text-text-black/70 max-w-2xl font-normal leading-relaxed">
              A collection of web applications, AI platforms, and digital products engineered with Next.js, React, NestJS, and PostgreSQL.
            </p>
          </div>
        </div>

        {/* 2-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full">
          {ALL_PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Footer Bar */}
        <div className="flex items-center justify-between gap-3 w-full pt-8 border-t border-text-black/10 shrink-0">
          <div className="text-xs text-text-black/50 font-normal">
            Designed & Built by Duong Le
          </div>

          <div className="text-xs text-text-black/50 font-normal">
            © {new Date().getFullYear()}
          </div>
        </div>
      </main>
    </div>
  );
}

