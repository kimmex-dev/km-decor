import { ContactRequestForm } from "@/components/contact/contact-request-form";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { getCatalogProducts } from "@/lib/api-catalog";
import { getPortfolioProjects } from "@/lib/api-portfolio";
import { getCatalogServices } from "@/lib/api-services";

export const metadata = {
  title: "Contact — KMD Decor",
  description: "Get in touch with KMD Decor for material pricing, BOQ quotes, ceiling installation, and interior fit-out services in Phnom Penh, Cambodia.",
};

export default async function ContactPage() {
  const products = await getCatalogProducts();
  const portfolioProjects = await getPortfolioProjects();
  const services = await getCatalogServices();

  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-brand-accent selection:text-white">
      <SiteHeader />

      <section className="mx-auto max-w-screen-xl px-4 py-10 md:px-8 md:py-14" id="request-form">
        <div className="mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-950 tracking-tight">
            Contact & Inquiries
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
            Phone: <a href="tel:+85516927683" className="font-mono text-neutral-900 font-medium hover:underline">+855 16 927 683</a> &nbsp;·&nbsp; Telegram: <a href="https://t.me/kmddecor" target="_blank" rel="noopener noreferrer" className="font-mono text-neutral-900 font-medium hover:underline">@kmddecor</a> &nbsp;·&nbsp; #54, St. 590, Toul Kork, Phnom Penh
          </p>
        </div>

        <ContactRequestForm portfolioProjects={portfolioProjects} products={products} services={services} />
      </section>

      <SiteFooter />
    </main>
  );
}
