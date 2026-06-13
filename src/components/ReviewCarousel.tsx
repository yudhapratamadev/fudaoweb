import { motion } from "motion/react";
import type { Review } from "@/lib/types";
import ReviewCard from "@/components/ReviewCard";

const CARD_WIDTH = 360; // 340px kartu + 20px gap
const MIN_TRACK = 1800; // lebar minimum satu set agar layar lebar tetap penuh

export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  // Ulangi set agar cukup lebar untuk layar besar, lalu gandakan untuk loop mulus.
  const repeat = Math.max(
    1,
    Math.ceil(MIN_TRACK / (reviews.length * CARD_WIDTH))
  );
  const singleSet = Array.from({ length: repeat }, () => reviews).flat();
  const items = [...singleSet, ...singleSet];

  // Durasi proporsional jumlah kartu agar kecepatan konsisten.
  const duration = Math.max(24, singleSet.length * 6);

  return (
    <div className="group relative mt-12 overflow-hidden">
      {/* Fade gradient kiri & kanan */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ivory to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ivory to-transparent sm:w-20" />

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="flex gap-5"
      >
        {items.map((r, i) => (
          <div key={`${r.id}-${i}`} className="w-[340px] shrink-0 text-left">
            <ReviewCard review={r} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
