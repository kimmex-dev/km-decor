import { fetchJson } from "@/lib/api-client";

type ApiBrand = {
  id: string;
  name: string;
  name_kh?: string | null;
  slug: string;
  description?: string | null;
  logo_url?: string | null;
  website_url?: string | null;
  country_of_origin?: string | null;
  is_featured: boolean;
  product_count?: number;
};

type ApiCategory = {
  id: string;
  name: string;
  name_kh?: string | null;
  slug: string;
  description?: string | null;
  type: string;
  icon?: string | null;
  image_url?: string | null;
  is_featured: boolean;
  product_count?: number;
};

type SearchResult = {
  id: string;
  name: string;
  slug: string;
  type: "product" | "service" | "category" | "brand";
  image_url?: string | null;
  logo_url?: string | null;
  short_description?: string | null;
  description?: string | null;
  sku?: string | null;
  price?: number;
  currency?: string;
  brand?: string | null;
  category?: string | null;
  category_type?: string | null;
  url?: string;
};

type SearchGroupResponse = {
  data: {
    products?: SearchResult[];
    services?: SearchResult[];
    categories?: SearchResult[];
    brands?: SearchResult[];
  };
  meta?: {
    query: string;
    total: number;
    limit_per_group: number;
  };
};

type ApiCollectionResponse<T> = {
  data: T[];
  meta?: {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
  };
};

export async function getCatalogBrands(): Promise<ApiBrand[]> {
  return [];
}

export function adaptBrand(brand: ApiBrand) {
  return {
    id: brand.id,
    name: brand.name,
    slug: brand.slug,
    description: brand.description,
    logoUrl: brand.logo_url ?? null,
    href: brand.website_url || `/products?brand=${encodeURIComponent(brand.slug)}`,
  };
}

export async function getCatalogCategories(): Promise<ApiCategory[]> {
  return [
    { id: "gypsum-board", name: "Gypsum Board", slug: "gypsum-board", description: "Ceiling and partition boards", type: "product", is_featured: true },
    { id: "cline-frame", name: "Cline & Partition Frame", slug: "cline-frame", description: "Galvanized steel ceiling systems", type: "product", is_featured: true },
    { id: "decor-materials", name: "Decor Materials", slug: "decor-materials", description: "MDF, WPC, plywood panels", type: "product", is_featured: true },
    { id: "sanitary-ware", name: "Sanitary Ware", slug: "sanitary-ware", description: "Fixtures and bathroom fittings", type: "product", is_featured: true },
  ];
}

export async function searchCatalog(query: string): Promise<SearchResult[]> {
  if (!query.trim()) return [];

  try {
    const response = await fetchJson<SearchGroupResponse>(`/search?q=${encodeURIComponent(query)}&limit=8`);
    return [
      ...(response.data.products ?? []),
      ...(response.data.services ?? []),
      ...(response.data.categories ?? []),
      ...(response.data.brands ?? []),
    ];
  } catch (error) {
    console.error("Failed to search catalog:", error);
    return [];
  }
}

export type { ApiBrand, ApiCategory, SearchResult };
