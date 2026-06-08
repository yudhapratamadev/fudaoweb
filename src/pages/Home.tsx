import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle, ShoppingBag } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchCollections, fetchReviews } from "@/lib/queries";
import { BRAND, WHATSAPP_LINK, WHATSAPP_COLLAB, STATS, WHY, COLLAB } from "@/constants";
import CollectionCard from "@/components/CollectionCard";
import ReviewCard from "@/components/ReviewCard";

export default function Home() {
  const { data: collections = [], isLoading: collectionsLoading } = useQuery({
    queryKey: ["collections"],
    queryFn: fetchCollections,
  });
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchReviews,
  });

  const featured = collections.slice(0, 6);
  const featuredReviews = reviews.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 70% 50%, #F5DCE2 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 10% 90%, #EEC5CC44 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 grid items-center gap-0 lg:grid-cols-2 lg:min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="px-[8vw] pb-8 pt-10 lg:pb-24 lg:pt-0"
          >
            <span className="inline-block rounded-full border border-rose/30 bg-[#F5E6EA] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-rose">
              ✦ Aksesori Ikat Rambut Premium
            </span>
            <h1 className="mt-6 font-serif text-4xl font-light leading-[1.08] text-bark sm:text-5xl lg:text-[5rem]">
              Sentuhan <em className="italic text-rose">Cantik</em>
              <br />
              di Setiap
              <br />
              Gaya Rambutmu
            </h1>
            <p className="mt-6 max-w-md text-base leading-[1.75] text-muted-rose">
              Scrunchie handcrafted dengan bahan satin silk pilihan — lembut, kuat, dan
              penuh gaya. Tersedia untuk pembelian satuan, kado, hingga kebutuhan
              pernikahan & event.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3 text-sm font-medium text-white shadow-[0_8px_24px_rgba(201,125,140,0.35)] transition hover:-translate-y-0.5 hover:bg-warm hover:shadow-[0_14px_32px_rgba(201,125,140,0.45)]"
              >
                <MessageCircle size={17} />
                Pesan Sekarang
              </a>
              <a
                href={BRAND.shopee}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#EE4D2D] px-7 py-3 text-sm font-medium text-white shadow-[0_8px_24px_rgba(238,77,45,0.35)] transition hover:-translate-y-0.5 hover:bg-[#D9401E] hover:shadow-[0_14px_32px_rgba(238,77,45,0.45)]"
              >
                <ShoppingBag size={17} />
                Toko Shopee
              </a>
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-blush bg-transparent px-7 py-3 text-sm font-medium text-rose transition hover:-translate-y-0.5 hover:border-rose hover:bg-[#F5E6EA]"
              >
                Lihat Koleksi
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Stats — flow normal di mobile, abs di desktop */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-10 flex gap-8 whitespace-nowrap lg:hidden"
            >
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className="font-serif text-2xl font-semibold text-rose">{s.num}</span>
                  <span className="text-[11px] uppercase tracking-[0.06em] text-muted-rose">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="relative z-10 flex items-center justify-center px-[6vw] pb-16 pt-4 lg:pb-12 lg:pt-0"
          >
            <div
              className="animate-float-y pointer-events-none absolute right-[8%] top-[15%] h-[90px] w-[90px] rounded-full opacity-60"
              style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-blush))" }}
            />
            <div
              className="animate-float-y pointer-events-none absolute bottom-[25%] right-[3%] h-[50px] w-[50px] rounded-full opacity-60"
              style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-blush))", animationDelay: "2s" }}
            />
            <div
              className="animate-float-y pointer-events-none absolute left-[2%] top-[35%] h-[30px] w-[30px] rounded-full opacity-60"
              style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-blush))", animationDelay: "1s" }}
            />
            <div
              className="animate-morph relative flex aspect-[4/5] w-[clamp(220px,70vw,520px)] items-center justify-center text-[clamp(6rem,20vw,14rem)] shadow-[0_40px_80px_rgba(201,125,140,0.25),0_4px_16px_rgba(74,46,48,0.08)] sm:w-[clamp(260px,50vw,520px)] lg:w-[clamp(260px,38vw,520px)]"
              style={{ background: "linear-gradient(135deg, #F2C4CE 0%, #EEC5CC 40%, #E8A0B0 100%)" }}
            >
              <span className="relative z-10">🎀</span>
              <div
                className="pointer-events-none absolute"
                style={{ inset: "-20%", background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats desktop — absolute di atas section */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="hidden lg:flex absolute bottom-6 left-[8vw] z-10 gap-10 whitespace-nowrap"
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-0.5">
              <span className="font-serif text-2xl font-semibold text-rose">{s.num}</span>
              <span className="text-[11px] uppercase tracking-[0.06em] text-muted-rose">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* WHY US */}
      <section className="border-y border-rose/10 bg-ivory px-[8vw] py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-rose">
              Mengapa Fudao
            </p>
            <h2 className="font-serif text-4xl font-light leading-[1.15] text-bark lg:text-5xl">
              Kualitas yang <em className="italic text-rose">Bisa Kamu Rasakan</em>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-[1.8] text-muted-rose">
              Setiap produk kami dirancang dengan perhatian penuh terhadap detail —
              bahan ramah rambut, warna tahan lama, dan desain yang tak lekang waktu.
            </p>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {WHY.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-rose/15 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(201,125,140,0.18)]"
              >
                <span
                  className="absolute left-0 right-0 top-0 h-[3px] opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ background: "linear-gradient(90deg, var(--color-rose), var(--color-blush))" }}
                />
                <div className="mb-3 text-3xl">{w.icon}</div>
                <h3 className="mb-1 font-serif text-xl font-semibold text-bark">{w.title}</h3>
                <p className="text-sm leading-[1.7] text-muted-rose">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-[8vw] py-24 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-rose">Koleksi Kami</p>
        <h2 className="font-serif text-4xl font-light text-bark lg:text-5xl">
          Pilihan <em className="italic text-rose">Scrunchie</em> Terfavorit
        </h2>

        {collectionsLoading ? (
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1,2,3].map(i => (
              <div key={i} className="aspect-square animate-pulse rounded-3xl bg-blush/30" />
            ))}
          </div>
        ) : featured.length === 0 ? (
          <p className="mt-12 text-muted-rose">Belum ada koleksi.</p>
        ) : (
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((c) => (
              <CollectionCard key={c.id} collection={c} />
            ))}
          </div>
        )}

        <Link
          to="/collections"
          className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-rose underline decoration-blush decoration-2 underline-offset-4 hover:text-warm"
        >
          Lihat semua koleksi <ArrowRight size={14} />
        </Link>
      </section>

      {/* COLLAB */}
      <section
        className="relative overflow-hidden px-[8vw] py-24 text-center text-white"
        style={{ background: "linear-gradient(135deg, #4A2E30 0%, #7C4F52 100%)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(238,197,204,0.12) 0%, transparent 70%)" }}
        />
        <div className="relative z-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-blush">Kerjasama & Tender</p>
          <h2 className="font-serif text-4xl font-light leading-[1.15] text-white lg:text-5xl">
            Butuh dalam <em className="italic text-blush">Jumlah Besar?</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-[1.8] text-white/65">
            Kami melayani pesanan grosir, souvenir pernikahan, dan kerjasama tender
            untuk instansi, event organizer, serta reseller.
          </p>

          <div className="mx-auto mt-12 grid max-w-3xl gap-5 text-left sm:grid-cols-2">
            {COLLAB.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15"
              >
                <div className="mb-3 text-3xl">{c.icon}</div>
                <h3 className="mb-1 font-serif text-xl font-semibold text-white">{c.title}</h3>
                <p className="text-sm leading-[1.7] text-white/70">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          <a
            href={WHATSAPP_COLLAB}
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-rose px-8 py-3.5 text-sm font-medium text-white shadow-[0_8px_24px_rgba(201,125,140,0.4)] transition hover:-translate-y-0.5 hover:bg-warm"
          >
            <MessageCircle size={18} />
            Diskusi Kerjasama
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ivory px-[8vw] py-24 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-rose">Kata Mereka</p>
        <h2 className="font-serif text-4xl font-light text-bark lg:text-5xl">
          Pelanggan yang <em className="italic text-rose">Bahagia</em>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-[1.8] text-muted-rose">
          Lebih dari 500 pelanggan telah mempercayai Fudao Scrunchie untuk tampil
          lebih cantik setiap hari.
        </p>
        {featuredReviews.length === 0 ? (
          <p className="mt-12 text-sm text-muted-rose italic">Belum ada ulasan.</p>
        ) : (
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 text-left md:grid-cols-3">
            {featuredReviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center bg-cream px-[8vw] py-24 text-center">
        <div
          className="animate-pulse-bubble mb-6 flex h-16 w-16 items-center justify-center rounded-full text-3xl text-white shadow-[0_12px_32px_rgba(37,211,102,0.35)]"
          style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
        >
          <MessageCircle size={28} />
        </div>
        <h2 className="font-serif text-4xl font-light text-bark lg:text-5xl">
          Yuk, <em className="italic text-rose">Mulai Chat</em> dengan Kami!
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-[1.75] text-muted-rose">
          Ada pertanyaan soal produk, ingin custom order, atau mau diskusi kerjasama?
          Tim kami siap membantu dengan ramah dan cepat lewat WhatsApp.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full px-9 py-4 text-base font-medium text-white shadow-[0_12px_32px_rgba(37,211,102,0.4)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(37,211,102,0.5)]"
          style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
        >
          <MessageCircle size={22} />
          Chat WhatsApp Sekarang
        </a>
        <p className="mt-4 text-xs text-muted-rose">📞 {BRAND.phone} · Respon cepat & ramah</p>
      </section>
    </>
  );
}
