import Link from 'next/link'

const mainProducts = [
  {
    slug: 'plise-perde',
    name: 'Plise Perde',
    desc: 'Akordeon katlama sistemiyle çalışan tek katmanlı model. Hem yarı geçirgen hem karartmalı seçenekleri mevcuttur. Cam balkon, teras ve iç mekan pencereleri için uygundur.',
    badge: 'En Çok Tercih',
    color: 'border-pine',
    href: '/',
    anchorText: 'Plise Perde',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="#e8f5e8" />
        <rect x="8" y="5" width="24" height="5" rx="2" fill="#83bd81" />
        {[0,1,2,3,4,5].map(i => (
          <path key={i} d={`M9,${14+i*4} Q20,${12+i*4} 31,${14+i*4}`} stroke={i%2===0?'#83bd81':'#a8d0a6'} strokeWidth="1.5" fill="none" />
        ))}
        <rect x="8" y="36" width="24" height="3" rx="1.5" fill="#404e5e" opacity="0.5" />
      </svg>
    ),
  },
  {
    slug: 'gece-gunduz-plise-perde',
    name: 'Gece Gündüz Plise Perde',
    desc: 'Tek çerçevede iki kumaş katmanı barındırır. Gündüz tül filtresi ışığı yumuşatır; akşam karartmalı katman gizliliği tam sağlar.',
    badge: 'Çift Sistem',
    color: 'border-slate',
    href: '/',
    anchorText: 'Gece Gündüz Plise Perde',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="#e8f5e8" />
        <circle cx="14" cy="12" r="5" fill="#fbbf24" opacity="0.7" />
        <path d="M26 8a7 7 0 100 10 5 5 0 010-10z" fill="#404e5e" opacity="0.6" />
        {[0,1,2,3].map(i => (
          <path key={i} d={`M9,${22+i*4} Q20,${20+i*4} 31,${22+i*4}`} stroke={i%2===0?'#83bd81':'#c8e4c7'} strokeWidth="1.5" fill="none" />
        ))}
      </svg>
    ),
  },
  {
    slug: 'honeycomb-plise-perde',
    name: 'Honeycomb Plise Perde',
    desc: 'Petek hücreli çift duvar yapısı, pencere yüzeyinde hava yastığı oluşturur. Isı yalıtımı tek katmanlı pliseden yüzde otuz daha yüksektir.',
    badge: 'Isı Yalıtımlı',
    color: 'border-pine',
    href: '/',
    anchorText: 'Honeycomb Plise Perde',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="#e8f5e8" />
        {[[12,10],[20,10],[28,10],[8,17],[16,17],[24,17],[32,17],[12,24],[20,24],[28,24]].map(([cx,cy],i) => (
          <polygon key={i} points={`${cx},${cy-5} ${cx+4},${cy-2} ${cx+4},${cy+2} ${cx},${cy+5} ${cx-4},${cy+2} ${cx-4},${cy-2}`} fill="none" stroke="#83bd81" strokeWidth="1.2" />
        ))}
      </svg>
    ),
  },
  {
    slug: 'saten-plise-perde',
    name: 'Saten Plise Perde',
    desc: 'Parlak yüzey dokusu mekan içine hafif bir ışıltı katar. Salon ve yatak odası gibi estetik öncelikli alanlarda tercih edilir.',
    badge: 'Premium Kumaş',
    color: 'border-slate',
    href: '/',
    anchorText: 'Saten Plise Perde',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="#e8f5e8" />
        <path d="M8 12 Q14 8 20 12 Q26 16 32 12" stroke="#83bd81" strokeWidth="2" fill="none" />
        <path d="M8 18 Q14 14 20 18 Q26 22 32 18" stroke="#83bd81" strokeWidth="2" fill="none" />
        <path d="M8 24 Q14 20 20 24 Q26 28 32 24" stroke="#83bd81" strokeWidth="2" fill="none" />
        <path d="M8 30 Q14 26 20 30 Q26 34 32 30" stroke="#c8e4c7" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    slug: 'tul-plise-perde',
    name: 'Tül Plise Perde',
    desc: 'Şeffaf örgü yapısı odayı karanlıkta bırakmadan dışarıdan görünmeyi engeller. Gündüz kullanımı için optimum seçimdir.',
    badge: 'Işık Filtreli',
    color: 'border-pine',
    href: '/',
    anchorText: 'Tül Plise Perde',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="#e8f5e8" />
        {Array.from({length:5},(_,r)=>Array.from({length:5},(_,c)=>(
          <circle key={`${r}-${c}`} cx={10+c*6} cy={12+r*6} r="1.5" fill="#83bd81" opacity={0.4+r*0.1} />
        )))}
        <rect x="8" y="5" width="24" height="4" rx="2" fill="#404e5e" opacity="0.5" />
      </svg>
    ),
  },
  {
    slug: 'keten-plise-perde',
    name: 'Keten Plise Perde',
    desc: 'Doğal elyaf görünümü modern interyöre organik sıcaklık katar. UV filtresi yüksek, solmaya karşı dirençli bir kumaş yapısıdır.',
    badge: 'Doğal Doku',
    color: 'border-slate',
    href: '/',
    anchorText: 'Keten Plise Perde',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="#e8f5e8" />
        {[0,1,2,3,4].map(i=>(
          <line key={`h${i}`} x1="8" y1={13+i*5} x2="32" y2={13+i*5} stroke="#83bd81" strokeWidth={i%2===0?1.5:0.8} opacity="0.7" />
        ))}
        {[0,1,2,3,4,5].map(i=>(
          <line key={`v${i}`} x1={10+i*5} y1="10" x2={10+i*5} y2="35" stroke="#a8d0a6" strokeWidth="0.8" opacity="0.5" />
        ))}
      </svg>
    ),
  },
  {
    slug: 'baskili-desenli-plise-perde',
    name: 'Baskılı & Desenli Plise',
    desc: 'Dijital baskı teknolojisiyle üretilen kumaşlar mekan kimliğine özgün bir karakter kazandırır. Geometrik, botanik ve soyut desen seçenekleri mevcuttur.',
    badge: 'Özel Tasarım',
    color: 'border-pine',
    href: '/',
    anchorText: 'Pliseli Perde',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="#e8f5e8" />
        <circle cx="14" cy="14" r="5" fill="#83bd81" opacity="0.4" />
        <rect x="20" y="9" width="10" height="10" rx="2" fill="#404e5e" opacity="0.25" />
        <circle cx="14" cy="26" r="4" fill="#c8e4c7" />
        <path d="M20 22 L30 22 L25 32 Z" fill="#83bd81" opacity="0.5" />
      </svg>
    ),
  },
]

