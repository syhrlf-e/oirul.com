export default function Testimonials() {
  return (
    <section className="border-b border-border-light bg-neutral-900">
      <div className="max-w-[1600px] mx-auto border-x border-border-light">
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border-light">
          <div className="p-8 md:p-10 lg:p-16 flex flex-col justify-between h-full bg-background">
            <span className="material-symbols-outlined text-3xl md:text-4xl mb-4 md:mb-6 text-border-light">
              format_quote
            </span>
            <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              &quot;Website landing page-nya bener-bener ampuh! Semenjak
              dilaunching, chat WA masuk terus. Desainnya elegan banget.&quot;
            </p>
            <div>
              <h5 className="font-bold text-sm">Budi Santoso</h5>
              <p className="text-xs text-text-muted">Owner Kopi Senja</p>
            </div>
          </div>
          <div className="p-8 md:p-10 lg:p-16 flex flex-col justify-between h-full bg-background">
            <span className="material-symbols-outlined text-3xl md:text-4xl mb-4 md:mb-6 text-border-light">
              format_quote
            </span>
            <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              &quot;Pelayanan Oirul mantap! Sabar banget ngadepin saya yang
              gaptek. Sekarang omset naik 40% berkat website.&quot;
            </p>
            <div>
              <h5 className="font-bold text-sm">Siti Aminah</h5>
              <p className="text-xs text-text-muted">Owner Hijab Style</p>
            </div>
          </div>
          <div className="p-8 md:p-10 lg:p-16 flex flex-col justify-between h-full bg-background">
            <span className="material-symbols-outlined text-3xl md:text-4xl mb-4 md:mb-6 text-border-light">
              format_quote
            </span>
            <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              &quot;Pengerjaan cepet banget, sesuai janji 7 hari kerja udah
              live. Perusahaan saya kelihatan lebih bonafit.&quot;
            </p>
            <div>
              <h5 className="font-bold text-sm">Andi Wijaya</h5>
              <p className="text-xs text-text-muted">Direktur Bangun Jaya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
