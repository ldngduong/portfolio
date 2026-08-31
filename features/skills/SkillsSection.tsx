'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillItem {
  id: string;
  title: string;
  skills: string[];
}

const SKILLS_DATA: SkillItem[] = [
  {
    id: '01',
    title: 'FRONTEND DEVELOPMENT',
    skills: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    id: '02',
    title: 'BACKEND DEVELOPMENT',
    skills: ['NestJS', 'Socket.io', 'PostgreSQL', 'Redis'],
  },
  {
    id: '03',
    title: 'UI/UX & DESIGN',
    skills: ['Figma to Production Code', 'Design System Implementation', 'Responsive Layouts'],
  },
  {
    id: '04',
    title: 'DEVELOPMENT TOOLS',
    skills: ['Git / GitHub', 'Docker', 'Postman'],
  },
];

export function SkillsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  // Dùng ref để khoá hover tạm thời ngay sau khi user vừa click/chạm
  const isClickAction = useRef(false);

  // Xử lý Click / Touch: Ấn lần 1 mở, ấn lần 2 VÀO CHÍNH NÓ để tắt
  const handleClick = (id: string) => {
    isClickAction.current = true;
    setActiveId((prev) => (prev === id ? null : id));
  };

  // Xử lý Hover PC: Chỉ kích hoạt khi người dùng thực sự di chuột (không phải vừa click)
  const handleMouseEnter = (id: string) => {
    if (isClickAction.current) return;
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    if (isClickAction.current) return;
    setActiveId(null);
  };

  const handleMouseMove = () => {
    // Reset lại cờ khi người dùng di chuyển chuột thực sự trên màn hình
    if (isClickAction.current) {
      isClickAction.current = false;
    }
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="p-6 relative flex h-screen w-full items-center justify-center overflow-hidden bg-background"
    >
      <div className="w-full flex flex-col justify-center items-end relative min-h-[320px]">
        <h1 className='text-4xl font-bold text-text-black/50 italic'>My skills</h1>
        {SKILLS_DATA.map((item) => {
          const isActive = activeId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => handleClick(item.id)}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              className="group py-10 flex flex-col items-end cursor-pointer select-none"
            >
              {/* Skill Cha Header */}
              <div className="flex justify-end items-center">
                <h1
                  className={`font-bold text-2xl sm:text-3xl md:text-5xl transition-all duration-300 text-text-black ${
                    isActive
                      ? 'underline decoration-2 underline-offset-8'
                      : ''
                  }`}
                >
                  {item.title}
                </h1>
              </div>

              {/* Skill Con xổ ra mượt mà phía dưới */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
                      opacity: { duration: 0.2 },
                    }}
                    className="w-full overflow-hidden flex flex-col items-end"
                  >
                    <div className="pt-4 pb-2 w-full flex flex-col items-end">
                      <ul className="flex flex-col items-end space-y-2 font-bold text-text-black text-lg sm:text-xl md:text-2xl">
                        {item.skills.map((skill, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.2,
                              delay: idx * 0.03,
                            }}
                            className="hover:underline transition-all cursor-pointer"
                          >
                            {skill}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}