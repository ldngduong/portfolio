'use client';

import { usePreferences } from '@/components/common/PreferencesProvider';
import { getEducation } from '@/features/education/data';

export function EducationSection() {
  const { locale, t } = usePreferences();
  return (
    <section className="relative flex flex-col w-full bg-transparent select-none space-y-5 sm:space-y-6">
      {/* Title */}
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-black">
          {t.education}
        </h2>
      </div>

      {/* Timeline Roadmap Track chuẩn theo thiết kế trong About */}
      <div className="relative pl-7 space-y-8 w-full pt-1">
        {/* Vertical line connecting roadmap items */}
        <div className="absolute left-[7px] top-2.5 bottom-2.5 w-[1px] bg-text-black/20" />

        {getEducation(locale).map((item) => (
          <div key={item.id} className="relative group">
            {/* Roadmap Node Dot */}
            <div className="absolute -left-[21px] -translate-x-1/2 top-1.5 w-3.5 h-3.5 rounded-full border border-text-black/40 bg-background flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-text-black/60" />
            </div>

            {/* Content */}
            <div className="space-y-2">
              {/* Date header */}
              <div className="text-xs text-text-black/50">
                {item.period}
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-text-black flex items-center gap-1.5">
                  <span>{item.title}</span>
                  <span className="text-text-black/40">·</span>
                  <span className="text-text-black/85">{item.institution}</span>
                </h3>
                {item.honors && (
                  <p className="text-xs text-text-black/65 font-medium mt-0.5">
                    {item.honors}
                  </p>
                )}
              </div>

              {/* Descriptions */}
              <div className="space-y-1.5 text-xs sm:text-sm text-text-black/75 leading-relaxed">
                {item.description.map((desc, idx) => (
                  <p key={idx}>{desc}</p>
                ))}
              </div>

              {/* Skills / Key areas */}
              <div className="pt-1 flex flex-wrap gap-1.5">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 text-xs rounded-full bg-text-black/5 text-text-black/80 select-none border border-text-black/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
