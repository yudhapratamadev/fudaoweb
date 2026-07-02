import type { Review } from "@/lib/types";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-3xl border border-rose/15 bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(201,125,140,.15)] sm:p-7">
      <div className="mb-3 tracking-[0.1em] text-rose">
        {"★".repeat(Math.max(0, Math.min(5, review.rating)))}
      </div>
      <p className="mb-5 font-serif text-base italic leading-relaxed text-bark sm:text-lg">
        "{review.text}"
      </p>
      <div className="flex items-center gap-3">
        {review.avatar_url ? (
          <img
            src={review.avatar_url}
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full text-lg"
            style={{ background: "linear-gradient(135deg, var(--color-blush), var(--color-rose))" }}
          >
            😊
          </div>
        )}
        <div>
          <div className="text-sm font-medium text-bark">{review.customer_name}</div>
          <div className="text-xs text-muted-rose">{review.position || "Pelanggan"}</div>
        </div>
      </div>
    </div>
  );
}
