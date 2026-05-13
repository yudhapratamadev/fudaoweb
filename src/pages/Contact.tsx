import { motion } from "motion/react";
import { MessageCircle, Instagram, Mail, ShoppingBag } from "lucide-react";
import { BRAND, WHATSAPP_LINK } from "@/constants";

const channels = [
  { icon: MessageCircle, label: "WhatsApp", href: WHATSAPP_LINK, desc: "Respon cepat — direkomendasikan untuk pesanan" },
  { icon: Instagram, label: "Instagram", href: BRAND.instagram, desc: "Lihat update koleksi terbaru" },
  { icon: ShoppingBag, label: "Shopee", href: BRAND.shopee, desc: "Belanja langsung di marketplace" },
  { icon: Mail, label: "Email", href: `mailto:${BRAND.email}`, desc: BRAND.email },
];

export default function Contact() {
  return (
    <div className="px-[8vw] py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-rose">Kontak</p>
        <h1 className="mt-3 font-serif text-5xl font-light leading-[1.1] text-bark lg:text-7xl">
          Mari <em className="italic text-rose">berbincang</em>
        </h1>
        <p className="mt-6 text-base text-muted-rose">
          Pilih channel yang paling nyaman buat kamu. Kami siap membantu.
        </p>
      </motion.div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group rounded-2xl border border-rose/15 bg-white p-7 text-center transition hover:-translate-y-1 hover:border-rose/40 hover:shadow-[0_12px_32px_rgba(201,125,140,0.18)]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blush/30 text-rose transition group-hover:bg-rose group-hover:text-white">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-bark">{c.label}</h3>
              <p className="mt-1 text-xs leading-[1.6] text-muted-rose">{c.desc}</p>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
