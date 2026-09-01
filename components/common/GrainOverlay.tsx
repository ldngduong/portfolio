'use client';

import { useEffect, useRef } from 'react';

export function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const spotlight = spotlightRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Offscreen tile buffer
    const TILE_SIZE = 128;
    const GRAIN_SCALE = 2; // Hạt to rõ nét
    const patternCanvas = document.createElement('canvas');
    patternCanvas.width = TILE_SIZE;
    patternCanvas.height = TILE_SIZE;
    const patternCtx = patternCanvas.getContext('2d');
    if (!patternCtx) return;

    const imgData = patternCtx.createImageData(TILE_SIZE, TILE_SIZE);
    const data = imgData.data;

    let animationFrameId: number;
    let frameCount = 0;

    // Mouse tracking with smooth lerp physics
    let mouseX = -1000;
    let mouseY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let isInside = false;
    const CLEAR_RADIUS = 120; // Bán kính vùng sáng trắng không có nhiễu

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isInside) {
        currentX = mouseX;
        currentY = mouseY;
        isInside = true;
      }
    };

    const onMouseLeave = () => {
      isInside = false;
      if (spotlight) {
        spotlight.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    const loop = () => {
      frameCount++;

      // Smooth cursor follow lerp
      if (isInside) {
        currentX += (mouseX - currentX) * 0.16;
        currentY += (mouseY - currentY) * 0.16;

        if (spotlight) {
          spotlight.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
          spotlight.style.opacity = '1';
        }
      }

      // Render grain jitter at ~10-12fps
      if (frameCount % 6 === 0) {
        for (let y = 0; y < TILE_SIZE; y += GRAIN_SCALE) {
          for (let x = 0; x < TILE_SIZE; x += GRAIN_SCALE) {
            const shade = (Math.random() * 255) | 0;
            for (let dy = 0; dy < GRAIN_SCALE; dy++) {
              for (let dx = 0; dx < GRAIN_SCALE; dx++) {
                const i = ((y + dy) * TILE_SIZE + (x + dx)) * 4;
                data[i] = shade;
                data[i + 1] = shade;
                data[i + 2] = shade;
                data[i + 3] = 32;
              }
            }
          }
        }
        patternCtx.putImageData(imgData, 0, 0);
      }

      // Draw background grain across the viewport
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pattern = ctx.createPattern(patternCanvas, 'repeat');
      if (pattern) {
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Xóa sạch 100% hạt nhiễu trong hình tròn quanh con trỏ chuột
      if (isInside && currentX > -300 && currentY > -300) {
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        const grad = ctx.createRadialGradient(
          currentX,
          currentY,
          0,
          currentX,
          currentY,
          CLEAR_RADIUS
        );
        grad.addColorStop(0, 'rgba(0, 0, 0, 1)');
        grad.addColorStop(0.65, 'rgba(0, 0, 0, 1)');
        grad.addColorStop(0.9, 'rgba(0, 0, 0, 0.4)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(currentX, currentY, CLEAR_RADIUS, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Vầng sáng nền trắng (#FFFFFF) nằm phía sau các phần tử (Behind Content) */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-0 rounded-full opacity-0 transition-opacity duration-200 select-none will-change-transform bg-white shadow-[0_0_60px_30px_#FFFFFF]"
        style={{
          width: '160px',
          height: '160px',
        }}
      />

      {/* Lớp hạt nhiễu toàn màn hình với lỗ tròn trong suốt theo chuột */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[60] w-full h-full opacity-60 mix-blend-multiply select-none"
      />
    </>
  );
}
