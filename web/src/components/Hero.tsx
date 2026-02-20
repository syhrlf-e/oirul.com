import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center px-4 md:px-6 lg:px-12 max-w-[1600px] mx-auto border-x border-border-light bg-background overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none"></div>
      <div className="absolute top-6 right-6 text-[10px] font-mono text-text-muted hidden md:block">
        [01] INTRO
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 select-none hidden md:block opacity-40">
        <span className="text-[10rem] lg:text-[14rem] font-black leading-none text-stroke whitespace-nowrap">
          WAKTUNYA GO DIGITAL
        </span>
      </div>
      <div className="max-w-5xl mx-auto text-center z-10 relative pt-10 md:pt-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-border-light rounded-full mb-6 md:mb-8 bg-white/5">
          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
          <span className="text-[10px] md:text-[11px] font-medium tracking-wide uppercase text-text-main">
            Digital Agency 2026
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tightest mobile-tight-leading md:leading-[0.9] mb-6 md:mb-8 text-text-main">
          SOLUSI DIGITAL <br className="hidden sm:block" />
          <span className="text-text-muted font-light block sm:inline mt-2 sm:mt-0">
            BERKELAS UNTUK
          </span>{" "}
          <br className="hidden sm:block" />
          BISNIS ANDA
        </h1>
        <p className="text-base md:text-lg text-text-muted max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed font-light px-2">
          Kami membantu UMKM Indonesia bertransformasi digital dengan website
          yang cepat, estetik, dan berorientasi pada hasil.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-10 md:mb-12 px-4 md:px-0">
          <Link
            className="h-12 md:h-14 px-8 md:px-10 bg-primary text-white font-bold flex items-center justify-center hover:bg-blue-800 transition-colors w-full sm:w-auto text-sm md:text-base rounded-sm"
            href="#contact"
          >
            Mulai Proyek
          </Link>
          <Link
            className="h-12 md:h-14 px-8 md:px-10 border border-border-light bg-transparent text-text-main font-bold flex items-center justify-center hover:bg-white/10 transition-colors w-full sm:w-auto text-sm md:text-base rounded-sm"
            href="#portfolio"
          >
            Lihat Karya
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-text-muted">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-base text-primary">
              verified
            </span>
            <p className="text-xs md:text-sm font-medium tracking-wide">
              Telah Dipercaya oleh 50+ UMKM
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-16 pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-center text-xs font-mono text-text-muted gap-4 pb-8 md:pb-0">
        <div className="hidden md:flex gap-8">
          <span>SCROLL DOWN</span>
          <span className="animate-bounce material-symbols-outlined text-sm">
            arrow_downward
          </span>
        </div>
        <div className="flex gap-4 md:gap-8 w-full justify-between md:justify-end px-4 md:px-0">
          <span>TANGERANG — INDONESIA</span>
          <span>EST. 2026</span>
        </div>
      </div>
    </section>
  );
}
