"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#skills", anchor: "skills", label: "Skills" },
  { href: "#services", anchor: "services", label: "Services" },
  { href: "#projects", anchor: "projects", label: "Projects" },
  { href: "#about", anchor: "about", label: "About" },
];

export function Navbar() {
  return (
    <div id="navbar" className="fixed top-0 z-50 inset-x-0 bg-background">
      <nav className="flex items-center justify-between px-4 py-4">
        {/* Thêm class 'group' vào thẻ Link cha */}
        <Link
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            const api = (
              window as unknown as {
                fullpage_api?: { moveTo: (anchor: string) => void };
              }
            ).fullpage_api;
            if (api?.moveTo) api.moveTo("hero");
            else window.location.hash = "#hero";
          }}
          className="group text-lg md:text-2xl font-bold transition-colors duration-400"
        >
          {/* Duong: Ban đầu Đen -> Hover cụm đổi sang Cam */}
          <span className="text-text-black group-hover:text-text-accent transition-colors duration-400">
            Duong
          </span>
          {/* Le: Ban đầu Cam -> Hover cụm đổi sang Đen */}
          <span className="text-text-accent group-hover:text-text-black transition-colors duration-400">
            Le
          </span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList id="fp-menu" className="gap-1">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href} data-menuanchor={link.anchor}>
                <NavigationMenuLink
                  render={
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const api = (
                          window as unknown as {
                            fullpage_api?: { moveTo: (anchor: string) => void };
                          }
                        ).fullpage_api;
                        if (api?.moveTo) api.moveTo(link.anchor);
                        else window.location.hash = link.href;
                      }}
                    />
                  }
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "md:text-xl text-text-black hover:text-text-accent transition-colors duration-400"
                  )}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  );
}