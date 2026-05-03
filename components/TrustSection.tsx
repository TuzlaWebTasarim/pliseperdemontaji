const reviews = [
  {
    name: 'Ahmet K.',
    city: 'İstanbul',
    stars: 5,
    text: 'Balkon pencereleri için honeycomb sipariş ettim. Ölçü milimetrik tuttu, montaj ekibi aynı gün geldi. Isı farkı gözle görülür oldu.',
    date: 'Mart 2025',
  },
  {
    name: 'Marie D.',
    city: 'München, DE',
    stars: 5,
    text: 'Bestellte 8 Plissees für unser Haus. Lieferung in 7 Tagen, perfekte Maße. Sehr zu empfehlen.',
    date: 'Şubat 2025',
  },
  {
    name: 'Fatma Ş.',
    city: 'Ankara',
    stars: 5,
    text: 'Gece gündüz plise perde aldım. Sabah güneşi artık rahatsız etmiyor, akşam tam karartma sağlanıyor. Kalitesi beklentimin çok üzerinde.',
    date: 'Ocak 2025',
  },
  {
    name: 'Luca B.',
    city: 'Amsterdam, NL',
    stars: 5,
    text: 'Snelle levering, goede kwaliteit. Montage instructies waren duidelijk. Aanrader.',
    date: 'Aralık 2024',
  },
  {
    name: 'Mehmet A.',
    city: 'Gebze / Kocaeli',
    stars: 5,
    text: 'Ofis katımızın tamamını yenilettik. Hem zip perde hem sineklik aldık. Fiyat-performans bakımından piyasanın en iyisi.',
    date: 'Kasım 2024',
  },
  {
    name: 'Sandra M.',
    city: 'Bruxelles, BE',
    stars: 5,
    text: 'Commande reçue en 8 jours. Qualité irréprochable, finitions soignées. Service client réactif.',
    date: 'Ekim 2024',
  },
]

const certifications = [
  { label: 'CE Sertifikalı', sub: 'Avrupa Standartları' },
  { label: 'ISO 9001', sub: 'Kalite Yönetim Sistemi' },
  { label: '2 Yıl Garanti', sub: 'Mekanik & Kumaş' },
  { label: 'Oeko-Tex®', sub: 'Çevre Dostu Kumaş' },
]

export default function TrustSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-divider" aria-hidden="true" />
          <h2 id="trust-heading" className="text-[32px] lg:text-[40px] font-black text-ink mb-4">
            Müşteriler <span className="text-pine">Ne Düşünüyor?</span>
          </h2>
          <p className="text-mist text-[16px] leading-relaxed">
            Türkiye ve Avrupa genelinden gerçek kullanıcı deneyimleri.
            Satın alma kararı vermeden önce birinci elden bilgi almak isteyenlere.
          </p>
        </div>

        {/* Yorum kartları */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {reviews.map((r, i) => (
            <article key={i} className="bg-[#f4f9f4] rounded-2xl p-6 border border-border hover:border-pine/40 transition-colors">
              <div className="flex items-center gap-1 mb-3" aria-label={`${r.stars} yıldız`}>
                {Array.from({ length: r.stars }).map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="#f59e0b" aria-hidden="true">
                    <path d="M7 1l1.8 3.6 4 .6-2.9 2.8.7 4L7 10l-3.6 1.9.7-4L1.2 5.2l4-.6L7 1z" />
                  </svg>
                ))}
              </div>
              <blockquote>
                <p className="text-[14px] text-mist leading-relaxed mb-4 italic">&ldquo;{r.text}&rdquo;</p>
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[13px] font-semibold text-ink">{r.name}</div>
                  <div className="text-[12px] text-fog">{r.city}</div>
                </div>
                <div className="text-[11px] text-fog">{r.date}</div>
              </div>
            </article>
          ))}
        </div>

        {/* Sertifikalar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((c, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center py-6 px-4 rounded-2xl border-2 border-pine/20 bg-pine/5 hover:border-pine/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-pine/15 flex items-center justify-center mb-3">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M11 2l2.1 4.3 4.7.7-3.4 3.3.8 4.7L11 12.7l-4.2 2.3.8-4.7L4.2 7l4.7-.7L11 2z" fill="#83bd81" opacity="0.5" />
                  <path d="M8 11l2 2 4-4" stroke="#83bd81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-[15px] font-bold text-ink">{c.label}</div>
              <div className="text-[12px] text-mist mt-0.5">{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
