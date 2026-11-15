import type { Metadata } from 'next';
import { Navbar } from '@/components/common/Navbar';
import { copy } from '@/lib/copy';
import { getPreferences } from '@/lib/server-preferences';
import {
  FreelanceHero,
  ServicesSection,
  FaqSection,
  FreelanceCtaSection,
} from '@/features/freelance';

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getPreferences();
  const t = copy[locale];
  return { title: `${t.freelanceHeading} — Duong Le`, description: t.freelanceDescription };
}

export default function FreelancePage() {
  return (
    <div className="min-h-screen text-text-black selection:bg-primary selection:text-primary-foreground">
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
