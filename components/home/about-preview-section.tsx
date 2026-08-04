import { companyVision, companyMission } from "@/lib/homepage-data";

export function AboutPreviewSection() {
  const B2BPartners = [
    { num: "01", title: "Companies & Developers", desc: "Commercial & residential towers" },
    { num: "02", title: "Retailers & Showrooms", desc: "Shops, showrooms & malls" },
    { num: "03", title: "Restaurants & Hospitality", desc: "Dining spaces & cafes" },
    { num: "04", title: "Hotels & Resorts", desc: "Bedrooms, lobbies & lounges" },
    { num: "05", title: "Offices & Construction", desc: "Corporate headquarters & fit-outs" },
  ];

  return (
    <section className="bg-white py-20 border-b border-neutral-100" id="about">
      <div className="content-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-3">
            ABOUT KMD DECOR
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-black font-normal leading-tight tracking-tight">
            Commercial Decoration & Fit-Out Specialist
          </h2>
          <p className="mt-4 text-xs text-neutral-600 leading-relaxed">
            KMD Decor is a professional decoration and fit-out company specializing in complete interior solutions for business and commercial sectors in Phnom Penh, Cambodia. We partner with companies, developers, retailers, restaurants, hotels, offices, and construction firms.
          </p>

          {/* Official Vision & Mission */}
          <div className="mt-8 grid gap-6 border-t border-neutral-100 pt-6">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#991b1b] block mb-1">
                OUR VISION
              </span>
              <p className="font-serif italic text-base text-neutral-800 leading-relaxed">
                &ldquo;{companyVision}&rdquo;
              </p>
            </div>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#991b1b] block mb-1">
                OUR MISSION
              </span>
              <p className="font-serif italic text-base text-neutral-800 leading-relaxed">
                &ldquo;{companyMission}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Target B2B Sector List */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-3">
            SECTORS WE SERVE
          </p>
          <div className="grid gap-0 border-t border-neutral-100">
            {B2BPartners.map((item) => (
              <div key={item.title} className="flex items-center justify-between border-b border-neutral-100 py-4 transition hover:pl-2">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-neutral-300">{item.num}</span>
                  <span className="font-serif text-base font-normal text-black">{item.title}</span>
                </div>
                <span className="text-xs text-neutral-400">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
