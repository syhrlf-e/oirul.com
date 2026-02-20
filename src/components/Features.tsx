export default function Features() {
  return (
    <section className="border-t border-b border-border-light bg-background">
      <div className="max-w-[1600px] mx-auto border-x border-border-light">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <div className="p-6 md:p-12 border-b md:border-b-0 border-r md:border-r border-border-light hover:bg-white/5 transition-colors group h-full">
            <div className="text-[10px] font-mono text-text-muted mb-4 md:mb-6 hidden md:block">
              [02] SPEED
            </div>
            <span className="material-symbols-outlined text-3xl md:text-4xl mb-4 md:mb-6 text-text-main group-hover:text-primary transition-colors">
              bolt
            </span>
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 tracking-tight">
              Kilat & Presisi
            </h3>
            <p className="text-text-muted leading-relaxed text-xs md:text-sm">
              Website siap online dalam 7 hari kerja.
            </p>
          </div>
          <div className="p-6 md:p-12 border-b md:border-b-0 lg:border-r md:border-r-0 border-border-light hover:bg-white/5 transition-colors group h-full">
            <div className="text-[10px] font-mono text-text-muted mb-4 md:mb-6 hidden md:block">
              [03] TRANSPARENCY
            </div>
            <span className="material-symbols-outlined text-3xl md:text-4xl mb-4 md:mb-6 text-text-main group-hover:text-primary transition-colors">
              payments
            </span>
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 tracking-tight">
              Harga Jelas
            </h3>
            <p className="text-text-muted leading-relaxed text-xs md:text-sm">
              Tanpa biaya tersembunyi, satu harga.
            </p>
          </div>
          <div className="p-6 md:p-12 border-r md:border-r lg:border-r border-border-light hover:bg-white/5 transition-colors group h-full">
            <div className="text-[10px] font-mono text-text-muted mb-4 md:mb-6 hidden md:block">
              [04] OPTIMIZATION
            </div>
            <span className="material-symbols-outlined text-3xl md:text-4xl mb-4 md:mb-6 text-text-main group-hover:text-primary transition-colors">
              search
            </span>
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 tracking-tight">
              SEO Ready
            </h3>
            <p className="text-text-muted leading-relaxed text-xs md:text-sm">
              Struktur kode yang dicintai Google.
            </p>
          </div>
          <div className="p-6 md:p-12 hover:bg-white/5 transition-colors group h-full">
            <div className="text-[10px] font-mono text-text-muted mb-4 md:mb-6 hidden md:block">
              [05] CONSULTATION
            </div>
            <span className="material-symbols-outlined text-3xl md:text-4xl mb-4 md:mb-6 text-text-main group-hover:text-primary transition-colors">
              forum
            </span>
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 tracking-tight">
              Konsul Gratis
            </h3>
            <p className="text-text-muted leading-relaxed text-xs md:text-sm">
              Diskusikan kebutuhan tanpa biaya awal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
