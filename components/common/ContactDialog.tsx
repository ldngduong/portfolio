'use client';

import Link from 'next/link';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { TbMailOpenedFilled } from 'react-icons/tb';
import { CardCornerPixelBloom } from '@/components/common/CardCornerPixelBloom';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-lg sm:max-w-xl p-6 sm:p-8 rounded-3xl bg-white border border-text-black/10 shadow-2xl overflow-hidden relative group">
        {/* Hiệu ứng Pixel Bloom lan tỏa từ góc phải */}
        <CardCornerPixelBloom alwaysActive />

        <div className="relative z-10 space-y-5 text-center flex flex-col items-center w-full">
          <div className="space-y-2 w-full">
            <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-text-black leading-tight text-center">
              Let&apos;s build something extraordinary together.
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-text-black/70 max-w-md mx-auto leading-relaxed text-center">
              Have a project in mind, looking for a software engineer, or just want to say hi? My inbox is always open.
            </DialogDescription>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {/* Email Button */}
            <a
              href="mailto:letungduong1624@gmail.com"
              className="group/btn relative overflow-hidden inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl border border-text-black/10 bg-white/90 hover:bg-white hover:border-text-black/25 hover:shadow-md text-xs sm:text-sm font-semibold text-text-black transition-all duration-300 cursor-pointer"
            >
              <TbMailOpenedFilled className="text-base sm:text-lg text-text-black/70 group-hover/btn:text-text-black transition-colors" />
              <span>letungduong1624@gmail.com</span>
            </a>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/toiladuong/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 sm:p-3 rounded-2xl border border-text-black/10 bg-white/90 hover:bg-white hover:border-text-black/25 hover:shadow-md text-text-black/70 hover:text-text-black transition-all duration-300 cursor-pointer"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="text-base sm:text-lg" />
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/letungduong24"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 sm:p-3 rounded-2xl border border-text-black/10 bg-white/90 hover:bg-white hover:border-text-black/25 hover:shadow-md text-text-black/70 hover:text-text-black transition-all duration-300 cursor-pointer"
              title="GitHub Profile"
            >
              <FaGithubSquare className="text-base sm:text-lg" />
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
