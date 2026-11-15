import type { Locale } from '@/lib/preferences';

interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  honors: string;
  description: string[];
  skills: string[];
}

export function getEducation(locale: Locale): EducationItem[] {
  const vi = locale === 'vi';

  return [
    {
      id: 'tlu',
      title: vi ? 'Cử nhân Kỹ thuật phần mềm' : 'Bachelor of Software Engineering',
      institution: vi ? 'Trường Đại học Thủy lợi (TLU)' : 'Thuyloi University (TLU)',
      period: '10/2022 – 08/2026',
      honors: vi ? 'Tốt nghiệp danh dự' : 'Graduated with Honors',
      description: vi ? [
        'Hoàn thành chương trình 4 năm về kiến trúc phần mềm, cấu trúc dữ liệu và giải thuật, cơ sở dữ liệu, thiết kế hướng đối tượng và phát triển web full-stack.',
        'Phụ trách các đồ án cuối khóa áp dụng phương pháp Agile.',
      ] : [
        'Completed a four-year program covering software architecture, data structures and algorithms, databases, object-oriented design, and full-stack web development.',
        'Led capstone projects using Agile methods.',
      ],
      skills: vi ? [
        'Kiến trúc phần mềm', 'Cấu trúc dữ liệu và giải thuật', 'Cơ sở dữ liệu', 'Thiết kế hướng đối tượng', 'Phân tích hệ thống',
      ] : [
        'Software Architecture', 'Data Structures & Algorithms', 'Database Systems', 'Object-Oriented Design', 'Systems Analysis',
      ],
    },
    {
      id: 'udemy-figma',
      title: 'Learn Figma: UI/UX Design Masterclass',
      institution: 'Udemy',
      period: '2025',
      honors: vi ? 'Chứng chỉ hoàn thành khóa học' : 'Certificate of Completion',
      description: vi ? [
        'Thực hành thiết kế UI/UX trên Figma, từ prototype tương tác đến design system.',
        'Sử dụng component, Auto Layout và design token để chuẩn bị bản thiết kế bàn giao cho lập trình viên.',
      ] : [
        'Practiced UI/UX design in Figma, from interactive prototypes to design systems.',
        'Used components, Auto Layout, and design tokens to prepare designs for developer handoff.',
      ],
      skills: ['Figma', 'UI/UX Design', 'Design Systems', 'Prototyping', 'Auto Layout', 'Design Tokens'],
    },
  ];
}
