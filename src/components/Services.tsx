"use client";

import Link from "next/link";

export default function Services() {
  return (
    <section
      className="py-16 md:py-24 bg-background border-b border-border-light"
      id="layanan"
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-12 border-x border-border-light h-full flex flex-col lg:flex-row gap-10 md:gap-16">
        <div className="lg:w-1/3">
          <div className="lg:sticky lg:top-24">
            <div className="text-[10px] font-mono text-text-muted mb-4">
              [06] SERVICES
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6">
              Solusi Digital
              <br />
              Terintegrasi.
            </h2>
            <p className="text-text-muted text-base md:text-lg mb-6 md:mb-8 max-w-sm">
              Kami menyediakan paket lengkap untuk kebutuhan digital presence
              bisnis Anda.
            </p>
            <Link
              className="inline-flex items-center gap-2 text-sm font-bold border-b border-text-main pb-1 hover:text-primary hover:border-primary transition-colors mb-8 md:mb-12"
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                const elem = document.getElementById("pricing");
                if (elem) {
                  const targetPosition =
                    elem.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                  });
                }
              }}
            >
              LIHAT HARGA{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
        <div className="lg:w-2/3 flex flex-col gap-0">
          <div className="grid grid-cols-1 border border-border-light">
            <div className="p-6 md:p-10 border-b border-border-light hover:bg-white/5 transition-colors">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold">
                  Web Landing Page
                </h3>
                <span className="material-symbols-outlined text-2xl md:text-3xl text-text-muted">
                  view_quilt
                </span>
              </div>
              <p className="text-sm md:text-base text-text-muted mb-6 max-w-lg">
                Halaman promosi fokus konversi. Dirancang dengan psikologi user
                untuk meningkatkan penjualan produk unggulan.
              </p>
              <ul className="flex flex-wrap gap-2 md:gap-4 text-[10px] md:text-xs font-mono text-text-main">
                <li className="px-2 py-1 bg-neutral-800 border border-border-light">
                  COPYWRITING
                </li>
                <li className="px-2 py-1 bg-neutral-800 border border-border-light">
                  WA INTEGRATION
                </li>
              </ul>
            </div>
            <div className="p-6 md:p-10 border-b border-border-light hover:bg-white/5 transition-colors">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold">
                  Company Profile
                </h3>
                <span className="material-symbols-outlined text-2xl md:text-3xl text-text-muted">
                  domain
                </span>
              </div>
              <p className="text-sm md:text-base text-text-muted mb-6 max-w-lg">
                Tingkatkan kredibilitas dengan profil profesional. Tunjukkan
                siapa Anda dan apa value bisnis Anda kepada dunia.
              </p>
              <ul className="flex flex-wrap gap-2 md:gap-4 text-[10px] md:text-xs font-mono text-text-main">
                <li className="px-2 py-1 bg-neutral-800 border border-border-light">
                  BRANDING
                </li>
                <li className="px-2 py-1 bg-neutral-800 border border-border-light">
                  TEAM & CAREER
                </li>
              </ul>
            </div>
            <div className="p-6 md:p-10 hover:bg-white/5 transition-colors">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold">
                  Katalog Digital
                </h3>
                <span className="material-symbols-outlined text-2xl md:text-3xl text-text-muted">
                  storefront
                </span>
              </div>
              <p className="text-sm md:text-base text-text-muted mb-6 max-w-lg">
                Toko online simpel tanpa ribet. Tampilkan produk dengan galeri
                menarik dan sistem checkout via WhatsApp.
              </p>
              <ul className="flex flex-wrap gap-2 md:gap-4 text-[10px] md:text-xs font-mono text-text-main">
                <li className="px-2 py-1 bg-neutral-800 border border-border-light">
                  EASY MANAGE
                </li>
                <li className="px-2 py-1 bg-neutral-800 border border-border-light">
                  AUTO CHECKOUT
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border border-border-light">
            <div className="p-6 md:p-8 bg-neutral-900 border-b border-border-light">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h3 className="text-lg md:text-xl font-bold text-text-main">
                  Solusi Sistem & Custom
                </h3>
                <Link
                  className="text-xs font-bold text-primary flex items-center gap-1 hover:underline mt-2 sm:mt-0"
                  href="https://wa.me/6281234567890" // Placeholder, should be config
                >
                  Konsultasikan Kebutuhan{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_outward
                  </span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-light">
              <div className="p-6 hover:bg-white/5 transition-colors">
                <span className="material-symbols-outlined text-2xl text-primary mb-3">
                  flight_takeoff
                </span>
                <h4 className="font-bold text-sm mb-2">Sistem Travel</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Pengelolaan jamaah, manifest, hingga jadwal keberangkatan.
                </p>
              </div>
              <div className="p-6 hover:bg-white/5 transition-colors">
                <span className="material-symbols-outlined text-2xl text-primary mb-3">
                  dashboard_customize
                </span>
                <h4 className="font-bold text-sm mb-2">Dashboard Admin</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Panel kontrol yang dibuat khusus sesuai workflow operasional.
                </p>
              </div>
              <div className="p-6 hover:bg-white/5 transition-colors">
                <span className="material-symbols-outlined text-2xl text-primary mb-3">
                  point_of_sale
                </span>
                <h4 className="font-bold text-sm mb-2">Sistem Kasir (POS)</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Pencatatan transaksi, inventaris stok, dan laporan keuangan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
