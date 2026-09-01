"use client";

import { useEffect, useRef } from "react";
import "fullpage.js/dist/fullpage.css";

type FullPageWrapperProps = {
  children: React.ReactNode;
};

export function FullPageWrapper({ children }: FullPageWrapperProps) {
  const fpRef = useRef<unknown>(null);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      if (typeof window === "undefined") return;
      // fullpage.js modifies window, need dynamic import
      const Fullpage = (await import("fullpage.js")).default as unknown as new (
        selector: string,
        options: Record<string, unknown>
      ) => unknown;

      if (!mounted) return;

      // Avoid double init on HMR
      const existing = (window as unknown as { fullpage_api?: { destroy: (t: string) => void } }).fullpage_api;
      if (existing) {
        try {
          existing.destroy("all");
        } catch {}
      }

      fpRef.current = new Fullpage("#fullpage", {
        // licenseKey required; GPLv3 open-source can use "YOUR_KEY_HERE" with credit kept
        // For portfolio open-source: request free key at https://alvarotrigo.com/fullPage/extensions/requestKey.html
        // Dev placeholder: "YOUR_KEY_HERE" is invalid -> watermark forced even if credits.enabled:false, so we hide it via CSS .fp-watermark
        licenseKey: "YOUR_KEY_HERE",
        // Anchors for URL (#hero/#projects...) and menu sync
        anchors: ["hero", "projects", "services", "skills", "contact"],
        menu: "#fp-menu",
        // Navigation dots - tắt hẳn theo yêu cầu
        navigation: false,
        navigationPosition: "right",
        // Scrolling
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 600,
        scrollingSpeed: 700,
        css3: true,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        // Keep navbar fixed outside transform
        fixedElements: "#navbar",
        // Tắt scrollOverflow để touch swipe không bị IScroll chặn (bật lại nếu section cao hơn viewport)
        scrollOverflow: false,
        scrollOverflowReset: false,
        // Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        // Responsive: 0 = giữ fullPage trên cả mobile (trước là 768 nên <768px rớt về normal scroll)
        responsiveWidth: 0,
        responsiveHeight: 0,
        // Tắt flex center của fullpage, để Tailwind tự handle (nếu true thì h-full bên trong bị co lại do flex justify-center)
        verticalCentered: false,
        credits: { enabled: false },
        // Custom selectors (default)
        sectionSelector: ".section",
        slideSelector: ".slide",
        // Allow normal scroll inside elements like modals/maps if needed
        // normalScrollElements: "#element1, .element2",
      });
    };

    init();

    return () => {
      mounted = false;
      const api = (window as unknown as { fullpage_api?: { destroy: (t: string) => void } }).fullpage_api;
      if (api) {
        try {
          api.destroy("all");
        } catch {}
      }
      fpRef.current = null;
    };
  }, []);

  return <div className="" id="fullpage">{children}</div>;
}
