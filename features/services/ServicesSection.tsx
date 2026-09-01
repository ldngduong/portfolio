'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface BentoServiceItem {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  span: string;
  borderClass: string;
  isCustom?: boolean;
  actionText?: string;
  actionHref?: string;
}

const BENTO_SERVICES: BentoServiceItem[] = [
  {
    id: '01',
    title: 'Landing Page & Brand Site',
    description:
      'High-converting landing pages and corporate web presences built with modern Next.js architecture, fast load times, and SEO.',
    span: 'col-span-1 lg:col-span-4 lg:row-span-2',
    borderClass: 'border-r border-b lg:border-b-0 lg:border-r border-text-black/20',
  },
  {
    id: '02',
    title: 'Web Application & Dashboard',
    description:
      'Full-stack web applications, custom management dashboards, SaaS tools, and real-time data workflows.',
    span: 'col-span-1 lg:col-span-8',
    borderClass: 'border-b border-r-0 border-text-black/20',
  },
  {
    id: '03',
    title: 'Website Clone & Replication',
    shortTitle: 'Website Clone',
    description:
      'Rebuilding or modernizing reference websites with clean code architecture, custom identity, and high performance.',
    span: 'col-span-1 lg:col-span-2',
    borderClass: 'border-r border-b lg:border-b-0 lg:border-r border-text-black/20',
  },
  {
    id: '04',
    title: 'Figma to Production Code',
    shortTitle: 'Figma to Code',
    description:
      'Pixel-perfect translation of Figma UI/UX designs into modular, responsive, and maintainable React / TypeScript code.',
    span: 'col-span-1 lg:col-span-2',
    borderClass: 'border-b lg:border-b-0 lg:border-r border-r-0 border-text-black/20',
  },
  {
    id: '05',
    title: 'Maintenance & Optimization',
    shortTitle: 'Optimization',
    description:
      'Performance profiling, resolving bugs, upgrading dependencies, and integrating new capabilities into existing codebases.',
    span: 'col-span-1 lg:col-span-2',
    borderClass: 'border-r border-b-0 lg:border-r border-text-black/20',
  },
  {
    id: '06',
    title: 'Other / Custom Request',
    shortTitle: 'Custom Inquiries',
    description:
      'Have a unique technical challenge or specialized requirements? Reach out directly to discuss your project.',
    span: 'col-span-1 lg:col-span-2',
    borderClass: 'border-b-0 border-r-0',
    isCustom: true,
    actionText: 'Get in touch',
    actionHref: 'mailto:letungduong1624@gmail.com',
  },
];

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const toggleActive = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  // Render pictographic SVG shape designs directly representing each service (Luôn hiện rõ nét, đậm và không bao giờ bị ẩn)
  const renderPictographicShape = (id: string) => {
    switch (id) {
      case '01':
        // Tall Vertical Layout: Desktop Browser + Mobile Wireframe
        return (
          <div className="w-full my-auto py-1 flex items-center justify-center pointer-events-none">
            <svg
              className="w-full text-text-black/90 group-hover:text-text-black transition-colors duration-300 h-16 sm:h-22 md:h-30 lg:h-40 max-w-[130px] sm:max-w-[180px] lg:max-w-[220px]"
              viewBox="0 0 200 150"
              fill="none"
            >
              {/* Desktop Browser Frame */}
              <rect
                x="10"
                y="10"
                width="145"
                height="110"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeOpacity="0.9"
                fill="currentColor"
                fillOpacity="0.1"
              />
              <line
                x1="10"
                y1="24"
                x2="155"
                y2="24"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeOpacity="0.75"
              />
              <circle cx="20" cy="17" r="2.2" fill="currentColor" fillOpacity="0.95" />
              <circle cx="27" cy="17" r="2.2" fill="currentColor" fillOpacity="0.75" />
              <circle cx="34" cy="17" r="2.2" fill="currentColor" fillOpacity="0.75" />

              {/* Desktop Hero Lines */}
              <rect
                x="20"
                y="36"
                width="65"
                height="7"
                rx="1.5"
                fill="currentColor"
                fillOpacity="0.9"
              />
              <rect
                x="20"
                y="47"
                width="48"
                height="4.5"
                rx="1.5"
                fill="currentColor"
                fillOpacity="0.65"
              />
              <rect
                x="20"
                y="58"
                width="36"
                height="10"
                rx="2"
                fill="currentColor"
                fillOpacity="1"
              />

              {/* Overlapping Mobile Device Frame */}
              <rect
                x="115"
                y="42"
                width="75"
                height="98"
                rx="6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeOpacity="0.95"
                fill="currentColor"
                fillOpacity="0.14"
              />
              <rect
                x="142"
                y="48"
                width="20"
                height="3"
                rx="1.5"
                fill="currentColor"
                fillOpacity="0.8"
              />
              <rect
                x="125"
                y="60"
                width="46"
                height="5.5"
                rx="1.5"
                fill="currentColor"
                fillOpacity="0.9"
              />
              <rect
                x="125"
                y="70"
                width="34"
                height="4"
                rx="1"
                fill="currentColor"
                fillOpacity="0.65"
              />
              <rect
                x="125"
                y="80"
                width="55"
                height="28"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeOpacity="0.8"
                fill="currentColor"
                fillOpacity="0.12"
              />
            </svg>
          </div>
        );

      case '02':
        // Wide Banner Layout: SaaS Dashboard with Multi-Column Analytics
        return (
          <div className="w-full my-auto py-1 flex items-center justify-center pointer-events-none">
            <svg
              className="w-full text-text-black/90 group-hover:text-text-black transition-colors duration-300 h-10 sm:h-14 lg:h-18 max-w-[160px] sm:max-w-sm lg:max-w-md"
              viewBox="0 0 340 75"
              fill="none"
            >
              {/* Main Dashboard Canvas Frame */}
              <rect
                x="5"
                y="5"
                width="330"
                height="65"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeOpacity="0.9"
                fill="currentColor"
                fillOpacity="0.1"
              />
              {/* Sidebar */}
              <line
                x1="45"
                y1="5"
                x2="45"
                y2="70"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeOpacity="0.75"
              />
              <circle cx="25" cy="16" r="3.5" fill="currentColor" fillOpacity="0.95" />
              <rect
                x="15"
                y="26"
                width="16"
                height="3"
                rx="1"
                fill="currentColor"
                fillOpacity="0.7"
              />
              <rect
                x="15"
                y="35"
                width="16"
                height="3"
                rx="1"
                fill="currentColor"
                fillOpacity="0.7"
              />
              <rect
                x="15"
                y="44"
                width="16"
                height="3"
                rx="1"
                fill="currentColor"
                fillOpacity="0.7"
              />

              {/* 3 Metric Stat Cards */}
              <rect
                x="56"
                y="14"
                width="50"
                height="22"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeOpacity="0.75"
                fill="currentColor"
                fillOpacity="0.12"
              />
              <rect
                x="62"
                y="19"
                width="18"
                height="2.5"
                rx="1"
                fill="currentColor"
                fillOpacity="0.75"
              />
              <rect
                x="62"
                y="25"
                width="28"
                height="4"
                rx="1"
                fill="currentColor"
                fillOpacity="0.95"
              />

              <rect
                x="112"
                y="14"
                width="50"
                height="22"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeOpacity="0.75"
                fill="currentColor"
                fillOpacity="0.12"
              />
              <rect
                x="118"
                y="19"
                width="18"
                height="2.5"
                rx="1"
                fill="currentColor"
                fillOpacity="0.75"
              />
              <rect
                x="118"
                y="25"
                width="28"
                height="4"
                rx="1"
                fill="currentColor"
                fillOpacity="0.95"
              />

              <rect
                x="168"
                y="14"
                width="50"
                height="22"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeOpacity="0.75"
                fill="currentColor"
                fillOpacity="0.12"
              />
              <rect
                x="174"
                y="19"
                width="18"
                height="2.5"
                rx="1"
                fill="currentColor"
                fillOpacity="0.75"
              />
              <rect
                x="174"
                y="25"
                width="28"
                height="4"
                rx="1"
                fill="currentColor"
                fillOpacity="0.95"
              />

              {/* Chart Section */}
              <rect
                x="226"
                y="14"
                width="100"
                height="50"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeOpacity="0.75"
                fill="currentColor"
                fillOpacity="0.12"
              />
              <path
                d="M236,52 L250,40 L264,46 L280,28 L296,34 L312,22"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeOpacity="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Bottom Data Row */}
              <rect
                x="56"
                y="42"
                width="162"
                height="22"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeOpacity="0.75"
                fill="currentColor"
                fillOpacity="0.12"
              />
              <line
                x1="56"
                y1="53"
                x2="218"
                y2="53"
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity="0.6"
              />
              <rect
                x="64"
                y="46"
                width="40"
                height="3"
                rx="1"
                fill="currentColor"
                fillOpacity="0.85"
              />
              <rect
                x="64"
                y="57"
                width="55"
                height="3"
                rx="1"
                fill="currentColor"
                fillOpacity="0.7"
              />
            </svg>
          </div>
        );

      case '03':
        // Website Clone & Replication: Syncing Windows
        return (
          <div className="w-full my-auto py-1 flex items-center justify-center pointer-events-none">
            <svg
              className="w-full text-text-black/90 group-hover:text-text-black transition-colors duration-300 h-7 sm:h-9 md:h-10 lg:h-12 max-w-[95px] sm:max-w-[115px]"
              viewBox="0 0 130 50"
              fill="none"
            >
              <rect
                x="5"
                y="5"
                width="42"
                height="38"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeOpacity="0.8"
                fill="currentColor"
                fillOpacity="0.09"
              />
              <line
                x1="5"
                y1="14"
                x2="47"
                y2="14"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeOpacity="0.65"
              />
              <rect
                x="10"
                y="19"
                width="16"
                height="2.5"
                rx="1"
                fill="currentColor"
                fillOpacity="0.75"
              />
              <rect
                x="10"
                y="25"
                width="28"
                height="12"
                rx="1"
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity="0.65"
              />

              {/* Sync Arrow */}
              <path
                d="M56,24 L72,24 M68,20 L72,24 L68,28"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeOpacity="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <rect
                x="82"
                y="5"
                width="42"
                height="38"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeOpacity="0.95"
                fill="currentColor"
                fillOpacity="0.14"
              />
              <line
                x1="82"
                y1="14"
                x2="124"
                y2="14"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeOpacity="0.85"
              />
              <rect
                x="87"
                y="19"
                width="16"
                height="2.5"
                rx="1"
                fill="currentColor"
                fillOpacity="0.95"
              />
              <rect
                x="87"
                y="25"
                width="28"
                height="12"
                rx="1"
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity="0.9"
                fill="currentColor"
                fillOpacity="0.2"
              />
            </svg>
          </div>
        );

      case '04':
        // Figma to Production Code
        return (
          <div className="w-full my-auto py-1 flex items-center justify-center pointer-events-none">
            <svg
              className="w-full text-text-black/90 group-hover:text-text-black transition-colors duration-300 h-7 sm:h-9 md:h-10 lg:h-12 max-w-[95px] sm:max-w-[115px]"
              viewBox="0 0 130 50"
              fill="none"
            >
              {/* Figma Frame */}
              <rect
                x="8"
                y="8"
                width="34"
                height="34"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeOpacity="0.85"
                strokeDasharray="2.5 2.5"
                fill="currentColor"
                fillOpacity="0.09"
              />
              <circle cx="8" cy="8" r="2.2" fill="currentColor" />
              <circle cx="42" cy="8" r="2.2" fill="currentColor" />
              <circle cx="8" cy="42" r="2.2" fill="currentColor" />
              <circle cx="42" cy="42" r="2.2" fill="currentColor" />
              <path
                d="M16,32 Q25,14 34,28"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeOpacity="0.95"
                fill="none"
              />

              {/* Arrow */}
              <path
                d="M52,25 L64,25 M60,21 L64,25 L60,29"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeOpacity="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Code Box */}
              <rect
                x="74"
                y="8"
                width="48"
                height="34"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeOpacity="0.95"
                fill="currentColor"
                fillOpacity="0.14"
              />
              <path
                d="M84,21 L80,25 L84,29 M94,21 L98,25 L94,29 M91,18 L87,32"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeOpacity="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        );

      case '05':
        // Maintenance & Optimization: Speedometer Dial & Sparkline
        return (
          <div className="w-full my-auto py-1 flex items-center justify-center pointer-events-none">
            <svg
              className="w-full text-text-black/90 group-hover:text-text-black transition-colors duration-300 h-7 sm:h-9 md:h-10 lg:h-12 max-w-[95px] sm:max-w-[115px]"
              viewBox="0 0 130 50"
              fill="none"
            >
              {/* Speedometer Arc */}
              <path
                d="M20,38 A 20 20 0 1 1 52,38"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeOpacity="0.35"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M20,38 A 20 20 0 0 1 45,19"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeOpacity="1"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="36" cy="35" r="3.5" fill="currentColor" fillOpacity="1" />
              <line
                x1="36"
                y1="35"
                x2="46"
                y2="23"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeOpacity="1"
                strokeLinecap="round"
              />

              {/* Sparkline */}
              <path
                d="M68,36 L80,24 L90,30 L106,16"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeOpacity="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="99,16 106,16 106,23"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeOpacity="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        );

      case '06':
        // Other / Custom Request: Dialogue Node with Consultation Arrow
        return (
          <div className="w-full my-auto py-1 flex items-center justify-center pointer-events-none">
            <svg
              className="w-full text-text-black/90 group-hover:text-text-black transition-colors duration-300 h-7 sm:h-9 md:h-10 lg:h-12 max-w-[95px] sm:max-w-[115px]"
              viewBox="0 0 130 50"
              fill="none"
            >
              <rect
                x="8"
                y="10"
                width="46"
                height="20"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeOpacity="0.8"
                fill="currentColor"
                fillOpacity="0.09"
              />
              <rect
                x="14"
                y="16"
                width="20"
                height="3"
                rx="1"
                fill="currentColor"
                fillOpacity="0.85"
              />
              <rect
                x="14"
                y="22"
                width="30"
                height="2.5"
                rx="1"
                fill="currentColor"
                fillOpacity="0.6"
              />

              <rect
                x="50"
                y="20"
                width="65"
                height="22"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeOpacity="0.95"
                fill="currentColor"
                fillOpacity="0.14"
              />
              <rect
                x="58"
                y="28"
                width="32"
                height="3"
                rx="1"
                fill="currentColor"
                fillOpacity="0.95"
              />
              <path
                d="M100,30 L108,30 M105,27 L108,30 L105,33"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeOpacity="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="px-3 sm:px-6 pb-4 sm:pb-6 pt-14 sm:pt-18 lg:pt-20 relative flex flex-col h-full min-h-0 w-full bg-transparent overflow-hidden justify-between select-none">
      <div className="w-full h-full flex flex-col relative justify-between gap-1 sm:gap-2">
        {/* Header My services căn phải */}
        <div className="flex justify-end w-full mb-1 sm:mb-2 shrink-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-black/50 italic text-right">
            My services
          </h1>
        </div>

        {/* Seamless Monolithic Bento Matrix */}
        <div className="grid grid-cols-2 grid-rows-3 lg:grid-cols-12 lg:grid-rows-2 gap-0 w-full flex-1 min-h-0 rounded overflow-hidden border border-text-black/20">
          {BENTO_SERVICES.map((service) => {
            const isOpen = hoveredId === service.id || activeId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => toggleActive(service.id)}
                className={`${service.span} ${service.borderClass} h-full p-2 sm:p-3 lg:p-4 rounded-none bg-transparent hover:bg-text-black/[0.04] transition-colors duration-200 flex flex-col justify-between cursor-pointer select-none overflow-hidden relative group`}
              >
                {/* Top Row: Expand Icon */}
                <div className="flex items-center justify-end w-full shrink-0 select-none">
                  <span
                    className={`text-[9px] sm:text-xs lg:text-sm font-bold text-text-black/40 group-hover:text-text-black transition-all duration-300 ${
                      isOpen ? 'rotate-45 text-text-black' : ''
                    }`}
                  >
                    +
                  </span>
                </div>

                {/* Pictographic Visual Shape Zone (Luôn hiển thị rõ nét) */}
                {renderPictographicShape(service.id)}

                {/* Bottom Title & Expandable Description */}
                <div className="flex flex-col justify-end w-full pt-0.5 sm:pt-1 shrink-0">
                  <h2 className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-text-black leading-tight sm:leading-snug">
                    {service.title}
                  </h2>

                  {/* Expandable Description */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.25, ease: [0.25, 1, 0.5, 1] },
                          opacity: { duration: 0.2 },
                        }}
                        className="overflow-hidden w-full"
                      >
                        <div className="pt-0.5 sm:pt-1 flex flex-col gap-1 sm:gap-1.5">
                          <p className="text-[9px] sm:text-[10.5px] md:text-xs lg:text-[13px] text-text-black/75 font-normal leading-tight sm:leading-relaxed line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                            {service.description}
                          </p>

                          {service.isCustom && (
                            <div className="pt-0.5">
                              <a
                                href={service.actionHref}
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 px-2 py-0.5 bg-text-black text-white hover:bg-neutral-800 text-[9px] sm:text-xs font-bold transition-all w-fit"
                              >
                                <span>{service.actionText}</span>
                                <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              </a>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}