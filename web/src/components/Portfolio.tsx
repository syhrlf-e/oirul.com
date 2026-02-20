import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section
      className="py-16 md:py-24 bg-background border-b border-border-light"
      id="portfolio"
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-12 border-x border-border-light">
        <div className="flex justify-between items-end mb-10 md:mb-16">
          <div>
            <div className="text-[10px] font-mono text-text-muted mb-4">
              [07] SELECTED WORKS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Karya Terbaru.
            </h2>
          </div>
          <Link
            className="hidden md:block text-sm font-bold border-b border-text-main pb-1 hover:text-primary transition-colors"
            href="#"
          >
            LIHAT SEMUA
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-px md:bg-border-light md:border border-border-light">
          <div className="group relative bg-background h-[300px] md:h-[500px] overflow-hidden border border-border-light md:border-none">
            <Image
              alt="Coffee shop website"
              className="w-full h-full object-cover grayscale md:grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMIOwkYm7xrjPoDOdrfz_KRYhgvHKrNjszhT5p2rI17tK70Qx8jZ6NxMgCd7mjJa0Z0thMavWS-E-htse9Hyzjw1aov8vNAbjSMDfGSk78FeIrxuzjnsJv6PJbR2J0yJvib6D37rNflXkcGY-liv8om_O8RQr6AbBSoG5YSUTHw1qaNoALorsYgXl5sOMSVVbfTrmbn4tS_OhzdRDwmmL6fl7S6bm6Tmkg5nURllrnbtIwnBuIm6gC5dwVirpfEN0wYvFcNDIGPx1S"
              width={800}
              height={500}
            />
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xs font-mono mb-1 md:mb-2">
                KULINER
              </span>
              <h3 className="text-white text-xl md:text-2xl font-bold">
                Kopi Senja
              </h3>
            </div>
          </div>
          <div className="group relative bg-white h-[300px] md:h-[500px] overflow-hidden border border-border-light md:border-none">
            <Image
              alt="Clothing store website"
              className="w-full h-full object-cover grayscale md:grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3g8xaWHXSSU18CPSceL8tuu_3-1uaUR9ZVfSQN7ghHS9-Uy3PdWOblUZS_c8Bn8jVyoqWsH2OFAaxwahicJHfzjNvfqCeSvBDzAmpcXXmcZqZqm-IifpYfhhGXcQUCXQt2SdAisgFIbkiefwzpgl-cjRZYNs0e4ChWtzY0AF7mJfDeIo1p1HulNbFqplagiErMIGQRpEEtlDyBsaq-fY-M_6VgfwnWs907DB9Yw4zg2TThFhM-Vd3VqgBiuvzJjswGixyraoJoLzu"
              width={800}
              height={500}
            />
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xs font-mono mb-1 md:mb-2">
                FASHION
              </span>
              <h3 className="text-white text-xl md:text-2xl font-bold">
                Baju Bagus
              </h3>
            </div>
          </div>
          <div className="group relative bg-white h-[300px] md:h-[500px] overflow-hidden border border-border-light md:border-none">
            <Image
              alt="Construction website"
              className="w-full h-full object-cover grayscale md:grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJPpn6pDVSBLlMvV1Qp8m2gm3s5pREfXMUmORfv2ihH2jlU9zmeWvSLR57eEgvZHRgbx_ZUPc9Nm0LGr66G4dkF-myIVZDySZJmtQ4EurRaug2E_29x_8DBy6itfUhFfT7SO9KJLG015bUVA_f9x85xSryPoRQUgk3c21kybkQtYXVVcWH8F_vNInqJTRzZ5Lo-s1Yjdsg2HZqaOJfWL2JeovqRzO6d1hN-laE6EfzN_UMc3CgvZ3IZav05ejwmMPclGJBHnP5lDf7"
              width={800}
              height={500}
            />
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xs font-mono mb-1 md:mb-2">
                KONSTRUKSI
              </span>
              <h3 className="text-white text-xl md:text-2xl font-bold">
                Bangun Jaya
              </h3>
            </div>
          </div>
          <div className="group relative bg-background h-[250px] md:h-[500px] overflow-hidden flex items-center justify-center border border-border-light md:border-none">
            <div className="text-center p-8">
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-text-main">
                YOUR
                <br />
                BRAND
                <br />
                HERE
              </h3>
              <p className="text-text-muted text-sm max-w-xs mx-auto mb-6">
                Siap untuk mentransformasi bisnis Anda?
              </p>
              <Link
                className="inline-block px-6 py-3 border border-text-main text-text-main hover:bg-text-main hover:text-white transition-colors text-sm font-bold"
                href="#contact"
              >
                HUBUNGI KAMI
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link
            className="text-sm font-bold border-b border-black pb-1"
            href="#"
          >
            LIHAT SEMUA KARYA
          </Link>
        </div>
      </div>
    </section>
  );
}
