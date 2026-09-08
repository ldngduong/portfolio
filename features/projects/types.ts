import type { StaticImageData } from 'next/image';

import seev from '../../public/project/seev.webp';
import railflow from '../../public/project/railflow.webp';

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
  githubUrl?: string;
  demoUrl?: string;
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
    githubUrl: 'https://github.com/letungduong24/train-booking',
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
      'An automated job aggregation and AI-powered CV analysis platform that scrapes tech job postings and evaluates resume compatibility with OpenAI & DeepSeek.',
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
    githubUrl: 'https://github.com/letungduong24/seev',
    demoUrl: 'https://seev.duongle.dev',
    image: seev,
    featured: true,
  },
];
