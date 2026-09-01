'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setIsSubmitted(false);
        onOpenChange(false);
      }, 2500);
    }, 700);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="z-50 max-w-lg bg-background border border-text-black/15 shadow-2xl p-6 sm:p-8"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-lg sm:text-xl font-bold text-text-black">
            Get in touch
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-text-black/70">
            Have a question, job opportunity, or project in mind? Send a message below or email me directly at{' '}
            <a
              href="mailto:letungduong1624@gmail.com"
              className="font-medium text-text-black underline underline-offset-2 hover:opacity-75"
            >
              letungduong1624@gmail.com
            </a>
            .
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="p-4 bg-text-black/5 border border-text-black/15 rounded-sm flex items-center gap-3 text-text-black my-4">
            <CheckCircle2 className="w-5 h-5 text-text-black shrink-0" />
            <div className="text-xs sm:text-sm">
              <p className="font-bold">Message sent successfully.</p>
              <p className="text-text-black/60 text-xs">
                Thank you for reaching out. I will reply shortly.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label
                  htmlFor="contact-name"
                  className="block text-xs text-text-black/70 font-medium"
                >
                  Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  className="w-full px-3 py-2 text-xs bg-text-black/[0.03] border border-text-black/15 rounded-sm text-text-black placeholder:text-text-black/30 focus:outline-none focus:border-text-black transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="contact-email"
                  className="block text-xs text-text-black/70 font-medium"
                >
                  Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 text-xs bg-text-black/[0.03] border border-text-black/15 rounded-sm text-text-black placeholder:text-text-black/30 focus:outline-none focus:border-text-black transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="contact-subject"
                className="block text-xs text-text-black/70 font-medium"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                placeholder="Project Inquiry / Job Opportunity"
                className="w-full px-3 py-2 text-xs bg-text-black/[0.03] border border-text-black/15 rounded-sm text-text-black placeholder:text-text-black/30 focus:outline-none focus:border-text-black transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="contact-message"
                className="block text-xs text-text-black/70 font-medium"
              >
                Message *
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your message..."
                className="w-full px-3 py-2 text-xs bg-text-black/[0.03] border border-text-black/15 rounded-sm text-text-black placeholder:text-text-black/30 focus:outline-none focus:border-text-black transition-colors resize-y"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold text-white bg-text-black hover:bg-neutral-800 disabled:opacity-50 rounded-sm transition-colors cursor-pointer"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

