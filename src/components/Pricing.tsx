import Link from "next/link";

export default function Pricing() {
  return (
    <section
      className="py-16 md:py-24 bg-background border-b border-border-light"
      id="pricing"
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-12 border-x border-border-light">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <div className="text-[10px] font-mono text-text-muted mb-4">
            [08] INVESTMENT
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6">
            Paket Harga.
          </h2>
          <p className="text-text-muted text-sm md:text-base">
            Investasi cerdas untuk masa depan digital bisnis Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0">
          <div className="border border-border-light p-6 md:p-8 hover:border-white transition-colors duration-300 flex flex-col h-full bg-background">
            <div className="text-xs font-mono text-text-muted mb-4">BASIC</div>
            <div className="text-3xl md:text-4xl font-bold mb-2">1.5jt</div>
            <p className="text-xs md:text-sm text-text-muted mb-6 md:mb-8 pb-4 border-b border-border-light">
              Landing page produk tunggal.
            </p>
            <ul className="space-y-3 md:space-y-4 mb-8 text-sm flex-1">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary">
                  check_small
                </span>{" "}
                <span className="text-text-main">1 Halaman</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary">
                  check_small
                </span>{" "}
                <span className="text-text-main">
                  Responsif (Mobile Friendly)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary">
                  check_small
                </span>{" "}
                <span className="text-text-main">WhatsApp Chat Button</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary">
                  check_small
                </span>{" "}
                <span className="text-text-main">Copywriting Standar</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary">
                  check_small
                </span>{" "}
                <span className="text-text-main">Optimasi Kecepatan</span>
              </li>
            </ul>
            <Link
              className="block w-full py-3 border border-border-light text-center text-sm font-bold hover:bg-black hover:text-white transition-colors mt-auto"
              href="#contact"
            >
              PILIH PAKET
            </Link>
          </div>
          <div className="border-2 border-primary bg-background p-6 md:p-8 relative flex flex-col h-full shadow-lg transform scale-100 md:scale-100 lg:scale-105 z-10">
            <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wide">
              Paling Populer
            </div>
            <div className="text-xs font-mono text-primary mb-4 font-bold">
              BUSINESS
            </div>
            <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">
              3.5jt
            </div>
            <p className="text-xs md:text-sm text-text-muted mb-6 md:mb-8 pb-4 border-b border-border-light">
              Profil perusahaan profesional.
            </p>
            <ul className="space-y-3 md:space-y-4 mb-8 text-sm flex-1">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary">
                  check_small
                </span>{" "}
                <span className="text-text-main font-medium">5 Halaman</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary">
                  check_small
                </span>{" "}
                <span className="text-text-main">Free Domain .COM</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary">
                  check_small
                </span>{" "}
                <span className="text-text-main">
                  Email Bisnis Professional
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary">
                  check_small
                </span>{" "}
                <span className="text-text-main">SEO Dasar & Indexing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary">
                  check_small
                </span>{" "}
                <span className="text-text-main">Desain Kustom Premium</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary">
                  check_small
                </span>{" "}
                <span className="text-text-main">Keamanan SSL</span>
              </li>
            </ul>
            <Link
              className="block w-full py-3 bg-primary text-white text-center text-sm font-bold hover:bg-blue-800 transition-colors mt-auto shadow-md"
              href="#contact"
            >
              PILIH PAKET
            </Link>
          </div>
          <div className="border border-border-light p-6 md:p-8 hover:border-white transition-colors duration-300 flex flex-col h-full bg-background">
            <div className="text-xs font-mono text-text-muted mb-4">PRO</div>
            <div className="text-3xl md:text-4xl font-bold mb-2">5.5jt</div>
            <p className="text-xs md:text-sm text-text-muted mb-6 md:mb-8 pb-4 border-b border-border-light">
              Katalog produk lengkap.
            </p>
            <ul className="space-y-3 md:space-y-4 mb-8 text-sm flex-1">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary">
                  check_small
                </span>{" "}
                <span className="text-text-main">Sistem Katalog Online</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary">
                  check_small
                </span>{" "}
                <span className="text-text-main">Unlimited Produk</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary">
                  check_small
                </span>{" "}
                <span className="text-text-main">Auto Checkout WA</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary">
                  check_small
                </span>{" "}
                <span className="text-text-main">
                  Integrasi Pembayaran Otomatis
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary">
                  check_small
                </span>{" "}
                <span className="text-text-main">Dashboard Admin</span>
              </li>
            </ul>
            <Link
              className="block w-full py-3 border border-border-light text-center text-sm font-bold hover:bg-black hover:text-white transition-colors mt-auto"
              href="#contact"
            >
              PILIH PAKET
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
