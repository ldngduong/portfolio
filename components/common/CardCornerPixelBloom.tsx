'use client';

import { useEffect, useRef } from 'react';

interface CardCornerPixelBloomProps {
  alwaysActive?: boolean;
}

export function CardCornerPixelBloom({ alwaysActive = false }: CardCornerPixelBloomProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const CELL_SIZE = 14;
    const GAP = 2;
    const TOTAL_CELL = CELL_SIZE + GAP;

    let isHovered = alwaysActive;
    let progress = alwaysActive ? 1 : 0; // 0 (ẩn) -> 1 (tỏa rộng tối đa)
    let animationFrameId: number;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);

    const onMouseEnter = () => {
      isHovered = true;
    };

    const onMouseLeave = () => {
      if (!alwaysActive) {
        isHovered = false;
      }
    };

    if (!alwaysActive) {
      parent.addEventListener('mouseenter', onMouseEnter);
      parent.addEventListener('mouseleave', onMouseLeave);
    }

    const loop = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Lerp độ tỏa mượt mà
      const target = isHovered || alwaysActive ? 1 : 0;
      progress += (target - progress) * 0.12;

      if (progress > 0.01) {
        const w = canvas.width;
        const h = canvas.height;
        // Bán kính tỏa từ góc phải dưới cùng
        const maxRadius = Math.max(w, h) * (alwaysActive ? 0.85 : 0.75) * progress;

        const cols = Math.ceil(w / TOTAL_CELL);
        const rows = Math.ceil(h / TOTAL_CELL);

        for (let col = 0; col < cols; col++) {
          for (let row = 0; row < rows; row++) {
            const cellX = col * TOTAL_CELL;
            const cellY = row * TOTAL_CELL;

            // Khoảng cách từ tâm ô đến góc phải dưới (w, h)
            const distFromCorner = Math.hypot(
              w - (cellX + CELL_SIZE / 2),
              h - (cellY + CELL_SIZE / 2)
            );

            // Thêm nhiễu ngẫu nhiên để viền pixel tỏa ra dạng rải rác hữu cơ
            const seed = Math.sin(col * 31.7 + row * 83.9) * 43758.5453;
            const rand = seed - Math.floor(seed);
            const organicDist = distFromCorner + (rand - 0.5) * 36;

            if (organicDist < maxRadius) {
              // Hiệu ứng sóng nhấp nháy chuyển sắc xám đậm nhạt từ góc
              const wave = Math.sin(timestamp * 0.004 - distFromCorner * 0.035 + rand * 4);
              const shimmer = 0.65 + 0.35 * wave;

              // Đậm nhất ở góc phải dưới và mờ dần ra phía trên / bên trái
              const distFactor = Math.pow(Math.max(0, 1 - organicDist / maxRadius), 1.5);
              const alpha =
                (0.015 + (alwaysActive ? 0.12 : 0.14) * distFactor * shimmer) * progress;

              if (alpha > 0.004) {
                ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
                ctx.fillRect(cellX, cellY, CELL_SIZE, CELL_SIZE);
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (!alwaysActive) {
        parent.removeEventListener('mouseenter', onMouseEnter);
        parent.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, [alwaysActive]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 w-full h-full rounded-2xl select-none"
    />
  );
}
