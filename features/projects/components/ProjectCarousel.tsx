'use client';

import { forwardRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import type { ProjectItem } from '../types';

interface ProjectCarouselProps {
  projects: ProjectItem[];
  currentSlide: number;
  api: CarouselApi | undefined;
  setApi: (api: CarouselApi | undefined) => void;
  onProjectClick: (project: ProjectItem) => void;
}

export const ProjectCarousel = forwardRef<HTMLDivElement, ProjectCarouselProps>(
  ({ projects, currentSlide, api, setApi, onProjectClick }, ref) => {
    return (
      <div
        ref={ref}
        className="lg:col-span-6 flex flex-col justify-center min-h-[340px] w-full touch-pan-y order-2 lg:order-1"
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: false,
            dragFree: false,
          }}
          className="w-full select-none"
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="w-full">
                <div
                  onClick={() => onProjectClick(project)}
                  className="cursor-pointer group flex flex-col justify-center items-end text-right min-h-[200px] py-2"
                >
                  <span className="text-xs font-bold text-text-accent mb-1">{project.id}</span>

                  <h1 className="text-4xl md:text-5xl font-bold text-text-black tracking-tight group-hover:text-text-accent transition-colors text-right">
                    {project.title}
                  </h1>

                  <p className="text-xs md:text-sm text-text-black/60 font-normal mt-3 text-right max-w-md line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center justify-end gap-1 text-xs font-semibold text-text-black/60 group-hover:text-text-accent transition-colors">
                    <span>View Details</span>
                    <span>→</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* DOTS INDICATOR (CĂN PHẢI) */}
        <div className="mt-2 flex justify-end">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-text-black/5 border border-text-black/10">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'w-5 bg-text-black'
                    : 'w-1.5 bg-text-black/20 hover:bg-text-black/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
);

ProjectCarousel.displayName = 'ProjectCarousel';
