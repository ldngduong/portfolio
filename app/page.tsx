import { Navbar } from "@/components/common/Navbar";
import { FullPageWrapper } from "@/components/common/FullPageWrapper";
import { AboutSection } from "@/features/about/AboutSection";
import { HeroSection } from "@/features/hero/HeroSection";
import { ServicesSection } from "@/features/services/ServicesSection";
import { SkillsSection } from "@/features/skills/SkillsSection";
import { ProjectsSection } from "@/features/projects/ProjectsSection";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <FullPageWrapper>
        <div className="section h-full" data-anchor="hero">
          <HeroSection />
        </div>
        <div className="section" data-anchor="skills">
          <SkillsSection />
        </div>
        <div className="section" data-anchor="services">
          <ServicesSection />
        </div>
        <div className="section" data-anchor="projects">
          <ProjectsSection />
        </div>
        <div className="section" data-anchor="about">
          <AboutSection />
        </div>
      </FullPageWrapper>
    </div>
  );
}
