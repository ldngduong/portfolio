'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.25, ease: 'easeInOut' },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background select-none pointer-events-auto"
        >
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight flex items-center justify-center">
            {/* Chữ Duong hiện luôn ngay lập tức, sắc nét, không bị delay hay nhòe */}
            <span className="text-text-black inline-block">
              Duong
            </span>

            {/* Chữ Le màu mờ hiện sau mượt mà */}
            <motion.span
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.2,
                ease: 'easeOut',
              }}
              className="text-text-black/50 inline-block"
            >
              Le
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
