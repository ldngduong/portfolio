'use client';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyVn?: string;
  period: string;
  location: string;
  description: string[];
  techStack: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: '3nest-invest',
    role: 'Frontend Developer',
    company: '3NestInvest',
    period: '2026 — Present',
    location: 'Hanoi, Vietnam',
    description: [
      'Engineer high-performance web applications and responsive client dashboards using Next.js, React, and TypeScript.',
      'Architect modular UI design systems with Tailwind CSS, ensuring smooth rendering performance and consistent user experience.',
      'Collaborate with cross-functional product and backend teams to integrate secure RESTful APIs and real-time data workflows.',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'REST APIs',
    ],
  },
  {
    id: 'ecco',
    role: 'Backend Developer Intern',
    company: 'ECCO',
    companyVn: 'Center for Economic and Community Development',
    period: 'Jan — Feb 2026',
    location: 'Hanoi, Vietnam',
    description: [
      'Developed and maintained RESTful API services and backend workflows supporting community-focused digital platforms.',
      'Designed relational database models, handled data migrations, and optimized SQL queries in PostgreSQL.',
      'Implemented API validation, error handling pipelines, and conducted endpoint testing with Postman and Docker.',
    ],
    techStack: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'REST APIs',
      'Docker',
      'Postman',
    ],
  },
  {
    id: 'freelance',
    role: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2024 — Present',
    location: 'Remote',
    description: [
      'Delivered bespoke web applications, landing pages, and interactive client platforms from Figma concepts to production deployment.',
      'Transformed complex design layouts into pixel-perfect, accessible code with responsive behaviors and web performance optimization.',
      'Managed client communication, technical requirements scoping, and automated deployment pipelines on Vercel.',
    ],
    techStack: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Figma to Code',
      'Vercel',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="relative flex flex-col w-full bg-transparent select-none space-y-5 sm:space-y-6">
      {/* Title */}
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-black">
          Experience
        </h2>
      </div>

      {/* Timeline Roadmap Track chuẩn theo thiết kế trong About */}
      <div className="relative pl-7 space-y-8 w-full pt-1">
        {/* Vertical line connecting roadmap items */}
        <div className="absolute left-[7px] top-2.5 bottom-2.5 w-[1px] bg-text-black/20" />

        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Roadmap Node Dot */}
            <div className="absolute -left-[21px] -translate-x-1/2 top-1.5 w-3.5 h-3.5 rounded-full border border-text-black/40 bg-background flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-text-black/60" />
            </div>

            {/* Content */}
            <div className="space-y-2">
              {/* Date header */}
              <div className="text-xs text-text-black/50">
                {exp.period}
              </div>

              {/* Role & Company */}
              <h3 className="text-sm sm:text-base font-bold text-text-black flex items-center gap-1.5">
                <span>{exp.role}</span>
                <span className="text-text-black/40">·</span>
                <span className="text-text-black/85">{exp.company}</span>
              </h3>

              {exp.companyVn && (
                <p className="text-xs text-text-black/50 font-normal">
                  {exp.companyVn}
                </p>
              )}

              {/* Descriptions */}
              <div className="space-y-1.5 text-xs sm:text-sm text-text-black/75 leading-relaxed">
                {exp.description.map((desc, idx) => (
                  <p key={idx}>{desc}</p>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-1 flex flex-wrap gap-1.5">
                {exp.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 text-xs rounded-full bg-text-black/5 text-text-black/80 select-none border border-text-black/5"
                  >
                    {tech}
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
