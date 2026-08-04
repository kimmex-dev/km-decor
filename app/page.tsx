import { AboutPreviewSection } from "@/components/home/about-preview-section";
import { BrandsSection } from "@/components/home/brands-section";
import { FeaturedProjectsSection } from "@/components/home/featured-projects-section";
import { HeroSection } from "@/components/home/hero-section";
import { InquirySection } from "@/components/home/inquiry-section";
import { ProductShowcaseSection } from "@/components/home/product-showcase-section";
import { ServicesOverviewSection } from "@/components/home/services-overview-section";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { StructuredData } from "@/components/structured-data";
import { TrustHighlightsSection } from "@/components/home/trust-highlights-section";
import { getHomepageContent } from "@/lib/api-home";

export const revalidate = 60;

export default async function Home() {
  const home = await getHomepageContent();

  return (
    <main className="page-shell">
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
      <AboutPreviewSection />
      <ProductShowcaseSection products={home.products} />
      <TrustHighlightsSection />
      <BrandsSection brands={home.brands} />
      <InquirySection />
      <SiteFooter />
    </main>
  );
}
