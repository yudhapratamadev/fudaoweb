import { Link } from "react-router-dom";
import type { Collection } from "@/lib/types";

export default function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link
      to={`/collections/${collection.slug}`}
      className="group block overflow-hidden rounded-3xl border border-rose/15 bg-white transition hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(201,125,140,.22)]"
    >
      <div
        className="relative aspect-square overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F8E8EC, #F2C4CE)" }}
      >
        {collection.image_url ? (
          <img
            src={collection.image_url}
            alt={collection.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-6xl">
            🎀
          </div>
        )}
        {collection.category && (
          <span className="absolute right-4 top-4 rounded-full bg-rose px-3 py-1 text-[10px] font-medium uppercase tracking-[0.06em] text-white">
            {collection.category}
          </span>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bark/15 via-transparent to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold text-bark">
          {collection.title}
        </h3>
        {collection.description && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-rose">
            {collection.description}
          </p>
        )}
        {collection.price != null && (
          <div className="mt-3 font-serif text-lg font-semibold text-rose">
            Rp {Number(collection.price).toLocaleString("id-ID")}
          </div>
        )}
      </div>
    </Link>
  );
}
