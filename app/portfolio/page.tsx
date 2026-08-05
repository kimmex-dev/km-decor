import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { PortfolioMasonryGallery, type PortfolioProject } from "@/components/portfolio/portfolio-masonry-gallery";
import { getPortfolioProjects } from "@/lib/api-portfolio";
import { projectDetails } from "@/lib/project-data";
import {
  ArrowDown,
  ArrowRight,
  PhoneCall
} from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

function getDetail(projectId: string, fallbackScope: string, fallbackCaption: string) {
  return projectDetails[projectId] ?? {
    overview: fallbackCaption,
    setting: "Phnom Penh",
    focus: fallbackScope,
    goal: fallbackCaption,
    challenge: "",
    response: "",
    scope: [fallbackScope],
    outcomes: ["Certified material quality", "On-time execution", "Professional fit-out"],
    process: [],
    gallery: [],
    serviceIds: [],
    productIds: [],
  };
}

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects();

  const galleryProjects: PortfolioProject[] = projects.map((item) => {
    const detail = getDetail(item.id, item.scope, item.caption);
    const category: "Government" | "Commercial" | "FitOut" =
      item.projectType.toLowerCase().includes("government")
        ? "Government"
        : item.projectType.toLowerCase().includes("commercial") || item.projectType.toLowerCase().includes("tower")
          ? "Commercial"
          : "FitOut";

    return {
      id: item.id,
      title: item.title,
      location: item.location,
      scope: item.scope,
      projectType: item.projectType,
      category,
      caption: item.caption,
      imageUrl: item.imageUrl,
      highlights: detail.outcomes.length > 0 ? detail.outcomes : ["Certified material quality", "Professional installation"]
    };
  });

  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-brand-accent selection:text-white">
      <SiteHeader />

      {/* Pristine Light Header */}
      <section className="bg-neutral-50/80 border-b border-neutral-200 py-10 md:py-14">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent mb-2">
                KMD DÉCOR — PROVEN B2B TRACK RECORD
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-950 tracking-tight">
                Selected Portfolio & Projects
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-light max-w-xl leading-relaxed">
                Explore interior decoration, ceiling finishing, and wall partition projects delivered for government ministries, corporate headquarters, and commercial spaces in Phnom Penh.
              </p>
            </div>
            <div>
              <Link
                className="bg-neutral-900 text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-brand-accent transition duration-200 inline-flex items-center gap-1.5 shadow-sm whitespace-nowrap"
                href="/contact"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Masonry Gallery with Fullscreen Lightbox */}
      <div id="architectural-gallery">
        <PortfolioMasonryGallery initialProjects={galleryProjects} />
      </div>

      {/* Bottom Consultation Banner */}
      <section className="bg-brand-primary text-white py-16 lg:py-20">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 text-center max-w-3xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-accent">
            Start Your Fit-Out
          </span>
          <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl md:text-5xl text-white">
            Have a Project Requirement?
          </h2>
          <p className="mt-4 text-base text-neutral-200 font-light leading-relaxed">
            Send floor plans, ceiling drawings, or project references. Our technical engineering team in Phnom Penh will help shape a competitive fit-out quotation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              className="bg-brand-accent text-white px-8 py-4 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-brand-accent-hover transition-all duration-200 inline-flex items-center gap-2 shadow-lg w-full sm:w-auto justify-center"
              href="/contact"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              className="border border-white/30 text-white px-6 py-4 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-white/10 transition-all duration-200 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              href="tel:+85516927683"
            >
              <PhoneCall className="h-4 w-4 text-brand-accent" />
              <span>+855 16 927 683</span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
