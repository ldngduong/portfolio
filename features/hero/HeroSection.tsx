import Image from "next/image";
import HeroImage from "../../public/hero1hero.png";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TbMailOpenedFilled } from "react-icons/tb";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="p-4 relative flex h-screen w-full items-center justify-center overflow-hidden bg-background">
      
      {/* Container chứa ảnh Hero */}
      <div className="absolute bottom-0 flex items-end justify-center h-[90%] pointer-events-none">
        <Image
          src={HeroImage}
          alt="Hero"
          priority
          className="h-full w-auto max-w-none [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]" 
        />
      </div>

      {/* Tiêu đề & Nội dung trung tâm */}
      <div className="z-10 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-text-black tracking-tighter leading-none">
          Hi, I'm Duong Le
        </h1>
        <h2 className="text-3xl font-medium text-text-black tracking-tighter">Software Engineer</h2>
      </div>

      {/* Social Links bên góc trái */}
      <div className="absolute bottom-8 left-4 flex flex-col gap-3 z-20">
        <Link 
          href="mailto:letungduong1624@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send email"
        >
          <TbMailOpenedFilled className="text-5xl text-text-black hover:opacity-80 transition-opacity aspect-[1/1]" />
        </Link>

        <Link 
          href="https://www.linkedin.com/in/toiladuong/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin className="text-5xl text-text-black hover:opacity-80 transition-opacity" />
        </Link>

        <Link 
          href="https://github.com/toiladuong" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <FaGithubSquare className="text-5xl text-text-black hover:opacity-80 transition-opacity" />
        </Link>
      </div>

      <div 
        aria-hidden="true"
        className="z-50 absolute bottom-0 left-0 right-0 h-20 md:h-30 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none z-[5]" 
      />
    </section>
  );
}