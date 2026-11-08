import type { Metadata } from 'next';
import { Navbar } from '@/components/common/Navbar';
import {
  FreelanceHero,
  ServicesSection,
  FaqSection,
  FreelanceCtaSection,
} from '@/features/freelance';

export const metadata: Metadata = {
  title: 'Freelance & Services — Duong Le',
  description:
    'Full-cycle design & engineering partner for startups and businesses. Offering Web Applications, high-converting Landing Pages, cross-platform Mobile Apps, and pixel-perfect Figma UI/UX design.',
};

export default function FreelancePage() {
  return (
    <div className="min-h-screen bg-background text-text-black selection:bg-text-black selection:text-white">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Container */}
      <main className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16 space-y-10 sm:space-y-12">
        {/* Hero: Back link & Figma Cursor Animation */}
        <FreelanceHero />

        {/* Services: Web App, Landing Page, Mobile App, Figma Design */}
        <ServicesSection />

        {/* FAQs */}
        <FaqSection />

        {/* CTA & Contact */}
        <FreelanceCtaSection />
      </main>
    </div>
  );
}
