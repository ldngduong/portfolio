"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";
import { TbMailOpenedFilled } from "react-icons/tb";
import { Menu, Check } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { AboutSheet } from "@/features/about/components/AboutSheet";
import { ContactDialog } from "@/components/common/ContactDialog";
import { PreferenceControls } from "@/components/common/PreferenceControls";
import { usePreferences } from "@/components/common/PreferencesProvider";

export function Navbar() {
  const { t } = usePreferences();
  const pathname = usePathname();
  const router = useRouter();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@duongle.dev');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const isHome = pathname === "/";

  const handleHomeClick = (e: React.MouseEvent) => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById("hero");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      router.push("/");
    }
  };

  const openAboutModal = () => {
    setIsMobileMenuOpen(false);
    setIsAboutOpen(true);
  };

  const openContactModal = () => {
    setIsMobileMenuOpen(false);
    setIsContactOpen(true);
  };

  return (
    <>
      <header
        id="navbar"
        className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md transition-all border-b border-text-black/5"
      >
        <nav aria-label={t.navigation} className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3 w-full">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleHomeClick}
            className="group text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-opacity duration-300 hover:opacity-75 select-none"
          >
            <span className="text-text-black">Duong</span>
            <span className="text-text-black/50">Le</span>
          </Link>

          {/* Desktop Navigation: Home, Project, About, Contact */}
          <div className="hidden md:block ml-auto">
            <ul className="flex items-center gap-1 lg:gap-4 list-none m-0 p-0">
              {/* Home */}
              <li>
                <Link
                  href="/"
                  onClick={handleHomeClick}
                  className="text-base sm:text-lg font-medium text-text-black hover:opacity-60 transition-opacity duration-300 px-2 py-1 select-none inline-block cursor-pointer"
                >
                  {t.home}
                </Link>
              </li>

              {/* Project (Chuyển trực tiếp sang trang /projects) */}
              <li>
                <Link
                  href="/projects"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base sm:text-lg font-medium text-text-black hover:opacity-60 transition-opacity duration-300 px-2 py-1 select-none inline-block cursor-pointer"
                >
                  {t.projects}
                </Link>
              </li>

              <li>
                <Link
                  href="/freelance"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base sm:text-lg font-medium text-text-black hover:opacity-60 transition-opacity duration-300 px-2 py-1 select-none inline-block cursor-pointer"
                >
                  {t.freelance}
                </Link>
              </li>

              {/* About */}
              <li>
                <button
                  type="button"
                  onClick={openAboutModal}
                  className="text-base sm:text-lg font-medium text-text-black hover:opacity-60 transition-opacity duration-300 px-2 py-1 select-none cursor-pointer bg-transparent border-none outline-none inline-block"
                >
                  {t.about}
                </button>
              </li>

              {/* Contact (Mở Contact Dialog popup) */}
              <li>
                <button
                  type="button"
                  onClick={openContactModal}
                  className="text-base sm:text-lg font-medium text-text-black hover:opacity-60 transition-opacity duration-300 px-2 py-1 select-none cursor-pointer bg-transparent border-none outline-none inline-block"
                >
                  {t.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex items-center gap-2">
            <PreferenceControls />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1.5 text-text-black hover:opacity-60 transition-opacity cursor-pointer flex md:hidden items-center justify-center bg-transparent border-none"
              aria-label={t.openMenu}
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6 stroke-[2]" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Sheet */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent
          side="right"
          className="w-[82vw] max-w-sm h-full flex flex-col justify-between p-6 sm:p-8 bg-background border-l border-text-black/10 z-50
          [&>button]:bg-text-black/5 [&>button]:hover:bg-text-black/15 [&>button]:border-none [&>button]:rounded-full [&>button]:z-50 [&>button]:top-4 [&>button]:right-4 transition-all"
        >
          <SheetTitle className="sr-only">{t.navigation}</SheetTitle>

          {/* Top Branding */}
          <div className="pt-2">
            <div className="text-xl font-bold tracking-tight text-text-black select-none">
              Duong<span className="text-text-black/50">Le</span>
            </div>
            <p className="text-xs text-text-black/60 mt-0.5">{t.role}</p>
          </div>

          {/* Middle Nav Links */}
          <nav className="flex flex-col gap-5 py-8" aria-label={t.navigation}>
            <Link
              href="/"
              onClick={handleHomeClick}
              className="text-2xl sm:text-3xl font-medium text-text-black text-left hover:opacity-60 transition-opacity cursor-pointer"
            >
              {t.home}
            </Link>

            <Link
              href="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl sm:text-3xl font-medium text-text-black text-left hover:opacity-60 transition-opacity cursor-pointer"
            >
              {t.projects}
            </Link>

            <Link
              href="/freelance"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl sm:text-3xl font-medium text-text-black text-left hover:opacity-60 transition-opacity cursor-pointer"
            >
              {t.freelance}
            </Link>

            <button
              type="button"
              onClick={openAboutModal}
              className="text-2xl sm:text-3xl font-medium text-text-black text-left hover:opacity-60 transition-opacity cursor-pointer"
            >
              {t.about}
            </button>

            <button
              type="button"
              onClick={openContactModal}
              className="text-2xl sm:text-3xl font-medium text-text-black text-left hover:opacity-60 transition-opacity cursor-pointer"
            >
              {t.contact}
            </button>
          </nav>

          {/* Bottom Social Links inside drawer */}
          <div className="pt-6 border-t border-text-black/10">
            <div className="flex items-center gap-4 text-text-black/80">
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label={emailCopied ? t.emailCopied : t.copyEmail}
                title={emailCopied ? t.emailCopied : t.copyEmail}
                className="hover:opacity-60 transition-opacity cursor-pointer"
              >
                {emailCopied ? (
                  <Check className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <TbMailOpenedFilled className="text-2xl" />
                )}
              </button>
              <Link
                href="https://www.linkedin.com/in/toiladuong/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.linkedIn}
                className="hover:opacity-60 transition-opacity"
              >
                <FaLinkedin className="text-2xl" />
              </Link>
              
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Full-Screen Profile About Sheet */}
      <AboutSheet open={isAboutOpen} onOpenChange={setIsAboutOpen} />

      {/* Contact Dialog Popup */}
      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}
