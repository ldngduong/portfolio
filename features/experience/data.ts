import type { Locale } from '@/lib/preferences';

interface ExperienceItem {
  id: '3nest-invest' | 'ecco' | 'freelance';
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
      'Developed web applications and landing pages from Figma designs through production deployment.',
      'Built responsive interfaces and checked accessibility and page performance.',
      'Defined technical requirements with clients and automated deployments on Vercel.',
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

type ExperienceCopy = Pick<ExperienceItem, 'role' | 'period' | 'description'> &
  Partial<Pick<ExperienceItem, 'company' | 'companyVn' | 'location'>>;

const vi: Record<ExperienceItem['id'], ExperienceCopy> = {
  '3nest-invest': {
    role: 'Software Developer',
    period: '11/2025 – nay',
    location: 'Hà Nội, Việt Nam',
    description: [
      'Phát triển giao diện web và dashboard cho khách hàng với Next.js, React và TypeScript.',
      'Xây dựng dịch vụ backend và REST API với NestJS, đồng thời tích hợp API vào frontend.',
      'Từng viết script web scraping để tự động thu thập dữ liệu từ website.',
    ],
  },
  ecco: {
    role: 'Thực tập sinh Backend Developer',
    companyVn: 'Trung tâm Phát triển Kinh tế và Cộng đồng',
    period: '01/2026 – 02/2026',
    location: 'Hà Nội, Việt Nam',
    description: [
      'Phát triển và bảo trì REST API cho các nền tảng phục vụ cộng đồng.',
      'Thiết kế mô hình dữ liệu quan hệ, thực hiện migration và tối ưu truy vấn SQL trên PostgreSQL.',
      'Kiểm tra dữ liệu đầu vào, xử lý lỗi API và kiểm thử endpoint bằng Postman và Docker.',
    ],
  },
  freelance: {
    role: 'Lập trình viên freelance',
    company: 'Làm việc độc lập',
    period: '2024 – nay',
    location: 'Từ xa',
    description: [
      'Phát triển ứng dụng web và landing page từ bản thiết kế Figma đến khi triển khai.',
      'Xây dựng giao diện responsive, kiểm tra khả năng tiếp cận và hiệu năng tải trang.',
      'Trao đổi yêu cầu kỹ thuật với khách hàng và tự động hóa quy trình triển khai trên Vercel.',
    ],
  },
};

export function getExperiences(locale: Locale): ExperienceItem[] {
  return locale === 'en' ? EXPERIENCES : EXPERIENCES.map((item) => ({ ...item, ...vi[item.id] }));
}
