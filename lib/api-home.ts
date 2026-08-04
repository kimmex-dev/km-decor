import { brands as fallbackBrands, products as fallbackProducts, projects as fallbackProjects, services as fallbackServices } from "@/lib/homepage-data";

export type HomeBrandItem = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  logoUrl: string | null;
  href: string;
};

export async function getHomepageContent() {
  return {
    products: fallbackProducts.slice(0, 4),
    services: fallbackServices,
    projects: fallbackProjects,
    brands: fallbackBrands.map((brand) => ({
      id: brand.id,
      name: brand.name,
      slug: brand.id,
      description: null,
      logoUrl: null,
      href: brand.href,
    })),
  };
}
