'use client'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      aria-label="Ana hero bölümü"
    >
      {/* Dekoratif plise arka plan */}
      <div className="absolute inset-0 plise-texture pointer-events-none" aria-hidden="true" />

      {/* Sağ taraf yeşil blok */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[42%] bg-pine-light hidden lg:block"
        style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)' }}
        aria-hidden="true"
      />

      {/* Dekoratif büyük yazı */}
      <span
        className="absolute -right-8 top-1/2 -translate-y-1/2 text-[140px] lg:text-[180px] font-black text-pine/[0.05] select-none hidden md:block tracking-tighter leading-none"
        aria-hidden="true"
      >
        PLISE
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Sol kolon: İçerik */}
          <div className="max-w-xl">
            {/* Üst rozet */}
            <div className="inline-flex items-center gap-2 bg-pine/10 border border-pine/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-pine inline-block animate-pulse" aria-hidden="true" />
              <span className="text-[12px] font-semibold text-slate tracking-wide uppercase">
                Fenetre Systems · Gebze Üretim
              </span>
            </div>

            <h1 className="text-[42px] sm:text-[52px] lg:text-[58px] font-black text-ink leading-[1.08] tracking-tight mb-6">
              <span className="block"><strong className="highlight-text">Plise Perde</strong></span>
              <span className="block text-slate">Montajının</span>
              <span className="block text-pine">Doğru Adresi</span>
            </h1>

            <div className="space-y-4 mb-8 text-[16px] lg:text-[17px] text-mist leading-relaxed">
              <p>
                Fabrikamızdan çıkan her <strong className="text-ink">plise perde</strong>, milimetrik ölçüye göre üretilir.
                Kasaya vidali, banta yapışmalı ya da çerçeveli — hangi montaj yöntemi pencereye uygunsa o uygulanır.
              </p>
              <p>
                Türkiye'nin 81 iline montajlı teslimat; <em>Almanya, Hollanda, Belçika, Fransa</em> ve diğer Avrupa
                ülkelerine 4-10 iş günü içinde kapıya ulaşır.
              </p>
            </div>

            {/* CTA Butonları */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20montaj%C4%B1%20i%C3%A7in%20teklif%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-pine text-white font-bold px-8 py-4 rounded-full text-[15px] hover:bg-[#6fab6d] transition-all shadow-lg shadow-pine/25 hover:shadow-xl hover:shadow-pine/30 hover:-translate-y-0.5"
              >
                <WhatsAppSvg />
                Ücretsiz Teklif Al
              </a>
              <a
                href="tel:+905403363873"
                className="inline-flex items-center justify-center gap-3 bg-white border-2 border-slate text-slate font-bold px-8 py-4 rounded-full text-[15px] hover:bg-slate hover:text-white transition-all"
              >
                <PhoneSvg />
                Hemen Ara
              </a>
            </div>

            {/* Güven rozetleri */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <FactoryIcon />, text: 'Fabrikadan Garantili' },
                { icon: <TruckIcon />, text: 'Avrupa\'ya 4–10 Gün' },
                { icon: <MeasureIcon />, text: 'Özel Ölçü Üretim' },
                { icon: <ShieldIcon />, text: '2 Yıl Garanti' },
              ].map((b, i) => (
                <span key={i} className="trust-badge">
                  {b.icon}
                  {b.text}
                </span>
              ))}
            </div>
          </div>

          {/* Sağ kolon: SVG İllüstrasyon */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Dekoratif daire */}
              <div
                className="absolute -inset-8 rounded-full border-2 border-pine/15"
                aria-hidden="true"
              />
              <div
                className="absolute -inset-16 rounded-full border border-pine/8"
                aria-hidden="true"
              />
              {/* Pencere SVG */}
              <WindowSvg />
              {/* Floating stat kartları */}
              <div className="absolute -left-6 top-8 bg-white rounded-2xl shadow-xl p-4 border border-border hidden sm:block">
                <div className="text-[28px] font-black text-pine leading-none">10+</div>
                <div className="text-[12px] text-mist font-medium mt-0.5">Yıl Deneyim</div>
              </div>
              <div className="absolute -right-4 bottom-12 bg-white rounded-2xl shadow-xl p-4 border border-border hidden sm:block">
                <div className="text-[28px] font-black text-slate leading-none">6</div>
                <div className="text-[12px] text-mist font-medium mt-0.5">Avrupa Ülkesi</div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-pine text-white rounded-2xl shadow-xl px-5 py-3 hidden sm:block whitespace-nowrap">
                <div className="text-[12px] font-semibold text-center">Montajlı Teslimat</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt iç link çubuğu */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-border hidden lg:block">
        <div className="max-w-7xl mx-auto px-8 py-3 flex items-center gap-6 overflow-x-auto">
          <span className="text-[12px] text-fog font-medium shrink-0">Ürünler:</span>
          {[
            ['Plise Perde', '/'],
            ['Pliseli Perde', '/'],
            ['Gece Gündüz Plise Perde', '/'],
            ['Honeycomb Plise Perde', '/'],
            ['Saten Plise Perde', '/'],
            ['Tül Plise Perde', '/'],
            ['Keten Plise Perde', '/'],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-[12px] text-mist hover:text-pine font-medium transition-colors shrink-0 underline-offset-2 hover:underline"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function WindowSvg() {
  const slats = Array.from({ length: 18 }, (_, i) => i)
  return (
    <svg
      width="320"
      height="400"
      viewBox="0 0 320 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Plise perde pencere illüstrasyonu"
      role="img"
      className="drop-shadow-xl"
    >
      {/* Dış pencere çerçevesi */}
      <rect x="10" y="10" width="300" height="380" rx="8" fill="white" stroke="#404e5e" strokeWidth="6" />
      {/* Üst ray */}
      <rect x="10" y="10" width="300" height="36" rx="8" fill="#404e5e" />
      {/* Kontrol düğmesi */}
      <circle cx="278" cy="28" r="8" fill="#83bd81" />
      <circle cx="278" cy="28" r="4" fill="white" />
      {/* Sol kordon */}
      <line x1="48" y1="46" x2="48" y2="380" stroke="#83bd81" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Sağ kordon */}
      <line x1="272" y1="46" x2="272" y2="380" stroke="#83bd81" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Plise katlar */}
      {slats.map((i) => {
        const y = 56 + i * 18
        const isFold = i % 2 === 0
        return (
          <g key={i}>
            <path
              d={`M24,${y} Q160,${y - 5} 296,${y}`}
              fill={isFold ? 'rgba(131,189,129,0.12)' : 'rgba(64,78,94,0.04)'}
              stroke={isFold ? '#83bd81' : '#c8d8c8'}
              strokeWidth={isFold ? 1.5 : 0.8}
            />
          </g>
        )
      })}
      {/* Alt ağırlık çubuğu */}
      <rect x="24" y="374" width="272" height="8" rx="4" fill="#404e5e" opacity="0.6" />
    </svg>
  )
}

function WhatsAppSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
function PhoneSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 12 19.79 19.79 0 012 3.18 2 2 0 014 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}
function FactoryIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 20V8l7-4v4l7-4v16H2z" /><path d="M22 20V10l-6 4" /><rect x="8" y="14" width="3" height="6" /><rect x="13" y="14" width="3" height="6" />
    </svg>
  )
}
function TruckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" /><path d="M16 8h4l3 5v4h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}
function MeasureIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12h20M12 2v20M7 7l10 10M17 7L7 17" />
    </svg>
  )
}
function ShieldIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
