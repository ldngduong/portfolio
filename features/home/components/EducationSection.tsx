'use client';

interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  honors?: string;
  description: string[];
  skills: string[];
}

const EDUCATION: EducationItem[] = [
  {
    id: 'tlu',
    title: 'Bachelor of Software Engineering',
    institution: 'Thuyloi University (TLU)',
    period: '10/2022 — 8/2026',
    honors: 'Graduated with Honors',
    description: [
      'Completed a 4-year engineering curriculum covering Software Architecture, Algorithms & Data Structures, Database Systems, Object-Oriented Design, and Fullstack Web Development.',
      'Graduated with honors; led capstone engineering projects applying agile software methodologies.',
    ],
    skills: [
      'Software Architecture',
      'Data Structures & Algorithms',
      'Database Systems',
      'OOP Design',
      'System Analysis',
    ],
  },
  {
    id: 'udemy-figma',
    title: 'Learn Figma: UI/UX Design Masterclass',
    institution: 'Udemy',
    period: '2025',
    honors: 'Certificate of Completion',
    description: [
      'Mastered end-to-end UI/UX product design workflows from fundamental principles to production-ready design systems.',
      'Built interactive high-fidelity prototypes, component architectures, auto layout rules, design tokens, and seamless developer handoffs.',
    ],
    skills: [
      'Figma',
      'UI/UX Design',
      'Design Systems',
      'Prototyping',
      'Auto Layout',
      'Design Tokens',
    ],
  },
];

export function EducationSection() {
  return (
    <section className="relative flex flex-col w-full bg-transparent select-none space-y-5 sm:space-y-6">
      {/* Title */}
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-black">
          Education & Certifications
        </h2>
      </div>

      {/* Timeline Roadmap Track chuẩn theo thiết kế trong About */}
      <div className="relative pl-7 space-y-8 w-full pt-1">
        {/* Vertical line connecting roadmap items */}
        <div className="absolute left-[7px] top-2.5 bottom-2.5 w-[1px] bg-text-black/20" />

        {EDUCATION.map((item) => (
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
