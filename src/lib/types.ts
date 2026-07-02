export interface Collection {
  id: string;
  tenant_id: string;
  title: string;
  slug: string;
  description: string | null;
  content_html: string | null;
  product_url: string | null;
  image_url: string | null;
  price: number | null;
  category: string | null;
  sort_order: number;
  status: "draft" | "published";
}

export interface Review {
  id: string;
  tenant_id: string;
  customer_name: string;
  position: string | null;
  rating: number;
  text: string | null;
  avatar_url: string | null;
  created_at: string;
}
