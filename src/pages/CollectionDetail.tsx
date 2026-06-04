import { motion } from "motion/react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchCollectionBySlug } from "@/lib/queries";
import { WHATSAPP_LINK } from "@/constants";

export default function CollectionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { data: c, isLoading, isError } = useQuery({
    queryKey: ["collection", slug],
    queryFn: () => fetchCollectionBySlug(slug!),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="px-[8vw] py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div className="aspect-square animate-pulse rounded-[2.5rem] bg-blush/30" />
          <div className="flex flex-col justify-center gap-4">
            <div className="h-4 w-24 animate-pulse rounded-full bg-blush/40" />
            <div className="h-12 w-3/4 animate-pulse rounded-xl bg-blush/30" />
            <div className="h-8 w-32 animate-pulse rounded-lg bg-blush/20" />
            <div className="h-24 w-full animate-pulse rounded-xl bg-blush/20" />
          </div>
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="px-6 py-32 text-center">
        <h1 className="font-serif text-3xl text-bark">Gagal memuat koleksi</h1>
        <p className="mt-2 text-muted-rose">Coba refresh halaman.</p>
        <Link to="/collections" className="mt-6 inline-flex items-center gap-2 text-rose hover:underline">
          <ArrowLeft size={16} /> Kembali ke Koleksi
        </Link>
      </div>
    );
  }
  if (!c) {
    return (
      <div className="px-6 py-32 text-center">
        <h1 className="font-serif text-3xl text-bark">Koleksi tidak ditemukan</h1>
        <Link
          to="/collections"
          className="mt-6 inline-flex items-center gap-2 text-rose hover:underline"
        >
          <ArrowLeft size={16} /> Kembali ke Koleksi
        </Link>
      </div>
    );
  }

  return (
    <div className="px-[8vw] py-20">
      <Link
        to="/collections"
        className="mb-10 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.08em] text-muted-rose transition hover:text-rose"
      >
        <ArrowLeft size={14} /> Kembali ke Koleksi
      </Link>

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="aspect-square overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_rgba(201,125,140,0.25)]"
          style={{ background: "linear-gradient(135deg, #F8E8EC, #F2C4CE)" }}
        >
          {c.image_url ? (
            <img src={c.image_url} alt={c.title} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-8xl">🎀</div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          {c.category && (
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-rose">
              {c.category}
            </span>
          )}
          <h1 className="mt-3 font-serif text-5xl font-light leading-[1.1] text-bark lg:text-6xl">
            {c.title}
          </h1>
          {c.price != null && (
            <div className="mt-6 font-serif text-3xl font-semibold text-rose">
              Rp {Number(c.price).toLocaleString("id-ID")}
            </div>
          )}
          {c.description && (
            <p className="mt-6 text-base leading-[1.8] text-muted-rose">{c.description}</p>
          )}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-rose px-8 py-3.5 text-sm font-medium text-white shadow-[0_8px_24px_rgba(201,125,140,0.35)] transition hover:-translate-y-0.5 hover:bg-warm"
          >
            <MessageCircle size={18} /> Pesan via WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
}
