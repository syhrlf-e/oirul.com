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
              <span>Berapa lama website saya akan selesai?</span>
              <span className="transition group-open:rotate-180 material-symbols-outlined text-text-muted">
                expand_more
              </span>
            </summary>
            <div className="text-text-muted text-sm mt-3 leading-relaxed group-open:animate-fadeIn">
              Untuk paket standar, kami menjanjikan website Anda siap meluncur
              dalam 5-7 hari kerja setelah semua data kami terima. Kami
              menghargai waktu Anda karena kami tahu setiap hari tanpa website
              adalah potensi penjualan yang hilang.
            </div>
          </details>
          <details className="group py-4 cursor-pointer">
            <summary className="flex justify-between items-center font-medium list-none">
              <span>
                Saya sama sekali tidak paham teknologi, apakah saya bisa
                mengelola website sendiri?
              </span>
              <span className="transition group-open:rotate-180 material-symbols-outlined text-text-muted">
                expand_more
              </span>
            </summary>
            <div className="text-text-muted text-sm mt-3 leading-relaxed group-open:animate-fadeIn">
              Tentu saja! Kami membangun website dengan struktur yang
              user-friendly. Khusus paket PRO, Anda akan mendapatkan Video
              Tutorial eksklusif yang mengajarkan cara menambah produk atau
              mengganti teks hanya dalam beberapa klik. Kami juga tetap tersedia
              untuk konsultasi jika Anda butuh bantuan.
            </div>
          </details>
          <details className="group py-4 cursor-pointer">
            <summary className="flex justify-between items-center font-medium list-none">
              <span>Apakah ada biaya tersembunyi di kemudian hari?</span>
              <span className="transition group-open:rotate-180 material-symbols-outlined text-text-muted">
                expand_more
              </span>
            </summary>
            <div className="text-text-muted text-sm mt-3 leading-relaxed group-open:animate-fadeIn">
              Transparansi adalah prioritas kami. Tidak ada biaya bulanan yang
              aneh. Anda hanya perlu membayar biaya perpanjangan domain dan
              hosting setiap satu tahun sekali (mulai dari ~500rb/tahun
              tergantung paket). Semua rincian akan kami sampaikan di depan
              secara terbuka.
            </div>
          </details>
          <details className="group py-4 cursor-pointer">
            <summary className="flex justify-between items-center font-medium list-none">
              <span>Apakah website saya pasti muncul di Google?</span>
              <span className="transition group-open:rotate-180 material-symbols-outlined text-text-muted">
                expand_more
              </span>
            </summary>
            <div className="text-text-muted text-sm mt-3 leading-relaxed group-open:animate-fadeIn">
              Kami menerapkan Technical SEO di setiap baris kode Next.js kami.
              Ini memastikan struktur website Anda disukai oleh algoritma Google
              sehingga lebih mudah untuk masuk ke halaman pertama dibandingkan
              website biasa.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
