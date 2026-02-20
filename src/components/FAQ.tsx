export default function FAQ() {
  return (
    <section className="border-b border-border-light bg-background py-16">
      <div className="max-w-[800px] mx-auto px-6">
        <h3 className="text-2xl font-bold mb-8 text-center md:text-left">
          FAQ
        </h3>
        <div className="divide-y divide-border-light">
          <details className="group py-4 cursor-pointer">
            <summary className="flex justify-between items-center font-medium list-none">
              <span>Berapa lama pengerjaan?</span>
              <span className="transition group-open:rotate-180 material-symbols-outlined text-text-muted">
                expand_more
              </span>
            </summary>
            <div className="text-text-muted text-sm mt-3 leading-relaxed group-open:animate-fadeIn">
              5-7 hari kerja untuk paket standar setelah data diterima lengkap.
            </div>
          </details>
          <details className="group py-4 cursor-pointer">
            <summary className="flex justify-between items-center font-medium list-none">
              <span>Ada biaya bulanan?</span>
              <span className="transition group-open:rotate-180 material-symbols-outlined text-text-muted">
                expand_more
              </span>
            </summary>
            <div className="text-text-muted text-sm mt-3 leading-relaxed group-open:animate-fadeIn">
              Tidak ada hidden fee. Tahun depan hanya bayar perpanjangan domain
              & hosting (~500rb).
            </div>
          </details>
          <details className="group py-4 cursor-pointer">
            <summary className="flex justify-between items-center font-medium list-none">
              <span>Saya gaptek, gimana?</span>
              <span className="transition group-open:rotate-180 material-symbols-outlined text-text-muted">
                expand_more
              </span>
            </summary>
            <div className="text-text-muted text-sm mt-3 leading-relaxed group-open:animate-fadeIn">
              Tenang, kami berikan video tutorial cara edit konten. Kami juga
              siap bantu via WA.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
