# fudaoweb — Fudao Scrunchie

Landing page modern untuk **Fudao Scrunchie** — aksesori ikat rambut handcrafted premium. Berbasis React + Vite + Tailwind v4 + Supabase, di-rebuild dari versi HTML statis sebelumnya menjadi React SPA dinamis.

GitHub: https://github.com/yudhapratamadev/fudaoweb

## Stack

- React 19 + Vite 6 + TypeScript
- Tailwind CSS v4 (custom Fudao palette: rose/blush/cream/ivory/bark)
- Font: **Cormorant Garamond** (serif, italic accents) + **DM Sans** (sans)
- React Router v7 — SPA routing
- TanStack Query — fetch Supabase
- Motion — animasi smooth
- Supabase backend (Collections + Reviews dikelola dari CMS-Admin-Pratama)

## Palette

| Var | Hex | Kegunaan |
|---|---|---|
| `rose` | `#C97D8C` | Primary brand, button, accent |
| `blush` | `#EEC5CC` | Soft pink highlight |
| `cream` | `#FDF6F0` | Background utama |
| `ivory` | `#FAF0E9` | Section alternate |
| `bark` | `#4A2E30` | Heading text, footer |
| `warm` | `#7C4F52` | Body text, hover |
| `accent` | `#E8A0B0` | Floating deco |
| `muted-rose` | `#9E7880` | Muted text |

## Halaman

- `/` — Hero dengan morphing blob, why-us 2×2, featured products, collab section (dark gradient), testimoni, CTA WhatsApp
- `/collections` — list semua koleksi + filter kategori
- `/collections/:slug` — detail produk + CTA WhatsApp
- `/about` — kisah brand
- `/contact` — channel komunikasi (WA, IG, Shopee, Email)

## Setup

```bash
cp .env.example .env
# Edit .env: isi VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_TENANT_ID
npm install
npm run dev
```

App jalan di http://localhost:3200.

## Konten Dinamis via CMS

Buka aplikasi `CMS-Admin-Pratama`, pilih tenant Fudao Scrunchie, kelola:
- **Collections** → ditampilkan di `/collections` dan section "Pilihan Scrunchie Terfavorit" di Home
- **Reviews** → testimoni di Home

## Build & Deploy ke cPanel

```bash
npm run build
```

Upload semua isi `dist/` (termasuk `.htaccess`) ke folder document root di cPanel.
