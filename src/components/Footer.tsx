import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-neutral-950 text-white py-16 md:py-24 relative overflow-hidden"
      id="contact"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="text-center md:text-left">
            <div className="text-[10px] font-mono text-white/50 mb-6">
              [09] CONTACT
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8">
              Mari Bicara
              <br />
              Bisnis.
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-md leading-relaxed mb-8 md:mb-10 mx-auto md:mx-0">
              Konsultasikan kebutuhan digital Anda gratis. Kami akan merespons
              dalam waktu kurang dari 2 jam.
            </p>
            <Link
              className="inline-flex items-center justify-center h-14 md:h-16 px-8 bg-primary hover:bg-white hover:text-text-main transition-colors text-base md:text-lg font-bold w-full sm:w-auto rounded-sm"
              href="https://wa.me/6281234567890"
            >
              WhatsApp Kami
            </Link>
          </div>
          <div className="flex flex-col justify-end items-center md:items-end gap-8">
            <div className="text-center md:text-right w-full">
              <p className="text-white/40 text-sm mb-2">EMAIL</p>
              <Link
                className="text-xl md:text-2xl font-bold hover:text-primary transition-colors block"
                href="mailto:hello@oirul.com"
              >
                hello@oirul.com
              </Link>
            </div>
            <div className="text-center md:text-right w-full">
              <p className="text-white/40 text-sm mb-2">LOCATION</p>
              <p className="text-lg md:text-xl font-medium">
                Tangerang,
                <br />
                Indonesia
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col-reverse md:flex-row justify-between items-center text-xs font-mono text-white/40 gap-6">
          <p>© 2026 OIRUL.</p>
          <div className="flex gap-6">
            <Link className="hover:text-white transition-colors" href="#">
              INSTAGRAM
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              LINKEDIN
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              DRIBBBLE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
