import { FeaturedProjectsSection } from "@/components/home/featured-projects-section";
import { HeroSection } from "@/components/home/hero-section";
import { InquirySection } from "@/components/home/inquiry-section";
import { VisionMissionSection } from "@/components/home/vision-mission-section";
import { ServicesOverviewSection } from "@/components/home/services-overview-section";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { StructuredData } from "@/components/structured-data";
import { getHomepageContent } from "@/lib/api-home";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const revalidate = 60;

export default async function Home() {
  const home = await getHomepageContent();

  return (
    <main className="page-shell pb-16 lg:pb-0">
      <StructuredData
        data={{
          type: "organization",
          name: "KMD Decor",
          url: "https://kmdecor.com",
          logo: "https://kmdecor.com/kmd-logo.png",
          description: "KMD Decor — Commercial Fit-Out & Interior Decoration Services in Phnom Penh, Cambodia.",
          address: {
            "@type": "PostalAddress",
            addressCountry: "KH",
            addressLocality: "Phnom Penh",
          },
        }}
      />
      <SiteHeader />
      <HeroSection />
      <ServicesOverviewSection services={home.services} />
      <FeaturedProjectsSection projects={home.projects} />
      <VisionMissionSection />
      <InquirySection />
      <SiteFooter />
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-neutral-800 bg-neutral-950/95 p-3 backdrop-blur-md lg:hidden">
        <Link className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-brand-accent-hover shadow-lg" href="#contact">
          Request a quote
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </main>
  );
}
