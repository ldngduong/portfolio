'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { Check } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@duongle.dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            {/* Click-to-copy email button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="group/btn relative overflow-hidden inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-text-black/10 bg-white/90 hover:bg-white hover:border-text-black/25 hover:shadow-md text-xs sm:text-sm font-semibold text-text-black transition-all duration-300 cursor-pointer"
              title="Click to copy email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied contact@duongle.dev!</span>
                </>
              ) : (
                <span>contact@duongle.dev</span>
              )}
            </button>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/toiladuong/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 sm:p-2.5 rounded-xl border border-text-black/10 bg-white/90 hover:bg-white hover:border-text-black/25 hover:shadow-md text-text-black/70 hover:text-text-black transition-all duration-300 cursor-pointer"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="text-base sm:text-lg" />
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
