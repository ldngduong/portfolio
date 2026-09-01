'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import type { CarouselApi } from '@/components/ui/carousel';
import { PROJECTS_DATA, type ProjectItem } from './types';
import { ProjectCarousel } from './components/ProjectCarousel';
import { ProjectMonitor } from './components/ProjectMonitor';
import { ProjectSheet } from './components/ProjectSheet';

export function ProjectsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(PROJECTS_DATA[0]);
  const [activeSheetProject, setActiveSheetProject] = useState<ProjectItem | null>(null);

  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const monitorRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const touchStartX = useRef<number | null>(null);

  const onSelect = useCallback(() => {
    if (!api) return;
    const index = api.selectedScrollSnap();
    setCurrentSlide(index);
    setSelectedProject(PROJECTS_DATA[index]);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

  // Xử lý Cuộn chuột & vuốt chạm chung cho cả Carousel lẫn Màn hình Monitor
  useEffect(() => {
    const container = carouselContainerRef.current;
    const monitor = monitorRef.current;
    if (!api) return;

    const handleWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      if (Math.abs(delta) < 10 || isScrolling.current) return;

      if (delta > 0) {
        if (api.canScrollNext()) {
          api.scrollNext();
          isScrolling.current = true;
        }
      } else {
        if (api.canScrollPrev()) {
          api.scrollPrev();
          isScrolling.current = true;
        }
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 400);
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return;
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX;

      if (Math.abs(diff) > 40) {
        if (diff > 0 && api.canScrollNext()) {
          api.scrollNext();
        } else if (diff < 0 && api.canScrollPrev()) {
          api.scrollPrev();
        }
      }
      touchStartX.current = null;
    };

    const elements = [container, monitor].filter(Boolean) as HTMLElement[];
    elements.forEach((el) => {
      el.addEventListener('wheel', handleWheel, { passive: true });
      el.addEventListener('touchstart', handleTouchStart, { passive: true });
      el.addEventListener('touchend', handleTouchEnd, { passive: true });
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener('wheel', handleWheel);
        el.removeEventListener('touchstart', handleTouchStart);
        el.removeEventListener('touchend', handleTouchEnd);
      });
    };
  }, [api]);

  return (
    <section className="p-6 relative flex h-screen w-full items-center justify-center overflow-hidden bg-transparent">
      <div className="w-full flex flex-col justify-center items-center relative">
        {/* Title My projects ngay phía trên các items */}
        <h1 className="text-4xl font-bold text-text-black/50 italic text-center mb-8 lg:mb-10">
          My projects
        </h1>

        {/* Khối Text & Monitor trung tâm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center justify-center w-full max-w-[1280px]">
          {/* BÊN TRÁI: SHADCN CAROUSEL */}
          <ProjectCarousel
            ref={carouselContainerRef}
            projects={PROJECTS_DATA}
            currentSlide={currentSlide}
            api={api}
            setApi={setApi}
            onProjectClick={setActiveSheetProject}
          />

          {/* BÊN PHẢI: MONITOR PC */}
          <ProjectMonitor
            ref={monitorRef}
            selectedProject={selectedProject}
            onMonitorClick={() => setActiveSheetProject(selectedProject)}
          />
        </div>
      </div>

      {/* SHADCN SHEET DETAIL */}
      <ProjectSheet project={activeSheetProject} onOpenChange={(open) => !open && setActiveSheetProject(null)} />
    </section>
  );
}
