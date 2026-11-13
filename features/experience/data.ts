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

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: '3nest-invest',
    role: 'Software Developer',
    company: '3NestInvest',
    period: '11/2025 — Present',
    location: 'Hanoi, Vietnam',
    description: [
      'Build responsive web interfaces and client dashboards with Next.js, React, and TypeScript.',
      'Develop backend services and REST APIs with NestJS and integrate them into the frontend.',
      'Built web scrapers to automate data collection from websites.',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'NestJS',
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
