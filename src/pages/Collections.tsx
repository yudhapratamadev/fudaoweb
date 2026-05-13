import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCollections } from "@/lib/queries";
import CollectionCard from "@/components/CollectionCard";

export default function Collections() {
  const { data: collections = [], isLoading } = useQuery({
    queryKey: ["collections"],
    queryFn: fetchCollections,
  });
  const [activeCat, setActiveCat] = useState<string | null>(null);

  const categories = useMemo(() => {
    const set = new Set<string>();
    collections.forEach((c) => c.category && set.add(c.category));
    return Array.from(set);
  }, [collections]);

  const filtered = activeCat
    ? collections.filter((c) => c.category === activeCat)
    : collections;

  return (
    <div className="px-[8vw] py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-rose">Koleksi</p>
        <h1 className="mt-3 font-serif text-5xl font-light leading-[1.1] text-bark lg:text-7xl">
          Semua <em className="italic text-rose">koleksi kami</em>
        </h1>
        <p className="mt-6 text-base leading-[1.8] text-muted-rose">
          Jelajahi koleksi scrunchie handcrafted premium. Setiap helai dibuat dengan
          cinta dari satin silk pilihan.
        </p>
      </motion.div>

      {categories.length > 0 && (
        <div className="mx-auto mt-12 flex max-w-6xl flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCat(null)}
            className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.08em] transition ${
              activeCat === null
                ? "bg-rose text-white"
                : "border border-rose/20 bg-white text-warm hover:border-rose/40"
            }`}
          >
            Semua
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.08em] transition ${
                activeCat === cat
                  ? "bg-rose text-white"
                  : "border border-rose/20 bg-white text-warm hover:border-rose/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {isLoading ? (
        <p className="mt-16 text-center text-muted-rose">Memuat...</p>
      ) : filtered.length === 0 ? (
        <p className="mt-16 text-center text-muted-rose">Belum ada koleksi.</p>
      ) : (
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <CollectionCard key={c.id} collection={c} />
          ))}
        </div>
      )}
    </div>
  );
}
