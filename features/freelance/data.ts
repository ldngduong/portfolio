export interface FreelanceService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FREELANCE_SERVICES: FreelanceService[] = [
  {
    id: 'web-app',
    title: 'Full-Stack Web Applications',
    subtitle: 'SaaS platforms, client portals & management dashboards',
    description:
      'End-to-end web application development covering both frontend and backend. From responsive client interfaces to scalable APIs, databases, authentication, and third-party integrations.',
    highlights: [
      'Frontend development with Next.js, React, TypeScript, and Tailwind CSS',
      'Backend engineering with Node.js, NestJS, and REST / WebSocket APIs',
      'Database architecture, migrations & caching with PostgreSQL, Prisma, and Redis',
      'Authentication, role-based access control (RBAC), and payment gateway integrations',
    ],
  },
  {
    id: 'landing-page',
    title: 'Landing Pages',
    subtitle: 'High-converting, fast marketing websites',
    description:
      'Crafting modern, conversion-focused landing pages designed to showcase your product, capture leads, and make a strong first impression.',
    highlights: [
      'Bespoke responsive design optimized for all screen sizes',
      'Fast load speeds with optimized Core Web Vitals and technical SEO',
      'Smooth scroll interactions and subtle micro-animations',
      'Contact forms, analytics tracking, and lead capture integration',
    ],
  },
  {
    id: 'mobile-app',
    title: 'Mobile Apps',
    subtitle: 'Cross-platform iOS & Android applications',
    description:
      'Developing smooth, intuitive mobile applications with React Native and Expo, bringing your product to iOS and Android from a unified codebase.',
    highlights: [
      'Cross-platform apps built with React Native and Expo',
      'Smooth native performance, fluid gestures, and responsive layouts',
      'Offline storage, push notifications, and API synchronization',
      'Store readiness and build configurations for App Store & Google Play',
    ],
  },
  {
    id: 'figma-design',
    title: 'Figma Design & UI/UX',
    subtitle: 'Product prototypes & design systems',
    description:
      'Designing user-friendly interfaces and interactive prototypes that turn raw product concepts into clear, developer-ready specifications.',
    highlights: [
      'User flows, wireframing, and intuitive interface design',
      'Clickable, interactive Figma prototypes for testing and validation',
      'Organized design systems with auto-layout, tokens, and reusable components',
      'Clean developer handoff with ready-to-inspect assets and styles',
    ],
  },
];

export const FREELANCE_FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What kinds of projects do you take on?',
    answer:
      'I specialize in Full-Stack Web Applications & SaaS platforms, high-converting Landing Pages, cross-platform Mobile Apps (iOS & Android via React Native/Expo), and comprehensive UI/UX Figma Design. Whether you need a product built from scratch (0 to 1), a modern redesign, or a fast MVP, I can help.',
  },
  {
    id: 'faq-2',
    question: 'How long does a typical freelance project take?',
    answer:
      'Timelines depend on scope: Landing pages typically take 1 to 2 weeks. Full-featured Web Apps or MVPs range between 3 to 6 weeks. Mobile applications generally take 4 to 8 weeks. We will define an exact schedule during our initial discovery discussion.',
  },
  {
    id: 'faq-3',
    question: 'Can you handle both UI/UX design and development?',
    answer:
      'Yes, absolutely. Being able to execute both design and full-stack code is my key strength. You eliminate the hassle and cost of coordinating separate designers and developers. I take your vision from wireframes and Figma prototypes straight to production-ready deployed code.',
  },
  {
    id: 'faq-4',
    question: 'How do we communicate and track progress?',
    answer:
      'We communicate via your preferred channel — Slack, Telegram, Discord, or Email — with weekly video checkpoints if desired. You will have full access to interactive Figma files, a task roadmap, and staging links to test working features in real time.',
  },
  {
    id: 'faq-5',
    question: 'What do you need from me to get started?',
    answer:
      'A brief summary of your idea or business, any reference links or competitors you like, and your expected target timeline. If you already have existing designs, PRDs, or wireframes, feel free to share them! If not, we can brainstorm and structure everything together.',
  },
];
