'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import type { ProjectItem } from '../types';

interface ProjectSheetProps {
  project: ProjectItem | null;
  onOpenChange: (open: boolean) => void;
}

export function ProjectSheet({ project, onOpenChange }: ProjectSheetProps) {
  return (
    <Sheet open={!!project} onOpenChange={onOpenChange}>
      <SheetContent 
        className="w-full sm:max-w-md flex flex-col p-0 bg-background border-l border-text-black/10 overflow-y-auto
        [&>button]:bg-white [&>button]:shadow-lg [&>button]:border [&>button]:border-black/5 [&>button]:rounded-full [&>button]:z-50 [&>button]:top-4 [&>button]:right-4 [&>button]:opacity-100 [&>button]:hover:bg-gray-50 transition-all"
      >
        {project && (
          <>
            {/* Ảnh tràn viền (Full width) */}
            <div className="relative w-full aspect-[16/10] shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              {/* Lớp overlay nhẹ phía trên ảnh để nút X nổi bật hơn nếu cần */}
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Nội dung bên dưới - Padding nhỏ lại (p-5) */}
            <div className="flex flex-col flex-1 p-5 gap-5">
              <div className="space-y-4">
                <SheetHeader className="p-0 text-left">
                  <SheetTitle className="text-2xl font-bold text-text-black tracking-tight">
                    {project.title}
                  </SheetTitle>
                </SheetHeader>

                <SheetDescription className="text-sm text-text-black/70 leading-relaxed">
                  {project.description}
                </SheetDescription>

                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-black/30 block">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-1 bg-text-black/[0.03] text-text-black/80 rounded border border-text-black/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Nút Live Demo - Đẩy xuống cuối */}
              <div className="mt-auto pt-4">
                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3.5 text-sm font-bold text-white bg-text-accent hover:brightness-110 rounded-xl transition-all shadow-sm"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}