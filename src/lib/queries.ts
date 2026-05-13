import { supabase, TENANT_ID } from "./supabase";
import type { Collection, Review } from "./types";

export async function fetchCollections(): Promise<Collection[]> {
  const { data, error } = await supabase
    .from("collections")
    .select("*")
    .eq("tenant_id", TENANT_ID)
    .eq("status", "published")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []) as Collection[];
}

export async function fetchCollectionBySlug(
  slug: string
): Promise<Collection | null> {
  const { data, error } = await supabase
    .from("collections")
    .select("*")
    .eq("tenant_id", TENANT_ID)
    .eq("status", "published")
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw error;
  return data as Collection | null;
}

export async function fetchReviews(): Promise<Review[]> {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("tenant_id", TENANT_ID)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Review[];
}
