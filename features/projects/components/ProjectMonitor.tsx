'use client';

import { forwardRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Lock, Minus, RotateCw, Square, X } from 'lucide-react';
import type { ProjectItem } from '../types';

interface ProjectMonitorProps {
  selectedProject: ProjectItem;
  onMonitorClick: () => void;
}

export const ProjectMonitor = forwardRef<HTMLDivElement, ProjectMonitorProps>(
  ({ selectedProject, onMonitorClick }, ref) => {
    const displayUrl = selectedProject.demoUrl
      ? selectedProject.demoUrl.replace(/^https?:\/\//, '')
      : selectedProject.githubUrl
      ? selectedProject.githubUrl.replace(/^https?:\/\//, '')
      : 'localhost:3000';

    return (
      <div className="lg:col-span-6 flex items-center justify-center [perspective:1400px] w-full order-1 lg:order-2 py-0 sm:py-2 lg:py-4 mx-auto max-w-[260px] sm:max-w-xs md:max-w-md lg:max-w-none">
          animate={{
            rotateY: -6,
            rotateX: 2,
          }}
          whileHover={{
            rotateY: 0,
            rotateX: 0,
            scale: 1.015,
          }}
          transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-full [transform-style:preserve-3d] flex flex-col items-center"
        >
          {/* Double-Bezel Studio Device Frame (4 viền đều nhau) */}
          <div
            ref={ref}
            onClick={onMonitorClick}
            className="w-full p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-neutral-900 border border-neutral-800/80 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.3)] cursor-pointer group transition-shadow duration-500 hover:shadow-[0_32px_70px_-10px_rgba(0,0,0,0.45)]"
          >
            {/* Inner Core Canvas */}
            <div className="relative aspect-[4/3] w-full bg-neutral-950 rounded-lg sm:rounded-xl overflow-hidden flex flex-col border border-white/5">
              {/* Slim Integrated Browser Window Bar */}
              <div className="h-5 sm:h-6 px-2.5 sm:px-3 bg-neutral-900/90 flex items-center justify-between border-b border-white/5 shrink-0 select-none">
                {/* Browser Navigation Controls: Back, Forward, Reload */}
                <div className="flex items-center gap-1.5 w-16 sm:w-20">
                  <ArrowLeft className="w-2.5 h-2.5 text-neutral-500" />
                  <ArrowRight className="w-2.5 h-2.5 text-neutral-600" />
                  <RotateCw className="w-2 h-2 text-neutral-500 ml-0.5" />
                </div>

                {/* URL Address Field */}
                <div className="flex items-center justify-center gap-1 px-2.5 py-0.5 rounded bg-neutral-950/90 border border-white/5 max-w-[180px] sm:max-w-[240px] w-full">
                  <Lock className="w-2 h-2 text-neutral-400 shrink-0" />
                  <span className="text-[9px] sm:text-[10px] text-neutral-300 truncate">
                    {displayUrl}
                  </span>
                </div>

                {/* Window Actions: Minimize (-), Maximize (Square), Close (X) */}
                <div className="flex items-center justify-end gap-2 w-16 sm:w-20 text-neutral-500">
                  <Minus className="w-2.5 h-2.5 text-neutral-500" />
                  <Square className="w-2 h-2 text-neutral-500" />
                  <X className="w-2.5 h-2.5 text-neutral-500" />
                </div>
              </div>

              {/* Canvas Screen */}
              <div className="relative flex-1 w-full bg-neutral-950 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedProject.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      priority
                      className="object-cover object-top grayscale transition-transform duration-500 group-hover:scale-102"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Glass Reflection Gradient */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none"
                />

                {/* Hover Action Capsule Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="px-4 py-2 rounded-xl bg-white/95 text-text-black text-xs font-bold shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span>View Project Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
);

ProjectMonitor.displayName = 'ProjectMonitor';
