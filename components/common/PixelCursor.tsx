'use client';

import { useEffect, useRef } from 'react';

interface TrailPixel {
  gx: number;
  gy: number;
  maxAlpha: number;
  life: number;
  decay: number;
  seed: number;
}

export function PixelCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const CELL_SIZE = 12; // Kích thước ô pixel vuông
    const GAP = 2; // Khoảng cách giữa các ô
    const TOTAL_CELL = CELL_SIZE + GAP;

    const trail: TrailPixel[] = [];
    let lastGx: number | null = null;
    let lastGy: number | null = null;
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const addPixel = (gx: number, gy: number) => {
      // Tránh duplicate pixel cùng toạ độ đang tồn tại ở đầu đuôi
      const existing = trail.find((p) => p.gx === gx && p.gy === gy);
      if (existing) {
        existing.life = 1.0;
        return;
      }

      const seed = Math.random();
      // Độ đậm nhạt ngẫu nhiên giữa các hạt (từ xám rất nhạt đến xám vừa)
      const maxAlpha = 0.05 + Math.random() * 0.12;
      // Tốc độ tan biến tự nhiên
      const decay = 0.018 + Math.random() * 0.015;

      trail.push({
        gx,
        gy,
        maxAlpha,
        life: 1.0,
        decay,
        seed,
      });

      // Thỉnh thoảng rơi ra 1-2 hạt pixel lân cận ngẫu nhiên tạo độ rải rác kiểu bậc thang
      if (Math.random() < 0.35) {
        const offsetDx = Math.random() < 0.5 ? -1 : 1;
        trail.push({
          gx: gx + offsetDx,
          gy,
          maxAlpha: maxAlpha * 0.6,
          life: 0.8,
          decay: decay * 1.3,
          seed: Math.random(),
        });
      }
    };

    // Tạo đường đi pixel theo dạng bước gãy bậc thang (Manhattan Grid Step: --| | ---)
    const connectGridPoints = (x0: number, y0: number, x1: number, y1: number) => {
      let curX = x0;
      let curY = y0;

      // Bước theo chiều ngang trước
      while (curX !== x1) {
        curX += curX < x1 ? 1 : -1;
        addPixel(curX, curY);
      }
      // Bước theo chiều dọc sau (tạo góc vuông gãy gọn)
      while (curY !== y1) {
        curY += curY < y1 ? 1 : -1;
        addPixel(curX, curY);
      }
    };

    const handlePointerMove = (clientX: number, clientY: number) => {
      const gx = Math.floor(clientX / TOTAL_CELL);
      const gy = Math.floor(clientY / TOTAL_CELL);

      if (lastGx === null || lastGy === null) {
        addPixel(gx, gy);
        lastGx = gx;
        lastGy = gy;
        return;
      }

      if (lastGx !== gx || lastGy !== gy) {
        connectGridPoints(lastGx, lastGy, gx, gy);
        lastGx = gx;
        lastGy = gy;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      handlePointerMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onPointerLeave = () => {
      lastGx = null;
      lastGy = null;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    document.addEventListener('mouseleave', onPointerLeave);
    document.addEventListener('touchend', onPointerLeave);

    const loop = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        p.life -= p.decay;

        if (p.life <= 0) {
          trail.splice(i, 1);
          continue;
        }

        // Nhấp nháy nhẹ độ đậm nhạt ngẫu nhiên khi đang trôi theo đuôi
        const shimmer = 0.75 + 0.25 * Math.sin(timestamp * 0.008 + p.seed * 20);
        const alpha = p.maxAlpha * p.life * shimmer;

        if (alpha > 0.002) {
          ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
          ctx.fillRect(
            p.gx * TOTAL_CELL,
            p.gy * TOTAL_CELL,
            CELL_SIZE,
            CELL_SIZE
          );
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('mouseleave', onPointerLeave);
      document.removeEventListener('touchend', onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 w-full h-full select-none"
    />
  );
}
