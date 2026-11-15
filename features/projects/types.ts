import type { StaticImageData } from 'next/image';
import type { Locale } from '@/lib/preferences';

import seev from '../../public/project/seev.webp';
import railflow from '../../public/project/railflow.webp';
import syncflow from '../../public/project/syncflow.webp';
import arlab from '../../public/project/arlab.webp';

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectItem {
  id: '01' | '02' | '03' | '04';
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

type ProjectCopy = Required<Pick<ProjectItem, 'role' | 'category' | 'description' | 'features'>>;

const vi: Record<ProjectItem['id'], ProjectCopy> = {
  '01': {
    category: 'Nền tảng web full-stack',
    role: 'Thiết kế và phát triển full-stack',
    description: 'Nền tảng đặt vé tàu trực tuyến. Hỗ trợ giữ chỗ theo thời gian thực bằng Socket.IO và Redis, hiển thị tuyến đường với MapLibre GL và GeoJSON, và thanh toán qua VNPay.',
    features: [
      { title: 'Giữ chỗ theo thời gian thực', description: 'Dùng Socket.IO và Redis TTL để giữ chỗ tạm thời trong lúc khách thanh toán, tránh đặt trùng vé.' },
      { title: 'Bản đồ tuyến đường tương tác', description: 'Hiển thị mạng lưới đường sắt, khoảng cách giữa các ga và điểm dừng bằng MapLibre GL và GeoJSON.' },
      { title: 'Giá vé và ưu đãi', description: 'Tính giá theo hạng ghế hoặc giường nằm và áp dụng ưu đãi theo nhóm hành khách.' },
      { title: 'Thanh toán trực tuyến và vé QR', description: 'Xác minh giao dịch VNPay và tạo vé điện tử có mã QR để lên tàu.' },
      { title: 'Trợ lý AI tra cứu vé tàu', description: 'Dùng Google Gemini qua AI SDK để tra cứu lịch tàu, tuyến đường và giá vé.' },
    ],
  },
  '02': {
    category: 'Công cụ AI hỗ trợ tìm việc',
    role: 'Thiết kế và phát triển full-stack',
    description: 'Công cụ AI cho ứng viên ngành IT, hỗ trợ phân tích CV, đánh giá mức độ phù hợp với vị trí tuyển dụng và luyện phỏng vấn kỹ thuật.',
    features: [
      { title: 'Thu thập tin tuyển dụng', description: 'Thu thập và chuẩn hóa tin tuyển dụng IT từ TopCV, ITviec và VietnamWorks bằng quy trình bất đồng bộ với FastAPI và Firecrawl.' },
      { title: 'Chấm điểm CV theo tiêu chí ATS', description: 'Dùng GPT-4o và DeepSeek để phân tích định dạng, từ khóa và kỹ năng còn thiếu trong CV dạng PDF.' },
      { title: 'Đánh giá mức độ phù hợp với vị trí', description: 'Đối chiếu kinh nghiệm trong CV với yêu cầu tuyển dụng và xử lý tác vụ qua hàng đợi BullMQ.' },
      { title: 'Cập nhật tiến độ theo thời gian thực', description: 'Dùng WebSocket để báo tiến độ thu thập dữ liệu và chấm điểm. Tệp được lưu trên Cloudflare R2.' },
    ],
  },
  '03': {
    category: 'Landing page cho SaaS',
    role: 'Thiết kế UI/UX và phát triển frontend',
    description: 'Landing page responsive cho ý tưởng sản phẩm SaaS hỗ trợ cộng tác và quản lý quy trình làm việc bằng AI. Thiết kế trên Figma và phát triển với React.',
    features: [],
  },
  '04': {
    category: 'Landing page sản phẩm',
    role: 'Thiết kế UI/UX và phát triển frontend',
    description: 'Bản mẫu cửa hàng cho máy chơi game cầm tay TRIMUI Brick Pro, có phần xem trước gameplay, chọn màu và dung lượng lưu trữ, cùng luồng thanh toán demo.',
    features: [],
  },
};

export function getProjects(locale: Locale): ProjectItem[] {
  return locale === 'en' ? ALL_PROJECTS_DATA : ALL_PROJECTS_DATA.map((project) => ({ ...project, ...vi[project.id] }));
}
