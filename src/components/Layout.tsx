import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { BRAND, WHATSAPP_LINK } from "@/constants";

const nav = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Koleksi" },
  { to: "/about", label: "Tentang" },
  { to: "/contact", label: "Kontak" },
];

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen">
      <nav
        className={`fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-rose/15 px-[6vw] backdrop-blur-md transition-shadow ${
          scrolled ? "shadow-[0_4px_32px_rgba(74,46,48,.08)]" : ""
        }`}
        style={{ background: "rgba(253,246,240,.88)" }}
      >
        <Link
          to="/"
          className="font-serif text-2xl font-semibold tracking-wide text-rose"
        >
          Fudao <span className="italic text-bark">Scrunchie</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <li key={n.to}>
              <NavLink
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `relative pb-1 text-xs font-medium uppercase tracking-[0.08em] transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-rose after:transition-all hover:text-rose ${
                    isActive
                      ? "text-rose after:w-full"
                      : "text-warm after:w-0 hover:after:w-full"
                  }`
                }
              >
                {n.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-rose px-5 py-2 text-xs font-medium text-white transition hover:-translate-y-0.5 hover:bg-warm"
            >
              Chat WA
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-16 z-30 border-b border-rose/15 bg-cream px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {nav.map((n) => (
              <li key={n.to}>
                <NavLink
                  to={n.to}
                  end={n.to === "/"}
                  className={({ isActive }) =>
                    `block text-base ${isActive ? "text-rose" : "text-warm"}`
                  }
                >
                  {n.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-rose px-5 py-2.5 text-sm font-medium text-white"
              >
                Chat WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}

      <main className="pt-16">
        <Outlet />
      </main>

      <footer className="bg-bark px-[8vw] py-10 text-center text-sm leading-relaxed text-white/55">
        <span className="mb-2 block font-serif text-2xl font-semibold text-blush">
          {BRAND.name}
        </span>
        <p>Aksesori ikat rambut handcrafted premium · Melayani seluruh Indonesia</p>
        <p className="mt-1">© {new Date().getFullYear()} {BRAND.name}. Made with 🎀 & ❤️</p>
      </footer>
    </div>
  );
}
