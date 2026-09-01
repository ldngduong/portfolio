import Image from "next/image";
import HeroImage from "../../public/hero1hero.webp";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TbMailOpenedFilled } from "react-icons/tb";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="p-4 sm:p-6 relative flex h-full min-h-0 w-full items-center justify-center overflow-hidden bg-transparent select-none">
      
      {/* Container chứa ảnh Hero */}
      <div className="absolute bottom-0 flex items-end justify-center h-[72%] sm:h-[80%] md:h-[90%] pointer-events-none">
        <Image
          src={HeroImage}
          alt="Hero"
          priority
          className="h-full w-auto max-w-none mask-[linear-gradient(to_bottom,black_70%,transparent_100%)]" 
        />
      </div>

      {/* Tiêu đề & Nội dung trung tâm */}
      <div className="z-10 text-center px-4 -translate-y-4 sm:translate-y-0">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-text-black leading-none tracking-tight">
          Hi, I&apos;m Duong Le
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-3xl font-medium text-text-black mt-1.5 sm:mt-2">
          Software Engineer
        </h2>
      </div>

      {/* Social Links bên góc trái */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-6 flex flex-col gap-2.5 sm:gap-3 z-20">
        <Link 
          href="mailto:letungduong1624@gmail.com"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Send email"
        >
          <TbMailOpenedFilled className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text-black hover:opacity-60 transition-opacity duration-200" />
        </Link>

        <Link 
          href="https://www.linkedin.com/in/toiladuong/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text-black hover:opacity-60 transition-opacity duration-200" />
        </Link>

        <Link 
          href="https://github.com/letungduong24" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <FaGithubSquare className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text-black hover:opacity-60 transition-opacity duration-200" />
        </Link>
      </div>

      {/* Slogan góc dưới bên phải */}
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-right z-20 w-[68%] sm:w-[50%] md:w-[70%] max-w-2xl">
        <p className="text-xs sm:text-base md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight sm:leading-snug text-text-black">
          Building scalable web apps with clean architecture —
        </p>
        <p className="text-xs sm:text-base md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight sm:leading-snug text-text-black/70 mt-0.5 sm:mt-1">
          bridging smooth frontend with high-performance backends.
        </p>
      </div>
    </section>
  );
}