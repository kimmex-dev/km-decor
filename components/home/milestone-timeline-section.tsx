import { Calendar, CheckCircle, Trophy, Building2, ShieldCheck, Award } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const milestones: Milestone[] = [
  {
    year: "2012",
    title: "Company Founded in Phnom Penh",
    description: "KMD Decor established as a specialized commercial fit-out and architectural ceiling/partition contractor.",
    icon: Building2,
    tag: "Founding",
  },
  {
    year: "2016",
    title: "Expansion to Full General Contracting",
    description: "Scaled operations to deliver end-to-end commercial interior construction, hotel fit-outs, and office developments.",
    icon: Trophy,
    tag: "Growth",
  },
  {
    year: "2020",
    title: "Green Building & Sustainable Materials",
    description: "Adopted eco-friendly plasterboard, high-performance acoustic insulation, and low-VOC paints across all projects.",
    icon: ShieldCheck,
    tag: "Innovation",
  },
  {
    year: "2024",
    title: "250+ Commercial Projects Milestone",
    description: "Surpassed 250 completed commercial developments with a 100% safety record and on-time delivery rate.",
    icon: Award,
    tag: "Excellence",
  },
];

export function MilestoneTimelineSection() {
  return (
    <section id="milestones" className="bg-neutral-900 text-white py-20 lg:py-28 overflow-hidden">
      <div className="content-shell">
        <div className="max-w-3xl mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-3">
            OUR JOURNEY & TRAJECTORY
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
            A Legacy of Engineering Precision & Commercial Design
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Over a decade of shape-defining interior architecture, high-efficiency partition engineering, and reliable commercial project delivery across Cambodia.
          </p>
        </div>

        {/* Milestone Timeline Grid */}
        <div className="relative border-l border-neutral-800 ml-4 sm:ml-6 md:ml-0 md:border-l-0 md:grid md:grid-cols-4 md:gap-8">
          {milestones.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={item.year} className="relative pl-8 md:pl-0 mb-12 md:mb-0 group">
                {/* Mobile Bullet Dot / Desktop Top Border Line */}
                <div className="absolute -left-[17px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-neutral-900 bg-[#991b1b] md:static md:mb-6 md:h-1 md:w-full md:rounded-none md:border-0 md:bg-neutral-800 md:group-hover:bg-[#991b1b] transition-colors" />

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-serif font-bold text-white tracking-wider">
                    {item.year}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">
                    {item.tag}
                  </span>
                </div>

                <div className="flex items-start gap-2.5 mb-2">
                  <IconComponent className="h-5 w-5 text-[#991b1b] shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-base text-white leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
