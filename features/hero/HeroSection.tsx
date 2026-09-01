import Image from "next/image";
import HeroImage from "../../public/hero1hero.webp";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TbMailOpenedFilled } from "react-icons/tb";

import Link from "next/link";

export function HeroSection() {
  return (
    <section className="p-4 relative flex h-screen w-full items-center justify-center overflow-hidden bg-transparent">
      
      {/* Container chứa ảnh Hero */}
      <div className="absolute bottom-0 flex items-end justify-center h-[90%] pointer-events-none">
        <Image
          src={HeroImage}
          alt="Hero"
          priority
          className="h-full w-auto max-w-none mask-[linear-gradient(to_bottom,black_70%,transparent_100%)]" 
        />
      </div>

      {/* Tiêu đề & Nội dung trung tâm */}
      <div className="z-10 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-text-black leading-none">
          Hi, I&apos;m Duong Le
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-text-black mt-2">
          Software Engineer
        </h2>
      </div>

      {/* Social Links bên góc trái */}
      <div className="absolute bottom-8 left-4 flex flex-col gap-3 z-20">
        <Link 
          href="mailto:letungduong1624@gmail.com"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Send email"
        >
          <TbMailOpenedFilled className="text-3xl sm:text-4xl md:text-5xl text-text-black hover:opacity-60 transition-opacity duration-200" />
        </Link>

        <Link 
          href="https://www.linkedin.com/in/toiladuong/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin className="text-3xl sm:text-4xl md:text-5xl text-text-black hover:opacity-60 transition-opacity duration-200" />
        </Link>

        <Link 
          href="https://github.com/letungduong24" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <FaGithubSquare className="text-3xl sm:text-4xl md:text-5xl text-text-black hover:opacity-60 transition-opacity duration-200" />
        </Link>
      </div>

      <div className="absolute bottom-8 right-8 text-right z-20 w-[60%] md:w-[80%]">
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-snug text-text-black">
          Building scalable web apps with clean architecture —
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-snug text-text-black/75">
          bridging smooth frontend with high-performance backends.
        </p>
      </div>
    </section>
  );
}