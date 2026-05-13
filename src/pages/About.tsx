import { motion } from "motion/react";

const VALUES = [
  { icon: "🌸", title: "Cinta pada Detail", desc: "Setiap jahitan dan helai kain dipilih dengan penuh perhatian." },
  { icon: "💎", title: "Premium Material", desc: "Hanya bahan satin silk terbaik yang sampai ke tangan kamu." },
  { icon: "🤝", title: "Dukung UMKM", desc: "Karya tangan pengrajin lokal Indonesia yang penuh dedikasi." },
];

export default function About() {
  return (
    <div className="px-[8vw] py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-rose">Tentang Kami</p>
        <h1 className="mt-3 font-serif text-5xl font-light leading-[1.1] text-bark lg:text-7xl">
          Kisah di balik <em className="italic text-rose">setiap helai</em>
        </h1>
        <p className="mt-8 text-base leading-[1.85] text-muted-rose">
          Fudao Scrunchie lahir dari kecintaan terhadap aksesori yang bukan sekadar
          ikat rambut — tapi juga ekspresi gaya, kenangan, dan rasa percaya diri.
          Kami percaya bahwa hal-hal kecil bisa membawa kebahagiaan besar, terutama
          ketika dibuat dengan cinta dan perhatian.
        </p>
      </motion.div>

      <div className="mx-auto mt-20 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-2xl border border-rose/15 bg-white p-8 text-center"
          >
            <div className="mb-4 text-4xl">{v.icon}</div>
            <h3 className="font-serif text-2xl font-semibold text-bark">{v.title}</h3>
            <p className="mt-2 text-sm leading-[1.7] text-muted-rose">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
