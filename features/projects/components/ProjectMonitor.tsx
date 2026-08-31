'use client';

import { forwardRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProjectItem } from '../types';

interface ProjectMonitorProps {
  selectedProject: ProjectItem;
  onMonitorClick: () => void;
}

export const ProjectMonitor = forwardRef<HTMLDivElement, ProjectMonitorProps>(
  ({ selectedProject, onMonitorClick }, ref) => {
    return (
      <div className="lg:col-span-6 flex items-center justify-end [perspective:1200px] w-full order-1 lg:order-2">
        <motion.div
          animate={{
            rotateY: -12,
            rotateX: 4,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="relative w-full origin-right [transform-style:preserve-3d] flex flex-col items-center"
        >
          {/* Khung Monitor */}
          <div
            ref={ref}
            onClick={onMonitorClick}
            className="relative aspect-[16/10] w-full bg-neutral-900 rounded-xl border-[10px] md:border-[12px] border-neutral-800 shadow-2xl overflow-hidden flex flex-col z-10 cursor-pointer group"
          >
            {/* Header Window Bar */}
            <div className="h-5 md:h-6 bg-neutral-800/90 px-3 flex items-center justify-between border-b border-neutral-700/50 shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] text-neutral-400 truncate max-w-[200px] md:max-w-[300px]">
                {selectedProject.demoUrl || selectedProject.githubUrl}
              </span>
              <div className="w-6" />
            </div>

            {/* Canvas Màn Hình */}
            <div className="relative flex-1 w-full bg-neutral-950 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Chân Đế Monitor */}
          <div className="flex flex-col items-center z-0 -mt-1">
            <div className="w-14 md:w-18 h-7 md:h-10 bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-900 border-x border-neutral-600 shadow-inner" />
            <div className="w-20 md:w-28 h-1.5 bg-neutral-700 border-t border-neutral-500 shadow-sm" />
            <div className="w-40 md:w-56 h-2.5 md:h-3.5 bg-gradient-to-b from-neutral-700 to-neutral-900 rounded-t-md border-t border-neutral-500 shadow-2xl relative overflow-hidden flex justify-center items-center">
              <div className="w-full h-[1px] bg-neutral-400/30 absolute top-0" />
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
);

ProjectMonitor.displayName = 'ProjectMonitor';
