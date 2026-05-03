import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section id="iletisim" className="py-20 lg:py-28 bg-slate relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Dekoratif plise arka plan */}
      <div className="absolute inset-0 fold-bg opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-pine/20 border border-pine/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-pine inline-block animate-pulse" aria-hidden="true" />
          <span className="text-[12px] font-semibold text-pine-mid uppercase tracking-wider">
            Hemen Başlayın
          </span>
        </div>

        <h2 id="cta-heading" className="text-[36px] lg:text-[52px] font-black text-white leading-tight mb-6">
          Ölçünüzü Gönderin,{' '}
          <span className="text-pine">24 Saat İçinde</span>{' '}
          Teklif Alın
        </h2>

        <p className="text-[16px] lg:text-[18px] text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
          Pencere ölçüsü ve model tercihinizi WhatsApp&#39;tan iletin.
          Üretim bandınız başlasın, siz sadece teslimi bekleyin.
          <span className="text-white"> Türkiye'ye montajlı,</span>{' '}
          <em className="text-pine/90">Avrupa'ya kargolu</em> gönderim.
        </p>

        {/* Büyük CTA butonları */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20montaj%C4%B1%20i%C3%A7in%20teklif%20almak%20istiyorum.%20Pencere%20%C3%B6l%C3%A7%C3%BCm%3A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-pine text-white font-black text-[16px] px-10 py-5 rounded-full hover:bg-[#6fab6d] transition-all shadow-xl shadow-pine/30 hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp Teklif Al
          </a>
          <a
            href="tel:+905403363873"
            className="inline-flex items-center gap-3 bg-white/10 border-2 border-white/30 text-white font-bold text-[16px] px-10 py-5 rounded-full hover:bg-white/20 transition-all w-full sm:w-auto justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 12 19.79 19.79 0 012 3.18 2 2 0 014 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            0540 336 38 73
          </a>
        </div>

        {/* İletişim detayları */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-[14px]">
          {[
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              ),
              label: 'E-Posta',
              value: 'info@fenetresystems.com',
              href: 'mailto:info@fenetresystems.com',
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              ),
              label: 'Adres',
              value: 'Gebze / Kocaeli',
              href: 'https://maps.google.com/?q=Cumhuriyet+Mah+2233+Sok+4A+Gebze+Kocaeli',
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              ),
              label: 'Çalışma Saatleri',
              value: 'Pzt–Cmt 08:30–18:30',
              href: null,
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-white/70">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="text-[12px] text-white/40">{item.label}</div>
              {item.href ? (
                <a href={item.href} className="text-white font-medium hover:text-pine transition-colors text-center text-[13px]">
                  {item.value}
                </a>
              ) : (
                <span className="text-white font-medium text-[13px] text-center">{item.value}</span>
              )}
            </div>
          ))}
        </div>

        {/* Bayilik CTA */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <p className="text-[14px] text-white/50 mb-3">Bölge bayisi olmak ister misiniz?</p>
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20Fenetre%20Systems%20bayilik%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pine font-semibold text-[14px] hover:underline"
          >
            Bayilik için WhatsApp&#39;tan başvurun →
          </a>
        </div>

        {/* İç link */}
        <p className="mt-8 text-[13px] text-white/40">
          <Link href="/" className="text-pine/70 hover:text-pine hover:underline">
            Desenli plise perde
          </Link>
          {' '}ve{' '}
          <Link href="/" className="text-pine/70 hover:text-pine hover:underline">
            tam plise perde montajı
          </Link>
          {' '}modelleri için ana sayfamızı inceleyebilirsiniz.
        </p>
      </div>
    </section>
  )
}
