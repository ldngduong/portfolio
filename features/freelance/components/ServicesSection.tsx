'use client';

import { usePreferences } from '@/components/common/PreferencesProvider';

import { CardCornerPixelBloom } from '@/components/common/CardCornerPixelBloom';
import { getServices } from '../data';

export function ServicesSection() {
  const { locale, t } = usePreferences();
  return (
    <section id="services" className="relative flex flex-col w-full select-none space-y-5 sm:space-y-6 scroll-mt-24">
      {/* Section Header - Full Width */}
      <div className="space-y-1.5 w-full">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-black">
          {t.services}
        </h2>
      </div>

      {/* 4 Services Grid (2 Columns on MD+) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full">
        {getServices(locale).map((service) => (
          <div
            key={service.id}
            className="group relative overflow-hidden flex flex-col justify-between p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-text-black/10 bg-card/70 hover:bg-card hover:border-text-black/25 hover:shadow-lg transition-all duration-300"
          >
            {/* Pixel Bloom Effect luôn hiển thị không cần hover */}
            <CardCornerPixelBloom alwaysActive />

            <div className="space-y-4 relative z-20">
              {/* Title & Description */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-text-black">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-black/75 leading-relaxed pt-1">
                  {service.description}
                </p>
              </div>

              {/* Key Capabilities */}
              <ul className="space-y-1.5 pt-2 border-t border-text-black/5 list-none">
                {service.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-text-black/75 leading-relaxed">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
