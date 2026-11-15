import type { Locale } from '@/lib/preferences';

interface FreelanceService {
  id: string;
  title: string;
  description: string;
  highlights: string[];
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export function getServices(locale: Locale): FreelanceService[] {
  const vi = locale === 'vi';

  return [
    {
      id: 'web-app',
      title: vi ? 'Ứng dụng web full-stack' : 'Full-stack web applications',
      description: vi ? 'Phát triển nền tảng SaaS, cổng thông tin khách hàng và dashboard quản trị.' : 'SaaS platforms, customer portals, and admin dashboards.',
      highlights: vi ? [
        'Frontend với Next.js, React, TypeScript và Tailwind CSS',
        'Backend với Node.js và NestJS, tích hợp REST API và WebSocket',
        'Thiết kế cơ sở dữ liệu, migration và caching với PostgreSQL, Prisma và Redis',
        'Xác thực, phân quyền theo vai trò (RBAC) và tích hợp cổng thanh toán',
      ] : [
        'Frontend with Next.js, React, TypeScript, and Tailwind CSS',
        'Backend with Node.js and NestJS, including REST APIs and WebSocket',
        'Database design, migrations, and caching with PostgreSQL, Prisma, and Redis',
        'Authentication, role-based access control (RBAC), and payment integration',
      ],
    },
    {
      id: 'landing-page',
      title: 'Landing page',
      description: vi ? 'Trang giới thiệu sản phẩm hoặc chiến dịch có form thu thập thông tin khách hàng.' : 'Product and campaign pages with lead capture forms.',
      highlights: vi ? [
        'Giao diện responsive cho máy tính và thiết bị di động',
        'Tối ưu Core Web Vitals và technical SEO',
        'Hiệu ứng cuộn và phản hồi khi tương tác',
        'Tích hợp form liên hệ và công cụ analytics',
      ] : [
        'Responsive layouts for desktop and mobile',
        'Core Web Vitals and technical SEO',
        'Scroll animations and interaction feedback',
        'Contact forms and analytics',
      ],
    },
    {
      id: 'mobile-app',
      title: vi ? 'Ứng dụng di động' : 'Mobile applications',
      description: vi ? 'Phát triển ứng dụng iOS và Android từ cùng một codebase với React Native và Expo.' : 'iOS and Android development from a shared React Native and Expo codebase.',
      highlights: vi ? [
        'Giao diện thích ứng với kích thước màn hình và hỗ trợ thao tác cảm ứng',
        'Lưu trữ offline, push notification và đồng bộ qua API',
        'Cấu hình build để phát hành trên App Store và Google Play',
      ] : [
        'Responsive layouts and touch gestures',
        'Offline storage, push notifications, and API synchronization',
        'Build configuration for App Store and Google Play releases',
      ],
    },
    {
      id: 'figma-design',
      title: vi ? 'Thiết kế UI/UX trên Figma' : 'UI/UX design in Figma',
      description: vi ? 'Thiết kế giao diện sản phẩm, prototype và design system.' : 'Product interfaces, prototypes, and design systems.',
      highlights: vi ? [
        'Xây dựng user flow, wireframe và giao diện',
        'Tạo prototype tương tác để kiểm thử',
        'Thiết lập Auto Layout, design token và component dùng lại',
        'Bàn giao bản thiết kế, tài nguyên và thông số cho lập trình viên',
      ] : [
        'User flows, wireframes, and interface design',
        'Interactive prototypes for testing',
        'Auto Layout, design tokens, and reusable components',
        'Designs, assets, and specifications for developer handoff',
      ],
    },
  ];
}

export function getFaqs(locale: Locale): FaqItem[] {
  const vi = locale === 'vi';

  return [
    {
      id: 'faq-1',
      question: vi ? 'Bạn nhận những loại dự án nào?' : 'What kinds of projects do you take on?',
      answer: vi
        ? 'Tôi nhận phát triển ứng dụng web full-stack, landing page và ứng dụng iOS, Android. Tôi cũng nhận thiết kế UI/UX trên Figma, làm MVP và thiết kế lại sản phẩm hiện có.'
        : 'I take on full-stack web apps, landing pages, and iOS and Android apps. I also work on UI/UX design in Figma, MVPs, and redesigns.',
    },
    {
      id: 'faq-2',
      question: vi ? 'Một dự án thường mất bao lâu?' : 'How long does a project usually take?',
      answer: vi
        ? 'Landing page thường mất 1–2 tuần, ứng dụng web hoặc MVP mất 3–6 tuần, còn ứng dụng di động mất 4–8 tuần. Tôi sẽ ước tính lịch cụ thể sau khi trao đổi về phạm vi công việc.'
        : 'Landing pages usually take 1–2 weeks, web apps and MVPs 3–6 weeks, and mobile apps 4–8 weeks. I confirm the schedule after we discuss the scope.',
    },
    {
      id: 'faq-3',
      question: vi ? 'Bạn có thể phụ trách cả thiết kế và lập trình không?' : 'Can you handle both design and development?',
      answer: vi
        ? 'Có. Tôi có thể phụ trách từ wireframe và prototype trên Figma đến phát triển frontend, backend và triển khai.'
        : 'Yes. I can handle Figma wireframes and prototypes, frontend and backend development, and deployment.',
    },
    {
      id: 'faq-4',
      question: vi ? 'Hai bên trao đổi và theo dõi tiến độ thế nào?' : 'How do we communicate and track progress?',
      answer: vi
        ? 'Có thể trao đổi qua Slack, Telegram, Discord hoặc email và họp video hằng tuần nếu cần. Tôi chia sẻ file Figma, danh sách công việc và link staging để bạn kiểm tra từng tính năng.'
        : 'We can use Slack, Telegram, Discord, or email, with a weekly video call if needed. I share Figma files, the task list, and staging links for review.',
    },
    {
      id: 'faq-5',
      question: vi ? 'Tôi cần chuẩn bị gì để bắt đầu?' : 'What should I prepare to get started?',
      answer: vi
        ? 'Bạn có thể gửi tóm tắt dự án, sản phẩm tham khảo và thời gian dự kiến. Nếu đã có bản thiết kế, PRD hoặc wireframe, hãy gửi kèm.'
        : 'Send a short project brief, any references, and your target timeline. Include any existing designs, PRDs, or wireframes.',
    },
  ];
}
