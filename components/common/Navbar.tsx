"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TbMailOpenedFilled } from "react-icons/tb";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { AboutSheet } from "@/features/about/components/AboutSheet";

const navLinks = [
  { href: "#projects", anchor: "projects", label: "Projects" },
  { href: "#services", anchor: "services", label: "Services" },
  { href: "#skills", anchor: "skills", label: "Skills" },
  { href: "#contact", anchor: "contact", label: "Contact" },
];

export function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (anchor: string) => {
    setIsMobileMenuOpen(false);
    const api = (
      window as unknown as {
        fullpage_api?: { moveTo: (anchor: string) => void };
      }
    ).fullpage_api;
    if (api?.moveTo) {
      api.moveTo(anchor);
    } else {
      window.location.hash = `#${anchor}`;
    }
  };

  const openAboutModal = () => {
    setIsMobileMenuOpen(false);
    setIsAboutOpen(true);
  };

  return (
    <>
      <div
        id="navbar"
        className="fixed top-0 z-50 inset-x-0 bg-transparent"
      >
        <nav className="flex items-center justify-between px-4 py-4 w-full">
          {/* Logo */}
          <Link
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("hero");
            }}
            className="group text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-opacity duration-300 hover:opacity-75 select-none"
          >
            <span className="text-text-black">Duong</span>
            <span className="text-text-black/50">Le</span>
          </Link>

          {/* Desktop Navigation - Pure Minimal Text Links (No background, No border box) */}
          <div className="hidden md:block">
            <ul id="fp-menu" className="flex items-center gap-2 lg:gap-4 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.href} data-menuanchor={link.anchor}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(link.anchor);
                    }}
                    className="md:text-xl font-medium text-text-black hover:opacity-60 transition-opacity duration-300 px-2 py-1 select-none inline-block cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              {/* Desktop About Trigger */}
              <li>
                <button
                  type="button"
                  onClick={() => setIsAboutOpen(true)}
                  className="md:text-xl font-medium text-text-black hover:opacity-60 transition-opacity duration-300 px-2 py-1 select-none cursor-pointer bg-transparent border-none outline-none inline-block"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Trigger Button (3-line icon, no border) */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1.5 text-text-black hover:opacity-60 transition-opacity cursor-pointer flex items-center justify-center bg-transparent border-none outline-none"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6 stroke-[2]" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Sheet */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent
          side="right"
          className="w-[82vw] max-w-sm h-full flex flex-col justify-between p-6 sm:p-8 bg-background border-l border-text-black/10 z-50
          [&>button]:bg-text-black/5 [&>button]:hover:bg-text-black/15 [&>button]:border-none [&>button]:rounded-full [&>button]:z-50 [&>button]:top-4 [&>button]:right-4 transition-all"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

          {/* Top Branding inside drawer */}
          <div className="pt-2">
            <div className="text-xl font-bold tracking-tight text-text-black select-none">
              Duong<span className="text-text-black/50">Le</span>
            </div>
            <p className="text-xs text-text-black/50 mt-0.5">Software Engineer</p>
          </div>

          {/* Middle Nav Links */}
          <nav className="flex flex-col gap-5 py-8" aria-label="Mobile main navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => navigateTo(link.anchor)}
                className="text-2xl sm:text-3xl font-medium text-text-black text-left hover:opacity-60 transition-opacity cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            <button
              type="button"
              onClick={openAboutModal}
              className="text-2xl sm:text-3xl font-medium text-text-black text-left hover:opacity-60 transition-opacity cursor-pointer"
            >
              About
            </button>
          </nav>

          {/* Bottom Social Links inside drawer */}
          <div className="pt-6 border-t border-text-black/10">
            <div className="flex items-center gap-4 text-text-black/80">
              <Link
                href="mailto:letungduong1624@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Duong Le"
                className="hover:opacity-60 transition-opacity"
              >
                <TbMailOpenedFilled className="text-2xl" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/toiladuong/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:opacity-60 transition-opacity"
              >
                <FaLinkedin className="text-2xl" />
              </Link>
              <Link
                href="https://github.com/letungduong24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hover:opacity-60 transition-opacity"
              >
                <FaGithubSquare className="text-2xl" />
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Full-Screen Profile Sheet */}
      <AboutSheet open={isAboutOpen} onOpenChange={setIsAboutOpen} />
    </>
  );
}