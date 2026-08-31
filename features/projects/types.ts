import type { StaticImageData } from 'next/image';

import seev from '../../public/project/seev.png';
import railflow from '../../public/project/railflow.png';
import clipy from '../../public/project/clipy.png';

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category?: string;
  description: string;
  features: ProjectFeature[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string | StaticImageData;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: '01',
    title: 'Railflow',
    category: 'Full-Stack Web Platform',
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
    techStack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Socket.IO', 'Redis', 'MapLibre GL', 'VNPay'],
    githubUrl: 'https://github.com/letungduong24/train-booking',
    demoUrl: 'https://railflow.duongle.dev',
    image: railflow,
  },
  {
    id: '02',
    title: 'Seev',
    category: 'AI Career Intelligence',
    description:
      'An automated job aggregation and AI-powered CV analysis platform that scrapes tech job postings and evaluates resume compatibility.',
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
    techStack: ['React', 'NestJS', 'FastAPI', 'Python', 'PostgreSQL', 'Redis', 'OpenAI', 'Docker'],
    githubUrl: 'https://github.com/ldngduong/seev',
    demoUrl: 'https://seev.duongle.dev',
    image: seev,
  },
  {
    id: '03',
    title: 'Clipy',
    category: 'Desktop Application',
    description:
      'A cross-platform desktop clipboard manager built with Tauri v2 and Rust, designed for fast performance and offline privacy.',
    features: [
      {
        title: 'Global Shortcut & System Tray',
        description:
          'Runs in the background with native system tray persistence and instant access via a customizable hotkey (Cmd/Ctrl + Shift + V).',
      },
      {
        title: 'Smart Content Categorization',
        description:
          'Automatically sorts copied items into text, links, code snippets, JSON, colors, and image previews with SHA-256 deduplication.',
      },
      {
        title: 'Sensitive Data Shield',
        description:
          'Identifies passwords, API keys, and private tokens using regex heuristics to prevent accidental exposure.',
      },
      {
        title: 'Local-First Privacy & Search',
        description:
          'Stores all data offline on your machine with sub-millisecond search and organized custom collections.',
      },
    ],
    techStack: ['Tauri v2', 'Rust', 'React', 'TypeScript', 'Zustand', 'SQLite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ldngduong/clipy',
    demoUrl: 'https://github.com/ldngduong/clipy/releases',
    image: clipy,
  },
];
