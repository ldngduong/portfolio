'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { ProjectItem } from '../types';

interface ProjectSheetProps {
  project: ProjectItem | null;
  onOpenChange: (open: boolean) => void;
}

export function ProjectSheet({ project, onOpenChange }: ProjectSheetProps) {
  return (
    <Sheet open={!!project} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md h-full max-h-screen flex flex-col p-0 bg-background border-l border-text-black/10 overflow-hidden z-50
        [&>button]:bg-white [&>button]:shadow-md [&>button]:border [&>button]:border-black/10 [&>button]:rounded-full [&>button]:z-50 [&>button]:top-4 [&>button]:right-4 [&>button]:opacity-90 [&>button]:hover:opacity-100 transition-all"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {project && (
          <div className="flex flex-col h-full w-full overflow-hidden">
            {/* Sticky Top: Project Cover Image with Dark Gradient & Title Overlay */}
            <div className="relative w-full aspect-[16/10] shrink-0 border-b border-text-black/10 bg-neutral-900 select-none overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover grayscale"
                priority
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              {/* Project Title Overlay */}
              <div className="absolute bottom-4 left-5 right-5 z-10">
                <SheetTitle className="text-2xl sm:text-3xl font-bold text-white leading-tight drop-shadow-sm">
                  {project.title}
                </SheetTitle>
              </div>
            </div>

            {/* Middle: Shadcn ScrollArea (Isolated Scroll Container) */}
            <ScrollArea
              className="flex-1 min-h-0 w-full"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <div className="p-5 sm:p-6 space-y-6">
                {/* Description */}
                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-text-black/50 block">
                    Description
                  </span>
                  <p className="text-xs text-text-black/75 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Key Features: Clean Minimalist Editorial Layout (No Box Borders) */}
                {project.features && project.features.length > 0 && (
                  <div className="space-y-3 pt-1">
                    <span className="text-xs font-semibold text-text-black/50 block">
                      Key Features
                    </span>
                    <div className="space-y-3.5">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <span className="text-xs font-bold text-text-black block">
                            {feature.title}
                          </span>
                          <p className="text-xs text-text-black/75 leading-relaxed font-normal">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="space-y-2.5 pt-1">
                  <span className="text-xs font-semibold text-text-black/50 block">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-sm border border-text-black/20 text-text-black/85 bg-text-black/[0.03] hover:border-text-black/50 transition-colors select-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollArea>

            {/* Sticky Bottom: Action Buttons */}
            {project.demoUrl && (
              <div className="p-4 sm:p-5 border-t border-text-black/10 bg-background shrink-0 flex flex-col gap-2.5">
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full text-center px-5 py-2.5 text-xs font-bold text-white bg-text-black hover:bg-neutral-800 rounded-sm transition-all shadow-sm"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}