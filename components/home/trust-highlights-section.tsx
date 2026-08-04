import { companyPartnershipStrengths } from "@/lib/homepage-data";

export function TrustHighlightsSection() {
  return (
    <section className="bg-white py-20 border-b border-neutral-100">
      <div className="content-shell">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-2">
          WHY PARTNER WITH KMD DÉCOR
        </p>
        <h2 className="font-serif text-3xl font-normal text-black leading-tight mb-12">
          Our Partnership Advantages
        </h2>

        {/* 7 Official Partnership Strengths */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 border-t border-neutral-100 pt-8">
          {companyPartnershipStrengths.map((item) => (
            <article key={item.title} className="flex flex-col justify-between border-b border-neutral-100 pb-6">
              <div>
                <span className="text-xs font-mono text-[#991b1b] font-semibold block mb-2">{item.num}</span>
                <h3 className="font-serif text-lg font-normal text-black leading-snug">{item.title}</h3>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
