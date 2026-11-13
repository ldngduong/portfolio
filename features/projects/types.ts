import type { StaticImageData } from 'next/image';

import seev from '../../public/project/seev.webp';
import railflow from '../../public/project/railflow.webp';
import syncflow from '../../public/project/syncflow.webp';
import arlab from '../../public/project/arlab.webp';

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category?: string;
  meta?: string;
  role?: string;
  description: string;
  features: ProjectFeature[];
  techStack: string[];
  demoUrl?: string;
  figmaUrl?: string;
  image: string | StaticImageData;
  featured?: boolean;
}

export const ALL_PROJECTS_DATA: ProjectItem[] = [
  {
    id: '01',
    title: 'Railflow',
    category: 'Full-Stack Web Platform',
    meta: '2025',
    role: 'Designer & Full-Stack Developer',
    description:
      'An online train ticketing platform featuring real-time seat reservation via Socket.IO, instant seat locking with Redis, GeoJSON route mapping with MapLibre GL, and VNPay integration.',
    features: [
      {
        title: 'Real-Time Seat Locking',
        description:
          'Prevents double-booking by temporarily reserving seats via Socket.IO and Redis TTL while passengers complete checkout.',
      },
      {
        title: 'Interactive Route Map',
        description:
          'Visualizes railway networks, station distances, and intermediate stops on an interactive map using MapLibre GL and GeoJSON.',
      },
      {
        title: 'Dynamic Fare & Discounts',
        description:
          'Calculates ticket pricing based on coach classes (Hard Seat, Soft Berth, VIP) and passenger discounts (Students, Seniors, Children).',
      },
      {
        title: 'Online Payment & QR Tickets',
        description:
          'Processes transactions through VNPay with instant verification and generates QR-coded electronic tickets for boarding.',
      },
      {
        title: 'AI Travel Assistant',
        description:
          'Uses Google Gemini via AI SDK to help travelers query schedules, look up routes, and answer fare questions.',
      },
    ],
    techStack: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'Socket.IO', 'MapLibre GL'],
    demoUrl: 'https://railflow.duongle.dev',
    image: railflow,
    featured: true,
  },
  {
    id: '02',
    title: 'Seev',
    category: 'AI Career Intelligence',
    meta: '2026',
    role: 'Designer & Full-Stack Developer',
    description:
      'An AI-powered platform for IT professionals to analyze CVs, assess job compatibility, and practice technical interviews.',
    features: [
      {
        title: 'Automated Job Crawler',
        description:
          'Scrapes and normalizes tech job listings from TopCV, ITViec, and VietnamWorks using an asynchronous FastAPI & Firecrawl pipeline.',
      },
      {
        title: 'ATS Resume Scoring',
        description:
          'Analyzes uploaded CVs (PDF) with OpenAI GPT-4o and DeepSeek to evaluate formatting, keyword relevance, and technical skill gaps.',
      },
      {
        title: 'Job-Fit Compatibility Match',
        description:
          'Computes compatibility scores between applicant experience and active job requirements using BullMQ background queues.',
      },
      {
        title: 'Real-Time Progress & Telemetry',
        description:
          'Provides live WebSocket updates for crawling and scoring progress, with file storage managed on Cloudflare R2.',
      },
    ],
    techStack: ['React', 'NestJS', 'FastAPI', 'Python', 'PostgreSQL', 'Redis', 'OpenAI'],
    demoUrl: 'https://seev.duongle.dev',
    image: seev,
    featured: true,
  },
  {
    id: '03',
    title: 'SyncFlow',
    category: 'SaaS Landing Page',
    meta: '2026',
    role: 'UI/UX Designer & Front-End Developer',
    description:
      'A responsive SaaS landing page for an AI workflow and collaboration concept, designed in Figma and built with React.',
    features: [],
    techStack: ['Figma', 'React', 'Vite', 'shadcn/ui'],
    demoUrl: 'https://syncflow.duongle.dev',
    figmaUrl: 'https://www.figma.com/design/9IklZ21HmUDD1eikzg3MNk/SyncFlow?node-id=61-64&t=hp7Y4gbQQ0JUFxeB-1',
    image: syncflow,
    featured: true,
  },
  {
    id: '04',
    title: 'ArLab',
    category: 'Product Landing Page',
    meta: '2026',
    role: 'UI/UX Designer & Front-End Developer',
    description:
      'A storefront concept for the TRIMUI Brick Pro handheld, with a gameplay preview, a color and storage configurator, and a demo checkout.',
    features: [],
    techStack: ['Figma', 'React', 'Vite', 'shadcn/ui'],
    demoUrl: 'https://arlab.duongle.dev',
    image: arlab,
    featured: true,
  },
];
