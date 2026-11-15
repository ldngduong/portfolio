import type { Metadata } from 'next';
import { Navbar } from '@/components/common/Navbar';
import { getProjects, ProjectCard } from '@/features/projects';
import { copy } from '@/lib/copy';
import { getPreferences } from '@/lib/server-preferences';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getPreferences();
  const t = copy[locale];
  return { title: `${t.projects} — Duong Le`, description: t.projectsDescription };
}

export default async function ProjectsPage() {
  const { locale } = await getPreferences();
  const t = copy[locale];
  return (
    <div className="min-h-screen text-text-black selection:bg-primary selection:text-primary-foreground">
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
            <span>{t.backHome}</span>
          </Link>

          <div className="space-y-1.5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-black">
              {t.allProjects}
            </h1>
            <p className="text-sm sm:text-base text-text-black/70 max-w-2xl font-normal leading-relaxed">
              {t.projectsDescription}
            </p>
          </div>
        </div>

        {/* 2-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full">
          {getProjects(locale).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Footer Bar */}
        <div className="flex items-center justify-between gap-3 w-full pt-8 border-t border-text-black/10 shrink-0">
          <div className="text-xs text-text-black/50 font-normal">
            {t.builtBy}
          </div>

          <div className="text-xs text-text-black/50 font-normal">
            © {new Date().getFullYear()}
          </div>
        </div>
      </main>
    </div>
  );
}

