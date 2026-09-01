'use client';

import { forwardRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { ArrowUpRight } from 'lucide-react';
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
        className="lg:col-span-6 flex flex-col justify-center min-h-[360px] w-full touch-pan-y order-2 lg:order-1"
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
                <div className="flex flex-col justify-center items-end min-h-[240px] py-2">
                  <div className="flex flex-col items-start text-left max-w-lg w-full">
                    {/* Title (Căn trái) */}
                    <h2
                      onClick={() => onProjectClick(project)}
                      className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-black hover:opacity-75 transition-opacity duration-200 cursor-pointer text-left leading-tight"
                    >
                      {project.title}
                    </h2>

                    {/* Description (Căn trái) */}
                    <p className="text-sm sm:text-base text-text-black/85 mt-3 text-left leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Action Links (Căn trái) */}
                    <div className="mt-5 flex items-center justify-start gap-4 text-xs font-bold">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-text-black hover:opacity-60 transition-opacity duration-200"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <button
                        onClick={() => onProjectClick(project)}
                        className="inline-flex items-center gap-1 text-text-black hover:underline cursor-pointer font-bold"
                      >
                        <span>View Details</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* MINIMALIST DOT INDICATORS (CĂN TRÁI CÙNG KHỐI TEXT) */}
        <div className="mt-6 flex items-center justify-end w-full">
          <div className="flex items-center justify-start gap-2 max-w-lg w-full">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}: ${project.title}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentSlide === index
                    ? 'w-6 sm:w-8 h-2 bg-text-black'
                    : 'w-2 h-2 bg-text-black/30 hover:bg-text-black/60'
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
