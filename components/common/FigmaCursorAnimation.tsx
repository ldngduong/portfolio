import React from 'react';
import { cn } from '@/lib/utils';

export interface FigmaCursorAnimationProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  /** Màu chủ đạo của selection box, handle và con trỏ chuột (mặc định: #757575) */
  accentColor?: string;
  /** Màu chữ chính (mặc định: currentColor thích ứng theo dark/light mode) */
  textColor?: string;
  /** Tên hiển thị trên badge của cursor (mặc định: "Duong Le") */
  badgeName?: string;
  /**
   * Tùy chỉnh các dòng chữ hiển thị.
   * Có thể truyền mảng: text={['Have an idea?', `Let's build something`]}
   * Hoặc chuỗi: text={"Have an idea?\nLet's build something"}
   */
  text?: string | string[];
  /** Alias cho text dạng mảng */
  lines?: string[];
}

const DEFAULT_LINES = ['HAVE AN IDEA?', `LET'S BUILD SOMETHING`];

export function FigmaCursorAnimation({
  className,
  accentColor = '#757575',
  textColor,
  badgeName = 'Duong Le',
  text,
  lines,
  ...props
}: FigmaCursorAnimationProps) {
  const animId = React.useId().replace(/:/g, '');
  const animName = `figmaCursorMovement_${animId}`;

  const activeLines = React.useMemo(() => {
    if (lines && lines.length > 0) return lines;
    if (text) {
      if (Array.isArray(text)) return text;
      return text.split('\n').map((s) => s.trim()).filter(Boolean);
    }
    return DEFAULT_LINES;
  }, [lines, text]);

  const maxChars = React.useMemo(() => {
    return Math.max(...activeLines.map((l) => l.length), 1);
  }, [activeLines]);

  // Cân chỉnh kích thước font và khoảng cách dòng gọn gàng
  const fontSize = maxChars > 16 ? 38 : 42;
  const lineStep = maxChars > 16 ? 44 : 48; // Giảm khoảng cách dòng sát và gọn

  // Padding bên trong khung (từ viền khung vào chữ)
  const padLeft = 36;
  const padTop = 24;
  const padBottom = 24;

  const textCapHeight = Math.round(fontSize * 0.72);
  const textHeight = textCapHeight + (activeLines.length - 1) * lineStep;

  // Khung kéo full sát 100% mép viền ngoài (viewBox) - KHÔNG CÓ KHOẢNG CÁCH TỪ MARGIN/VIỀN VÀO KHUNG
  const viewBoxW = 600;
  const boxX = 5;
  const boxY = 5;
  const boxRight = viewBoxW - 5; // 595
  const boxBottom = boxY + padTop + textHeight + padBottom;
  const viewBoxH = boxBottom + 5;

  // Điểm đặt con trỏ chuột ngay tại trọng tâm khối chữ
  const baseCursorX = Math.round(boxX + padLeft + 220);
  const baseCursorY = Math.round(boxY + padTop + textHeight * 0.5);

  const badgeW = Math.max((badgeName || 'Duong Le').length * 8 + 18, 72);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox={`0 0 ${viewBoxW} ${viewBoxH}`}
      className={cn('w-full h-auto overflow-visible select-none text-neutral-900 dark:text-[#F9F9F9]', className)}
      {...props}
    >
      <defs>
        <style>{`
          @keyframes ${animName} {
            0% {
              opacity: 0;
              transform: translate3d(100px, 5px, 0) scale(1);
            }
            30% {
              opacity: 1;
              transform: translate3d(40px, 3px, 0) scale(1);
            }
            60% {
              opacity: 1;
              transform: translate3d(0, 0, 0) scale(1);
            }
            /* click vào chữ */
            65% {
              opacity: 1;
              transform: translate3d(0, 0, 0) scale(0.95);
            }
            70% {
              opacity: 1;
              transform: translate3d(0, 0, 0) scale(1);
            }
            /* sau khi click, cursor giữ vị trí ngay trên chữ */
            100% {
              opacity: 1;
              transform: translate3d(40px, -4px, 0) scale(1);
            }
          }
        `}</style>
      </defs>

      <g id="Frame" className="cursor-pointer">
        <g id="box-figma">
          {/* Main Typography Text - Đệm từ viền khung vào chữ 36px, khoảng cách dòng gọn */}
          <g id="text" className="cursor-pointer transition-colors duration-200 select-none">
            {activeLines.map((line, idx) => (
              <text
                key={idx}
                x={boxX + padLeft}
                y={boxY + padTop + textCapHeight + idx * lineStep}
                fontSize={fontSize}
                fontWeight="900"
                letterSpacing="-0.02em"
                fill={textColor ?? 'currentColor'}
                className="font-black uppercase tracking-tight select-none"
                style={{ fontFamily: 'var(--font-heading), var(--font-roboto), system-ui, sans-serif' }}
              >
                {line}
              </text>
            ))}
          </g>

          {/* Figma Selection Box & Handles - Khung mỏng 1px, luôn hiển thị */}
          <g id="box" className="cursor-pointer">
            {/* Viền hộp chữ nhật mỏng 1px */}
            <path
              strokeWidth={1}
              stroke={accentColor}
              fillOpacity={0.04}
              fill={accentColor}
              d={`M${boxRight} ${boxY}H${boxX}V${boxBottom}H${boxRight}V${boxY}Z`}
              id="figny9-box"
            />
            {/* 4 điểm neo góc (Handles) - 8x8px mỏng 1px, luôn hiển thị */}
            <rect
              x={boxX - 4}
              y={boxY - 4}
              width={8}
              height={8}
              strokeWidth={1}
              stroke={accentColor}
              fill="white"
              id="figny9-adjust-1"
            />
            <rect
              x={boxRight - 4}
              y={boxY - 4}
              width={8}
              height={8}
              strokeWidth={1}
              stroke={accentColor}
              fill="white"
              id="figny9-adjust-2"
            />
            <rect
              x={boxX - 4}
              y={boxBottom - 4}
              width={8}
              height={8}
              strokeWidth={1}
              stroke={accentColor}
              fill="white"
              id="figny9-adjust-3"
            />
            <rect
              x={boxRight - 4}
              y={boxBottom - 4}
              width={8}
              height={8}
              strokeWidth={1}
              stroke={accentColor}
              fill="white"
              id="figny9-adjust-4"
            />
          </g>

          {/* Figma Multiplayer Cursor & User Badge - Di chuyển hoàn toàn trên các dòng chữ */}
          <g transform={`translate(${baseCursorX}, ${baseCursorY})`}>
            <g
              id="cursor"
              style={{ animation: `${animName} 5s ease infinite alternate` }}
              className="cursor-pointer overflow-visible [transform-origin:center_center] [transform-box:fill-box]"
            >
              {/* Con trỏ chuột với đầu mũi tên chuẩn xác tại (0, 0) */}
              <path
                strokeWidth={1.5}
                stroke="white"
                fill={accentColor}
                d="M5.383 26L0 0L23 14L11.745 16.5L5.383 26Z"
                id="Vector 273"
              />
              {/* Khung tên badge ôm sát theo tên người dùng */}
              <rect
                x={20}
                y={24}
                width={badgeW}
                height={26}
                rx={4}
                fill={accentColor}
                id="Rectangle 786"
              />
              {/* Nhãn tên badge */}
              <text
                x={20 + badgeW / 2}
                y={24 + 13}
                fill="white"
                fontSize={12}
                fontWeight="500"
                textAnchor="middle"
                dominantBaseline="central"
                style={{ fontFamily: 'var(--font-heading), var(--font-roboto), system-ui, sans-serif' }}
              >
                {badgeName}
              </text>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}


export default FigmaCursorAnimation;
