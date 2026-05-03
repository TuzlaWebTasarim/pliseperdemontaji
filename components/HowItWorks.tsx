const steps = [
  {
    num: '01',
    title: 'Ölçü Alın',
    desc: 'Pencere genişliği ve yüksekliği en dar noktadan ölçülür. Kasaya (iç) veya banta (dış çerçeve) montaj tercihine göre farklı değerler kullanılır. Ölçü formumuzla milimetrik doğruluk sağlanır.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="4" y="14" width="24" height="4" rx="2" fill="#83bd81" />
        {[6,10,14,18,22,26].map(x => (
          <line key={x} x1={x} y1="14" x2={x} y2={x===6||x===26?"10":"12"} stroke="white" strokeWidth="1.5" />
        ))}
        <line x1="16" y1="4" x2="16" y2="14" stroke="#83bd81" strokeWidth="1.5" strokeDasharray="2 2" />
        <line x1="16" y1="18" x2="16" y2="28" stroke="#83bd81" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="16" cy="4" r="2" fill="#83bd81" />
        <circle cx="16" cy="28" r="2" fill="#83bd81" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Model & Kumaş Seçin',
    desc: 'Montaj yöntemi (vidalı/bantlı/çerçeveli), kumaş opaklığı (tül/yarı geçirgen/karartma) ve renk seçimi yapılır. WhatsApp üzerinden kumaş örneği gönderilebilir.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="4" y="4" width="10" height="10" rx="3" fill="#83bd81" opacity="0.6" />
        <rect x="18" y="4" width="10" height="10" rx="3" fill="#83bd81" />
        <rect x="4" y="18" width="10" height="10" rx="3" fill="#404e5e" opacity="0.4" />
        <rect x="18" y="18" width="10" height="10" rx="3" fill="#83bd81" opacity="0.3" />
        <circle cx="22" cy="22" r="4" fill="white" stroke="#83bd81" strokeWidth="2" />
        <path d="M20 22l1.5 1.5L24 20" stroke="#83bd81" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Üretim & Paketleme',
    desc: 'Siparişiniz 2-4 iş gününde fabrikada üretilir. Hasara karşı köpük yataklı, mukavva kılıflı özel ambalajla korunur. Her paket, ürün kimliği ve ölçüsüyle etiketlenir.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="4" y="10" width="24" height="18" rx="3" fill="#e8f5e8" stroke="#83bd81" strokeWidth="1.5" />
        <path d="M4 15h24" stroke="#83bd81" strokeWidth="1.2" />
        <path d="M14 10V6l4-2 4 2v4" stroke="#83bd81" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 20l2.5 2.5L20 17" stroke="#83bd81" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Montajlı Teslimat',
    desc: "Türkiye'de kurulum ekibimiz kapınıza gelir, perdeleri pencereye takar ve kontrol eder. Avrupa'ya kargo teslimatı 4-10 iş günü içinde tamamlanır; montaj kılavuzu ve video desteği sunulur.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="10" width="18" height="12" rx="2" fill="#e8f5e8" stroke="#83bd81" strokeWidth="1.5" />
        <path d="M20 14h5l5 5v3h-10V14z" fill="#e8f5e8" stroke="#83bd81" strokeWidth="1.5" />
        <circle cx="7" cy="24" r="3" fill="white" stroke="#83bd81" strokeWidth="1.5" />
        <circle cx="23" cy="24" r="3" fill="white" stroke="#83bd81" strokeWidth="1.5" />
        <path d="M6 10V6h12v4" stroke="#83bd81" strokeWidth="1.2" strokeDasharray="2 1.5" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="montaj" className="py-20 lg:py-28 bg-[#f4f9f4]" aria-labelledby="hiw-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-divider" aria-hidden="true" />
          <h2 id="hiw-heading" className="text-[32px] lg:text-[40px] font-black text-ink mb-4">
            Plise Perde Montajı{' '}
            <span className="text-pine">Nasıl Yapılır?</span>
          </h2>
          <p className="text-mist text-[16px] leading-relaxed">
            Ölçüden teslimata dört adımlık bir süreç. Her aşamada
            <strong className="text-ink"> teknik destek ekibimiz</strong> yanınızda.
          </p>
        </div>

        {/* Adımlar */}
        <div className="relative">
          {/* Bağlantı çizgisi (masaüstü) */}
          <div className="absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-pine/20 hidden lg:block" aria-hidden="true">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-pine/50 rounded" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-pine/40 transition-all group">
                {/* Numara dairesi */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-pine/10 border-2 border-pine/30 flex items-center justify-center mb-5 group-hover:bg-pine/20 transition-colors">
                  {s.icon}
                </div>
                <span className="absolute top-4 right-5 text-[11px] font-black text-pine/30 tracking-widest">{s.num}</span>
                <h3 className="text-[17px] font-bold text-ink mb-3">{s.title}</h3>
                <p className="text-[13px] text-mist leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Montaj türleri tablosu */}
        <div className="mt-16 overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full text-[13px] text-left" role="table">
            <caption className="text-[15px] font-bold text-ink p-5 text-left bg-white rounded-t-2xl border-b border-border">
              Montaj Yöntemi Karşılaştırması
            </caption>
            <thead className="bg-[#f4f9f4]">
              <tr>
                <th scope="col" className="px-5 py-3 font-semibold text-slate">Yöntem</th>
                <th scope="col" className="px-5 py-3 font-semibold text-slate">Uygun Yüzey</th>
                <th scope="col" className="px-5 py-3 font-semibold text-slate">Süre</th>
                <th scope="col" className="px-5 py-3 font-semibold text-slate">Avantaj</th>
                <th scope="col" className="px-5 py-3 font-semibold text-slate">Dikkat</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-border">
              {[
                ['Vidalı Montaj',     'Alçıpan, beton, ahşap, PVC kasa', '15–20 dk', 'Kalıcı ve sağlam tutuş',       'Delik açılacak'],
                ['Çift Taraflı Bant', 'Düzgün PVC ve alüminyum çerçeve', '5–10 dk',  'Hızlı, deliksiz',              'Max. 3 kg/m²'],
                ['Kasaya Gömme',      'Standart pencere kasası',          '20–30 dk', 'Temiz görünüm, tam örtüş',     'Kasa boşluğu gerekir'],
                ['Çerçeveli Sistem',  'Her türlü düz yüzey',             '30–45 dk', 'Ek çerçeve estetik sağlar',    'Ekstra maliyet'],
              ].map(([y, u, s, a, d], i) => (
                <tr key={i} className={i % 2 === 0 ? '' : 'bg-[#fafff9]'}>
                  <td className="px-5 py-3 font-semibold text-slate">{y}</td>
                  <td className="px-5 py-3 text-mist">{u}</td>
                  <td className="px-5 py-3 text-mist">{s}</td>
                  <td className="px-5 py-3 text-pine font-medium">{a}</td>
                  <td className="px-5 py-3 text-fog">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
