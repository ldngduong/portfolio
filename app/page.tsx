import { Navbar } from "@/components/common/Navbar";
import { AboutSection } from "@/features/about/AboutSection";
import { HeroSection } from "@/features/hero/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative ">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
