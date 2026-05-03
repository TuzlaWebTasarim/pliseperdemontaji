const stats = [
  { num: '10+', label: 'Yıl Üretim Deneyimi' },
  { num: '50K+', label: 'Teslim Edilen Ürün' },
  { num: '6',   label: 'Avrupa Ülkesi' },
  { num: '81',  label: 'Türkiye İli' },
]

export default function BrandValue() {
  return (
    <section className="py-20 lg:py-28 bg-slate" aria-labelledby="brand-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Sol: Metin */}
          <div>
            <div className="inline-flex items-center gap-2 bg-pine/20 border border-pine/30 rounded-full px-4 py-1.5 mb-8">
              <span className="text-[12px] font-semibold text-pine-mid uppercase tracking-wider">Fenetre Systems</span>
            </div>
            <h2 id="brand-heading" className="text-[32px] lg:text-[42px] font-black text-white leading-tight mb-6">
              Gebze&apos;den Çıkan{' '}
              <span className="text-pine">Üretim Gücü</span>,{' '}
              <br className="hidden lg:block" />
              Kapınıza Taşınan Kalite
            </h2>
            <div className="space-y-5 text-[15px] lg:text-[16px] text-white/70 leading-relaxed">
              <p>
                Kocaeli Gebze'deki üretim tesisimizde fason üretim yapılmaz.
                Sipariş aldığımız her <strong className="text-white">plise perde</strong>,
                fabrikamızda baştan sona imal edilir.
                Ölçü tutarsızlığı, renk farkı ve mekanik arıza birinci yılda
                garanti kapsamında ücretsiz giderilir.
              </p>
              <p>
                Aracı depo, bayi komisyonu ya da ikinci el stok söz konusu değil.
                Sipariş verdiğiniz an üretim bandı çalışmaya başlar;
                <em className="text-white/90"> Türkiye'ye montajlı teslimat</em>,
                Avrupa'ya kargo ile 4-10 iş günü arasında tamamlanır.
              </p>
              <p>
                <u className="text-white">Avrupa standartlarında</u> test edilen kumaşlar,
                ISO sertifikalı profil sistemleri ve alüminyum mekanizmalar
                ürünün ömrünü 15 yılın üzerine taşır.
              </p>
            </div>

            {/* Avantajlar listesi */}
            <ul className="mt-8 space-y-3" role="list">
              {[
                'Doğrudan fabrika – sıfır aracı, şeffaf fiyat',
                'Milimetrik özel ölçü üretim garantisi',
                'Almanya dahil 6 Avrupa ülkesine kapı teslim',
                'Kurulum ekibimizle Türkiye\'nin 81 iline montaj',
                '2 yıl mekanik arıza ve kumaş garanti belgesi',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-white/80">
                  <span className="mt-1 w-5 h-5 rounded-full bg-pine/20 border border-pine/40 flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5l2 2 4-4" stroke="#83bd81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sağ: İstatistik kartları */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="text-[44px] font-black text-pine leading-none mb-2">{s.num}</div>
                  <div className="text-[13px] text-white/60 font-medium">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Alıntı */}
            <blockquote className="mt-6 bg-pine/10 border-l-4 border-pine rounded-r-2xl px-6 py-5">
              <p className="text-[15px] text-white/80 italic leading-relaxed">
                &ldquo;Bir perde yalnızca görsel değil, teknik bir üründür.
                Mekanizması sesi keser, kumaşı ışığı filtreler,
                çerçevesi ısıyı tutar. Biz bu üç işlevi aynı anda karşılamayı
                <strong className="text-white not-italic"> tek kez</strong> yapıyoruz.&rdquo;
              </p>
              <footer className="mt-3 text-[13px] text-pine font-semibold">— Fenetre Systems, Üretim Ekibi</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
