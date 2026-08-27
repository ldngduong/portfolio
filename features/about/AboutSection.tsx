export function AboutSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-background p-6 md:p-12">
      <div className="max-w-5xl w-full">
        
        {/* Giữ nguyên style About Me ban đầu */}
        <p className="text-text-black/50 font-medium text-xl mb-4">
          About Me
        </p>

        {/* Heading: Tùy chỉnh font-size chuẩn cho Tablet dọc */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter text-text-black leading-tight">
          
          {/* 
            CHÌA KHÓA Ở ĐÂY:
            - Mobile & Tablet dọc (<1024px): hidden (Ẩn hoàn toàn thẻ đệm)
            - Desktop (>=1024px): lg:inline-block lg:w-36 (Mới bật đệm dòng)
          */}
          <span className="hidden lg:inline-block lg:w-36" />

          "I build scalable web applications with clean architecture —{" "}
          <span className="text-text-accent">
            bridging seamless frontend experiences with high-performance backends."
          </span>
        </h2>

        {/* Đoạn mô tả phụ */}
        <div className="mt-8 md:mt-10 lg:ml-auto max-w-md text-sm md:text-base text-text-black/70 font-normal leading-relaxed">
          <p>
            Crafting modern full-stack web applications with Next.js and NestJS. Driven by clean code, smooth UX, and scalable architecture.
          </p>
        </div>

      </div>
    </section>
  );
}