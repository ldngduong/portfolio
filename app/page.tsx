import { Navbar } from "@/components/common/Navbar";
import {
  HeroSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  EducationSection,
  CtaSection,
} from "@/features/home";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text-black selection:bg-text-black selection:text-white">
      {/* Sticky Header */}
      <Navbar />

      {/* Centered Max-Width Main Content Flow */}
      <main className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 sm:pt-8 sm:pb-8 space-y-8 sm:space-y-10 md:space-y-12">
        {/* 1. Hero */}
        <div id="hero" className="scroll-mt-24">
          <HeroSection />
        </div>

        {/* 2. Experience (lên trên Project) */}
        <div id="experience" className="scroll-mt-24">
          <ExperienceSection />
        </div>

        {/* 3. Projects */}
        <div id="projects" className="scroll-mt-24">
          <ProjectsSection />
        </div>

        {/* 4. Skills */}
        <div id="skills" className="scroll-mt-24">
          <SkillsSection />
        </div>

        {/* 5. Education (dưới Skills) */}
        <div id="education" className="scroll-mt-24">
          <EducationSection />
        </div>

        {/* 6. CTA / Contact */}
        <div>
          <CtaSection />
        </div>
      </main>
    </div>
  );
}
