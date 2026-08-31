import type { StaticImageData } from 'next/image';

import seev from '../../public/project/seev.png';
import railflow from '../../public/project/railflow.png';
import clipy from '../../public/project/clipy.png';

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string | StaticImageData;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: '01',
    title: 'Railflow',
    description:
      'An online train ticketing platform featuring real-time seat selection via Socket.IO, instant seat locking, VNPay integration, and Google OAuth / JWT authentication.',
    techStack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Socket.IO', 'Redis'],
    githubUrl: 'https://github.com/letungduong24/train-booking',
    demoUrl: 'https://railflow.duongle.dev',
    image: railflow,
  },
  {
    id: '02',
    title: 'Seev',
    description:
      'An AI-powered CV scoring and automated job matching platform using OpenAI. Integrated with automated job scraping pipelines via Firecrawl and NestJS.',
    techStack: ['React', 'NestJS', 'TypeORM', 'PostgreSQL', 'Redis', 'OpenAI'],
    githubUrl: 'https://github.com/ldngduong/seev',
    demoUrl: 'https://seev.duongle.dev',
    image: seev,
  },
  {
    id: '03',
    title: 'Clipy',
    description:
      'A cross-platform desktop clipboard manager built with Tauri 2. Real-time clipboard monitoring with smart type detection, secret detection, image preview, full-text search, and system tray integration.',
    techStack: ['Tauri', 'Rust', 'React', 'TypeScript', 'SQLite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ldngduong/clipy',
    demoUrl: 'https://github.com/ldngduong/clipy/releases',
    image: clipy,
  },
];
