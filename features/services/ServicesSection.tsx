'use client';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: '01',
    title: 'Website Development',
    category: 'Landing Pages & Corporate Sites',
    description:
      'Building fast, responsive, and SEO-optimized websites tailored to represent your business cleanly across all devices.',
  },
  {
    id: '02',
    title: 'Web Application & Dashboard',
    category: 'Management Tools & SaaS',
    description:
      'Custom admin panels, internal management tools, and complex web software tailored to your specific business workflows.',
  },
  {
    id: '03',
    title: 'Figma to Code',
    category: 'Pixel-Perfect Implementation',
    description:
      'Converting modern Figma UI designs into clean, production-ready React / Next.js code with smooth interactions.',
  },
  {
    id: '04',
    title: 'Maintenance & Optimization',
    category: 'Performance & Feature Updates',
    description:
      'Fixing UI/logic bugs, boosting page loading speeds, and adding new functionality or API integrations to existing sites.',
  },
];

export function ServicesSection() {
  return (
    <section className="px-6 md:px-12 py-16 relative flex min-h-screen w-full items-center justify-center bg-background">
      <div className="w-full flex flex-col justify-center relative">
        
        {/* Header My services */}
        <div className="flex justify-end w-full mb-12">
          <h1 className="text-4xl font-bold text-text-black/50 italic text-right">
            My services
          </h1>
        </div>

        {/* Timeline Horizontal Layout */}
        <div className="relative w-full">
          {/* Line nối ngang */}
          <div className="hidden md:block absolute top-[7px] left-0 right-0 h-[1px] bg-text-black/15 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10 w-full">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="group cursor-pointer flex flex-col w-full transition-transform duration-300 ease-out hover:-translate-y-1.5"
              >
                {/* Point trên Timeline */}
                <div className="hidden md:flex items-center mb-6 z-50">
                  <div className="w-3 h-3 rounded-full bg-text-black/30 group-hover:bg-text-accent group-hover:ring-4 group-hover:ring-text-accent/20 group-hover:scale-125 transition-all duration-300" />
                </div>

                {/* ID & Title */}
                <div className="flex flex-col gap-1 mb-3">
                  <h3 className="text-xl font-bold text-text-black leading-snug group-hover:text-text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Category */}
                <span className="text-xs text-text-black/60 font-medium mb-3">
                  {service.category}
                </span>

                {/* Description */}
                <p className="text-sm text-text-black/70 leading-relaxed mb-4 w-full">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}