const otherProducts = [
  { name: 'Sineklik', desc: 'Çerçeveli ve çerçevesiz sineklik sistemleri' },
  { name: 'Plise Sineklik', desc: 'Akordeon katlama mekanizmalı sineklik' },
  { name: 'Jaluzi Perde', desc: 'Ahşap ve alüminyum jaluzi modelleri' },
  { name: 'Düet Perde', desc: 'Karartma ve tül sisteminin kombinasyonu' },
  { name: 'Zip Perde', desc: 'Dış mekan için rüzgar ve ısı bariyeri' },
]

export default function Products() {
  return (
    <section id="urunler" className="py-20 lg:py-28 bg-white" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Başlık */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-divider" aria-hidden="true" />
          <h2 id="products-heading" className="text-[32px] lg:text-[40px] font-black text-ink mb-4">
            Plise Perde <span className="text-pine">Modelleri</span>
          </h2>
          <p className="text-mist text-[16px] lg:text-[17px] leading-relaxed">
            Her pencere farklıdır; her ihtiyaç özgün bir çözüm gerektirir.
            Fabrikamızda üretilen <strong className="text-ink">10 farklı plise perde modeli</strong>,
            standart ölçüden mansarda açılımlı çatı penceresine kadar tüm konfigürasyonlara yanıt verir.
          </p>
        </div>

        {/* Ana ürünler grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
          {mainProducts.map((p) => (
            <article
              key={p.slug}
              className={`product-card p-6 border-t-4 ${p.color}`}
            >
              <div className="mb-4">{p.icon}</div>
              <div className="inline-flex items-center gap-1.5 bg-pine/10 rounded-full px-3 py-1 mb-3">
                <span className="text-[11px] font-semibold text-pine">{p.badge}</span>
              </div>
              <h3 className="text-[16px] font-bold text-ink mb-2 leading-snug">
                <Link href={p.href} className="hover:text-pine transition-colors">
                  {p.anchorText}
                </Link>
              </h3>
              <p className="text-[13px] text-mist leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>

        {/* Diğer ürünler */}
        <div className="bg-slate-light rounded-2xl p-8 border border-border">
          <h3 className="text-[18px] font-bold text-ink mb-6">
            Tamamlayıcı Ürünler
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {otherProducts.map((op) => (
              <div key={op.name} className="flex flex-col gap-1.5">
                <span className="font-semibold text-[14px] text-slate">{op.name}</span>
                <span className="text-[12px] text-fog">{op.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Satır içi SEO iç bağlantısı */}
        <p className="text-center mt-10 text-[14px] text-mist">
          Tüm modeller için{' '}
          <Link href="/" className="text-pine font-semibold hover:underline">
            plise perde montajı
          </Link>{' '}
          sayfamızdan detaylı bilgi ve fiyat talebi oluşturabilirsiniz.
        </p>
      </div>
    </section>
  )
}
