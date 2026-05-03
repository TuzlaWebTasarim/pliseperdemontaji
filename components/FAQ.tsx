'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Plise perde montajı nasıl yapılır?',
    a: 'Plise perde montajı dört temel adımdan oluşur: Pencere ölçüsünün milimetrik alınması, uygun montaj braketinin seçimi, braketlerin vidalı veya bantlı yöntemle yerleştirilmesi ve son olarak perde kasasının ray üzerine oturtulması. Standart bir pencere için montaj süresi 15-25 dakikadır. Fabrikamızın Türkiye ekibi tüm bu aşamaları yerinde gerçekleştirir.',
  },
  {
    q: 'Plise perde ölçüsü nasıl alınır?',
    a: 'Ölçü alımında önce montaj tipi belirlenir. Kasaya (iç) montajda kasa iç genişliği ve yüksekliği; banta (dış çerçeve) montajda cam boyutu esas alınır. Her iki yöntemde de ölçüm en az üç noktadan yapılır; en küçük değer fabrikaya iletilir. Fabrikamız ±1 mm tolerans garantisi verir.',
  },
  {
    q: 'Vidalı mı bantlı montaj mı tercih edilmeli?',
    a: 'Vidalı montaj kalıcı ve sağlamdır; alçıpan, beton, PVC kasa ve ahşap yüzeylerde güvenle uygulanır. Bantlı montaj (çift taraflı köpük bant) düzgün PVC veya alüminyum çerçeveler için uygundur ve delik açılmaz. Ağırlığı 3 kg/m²yi aşan perdeler için vidalı yöntem önerilir.',
  },
  {
    q: 'Plise perde ve honeycomb perde arasındaki fark nedir?',
    a: 'Standart plise, tek katmanlı akordeon katlı kumaştan oluşur; hafif ve ekonomiktir. Honeycomb (petek) perde ise çift duvarlı petek yapısıyla bir hava yastığı oluşturur; ısı yalıtım değeri standart pliseden %30 daha yüksektir. Kışın soğuk, yazın sıcak tutar. Enerji tasarrufu öncelikli projelerde honeycomb tercih edilir.',
  },
  {
    q: 'Gece gündüz plise perde nasıl çalışır?',
    a: 'Tek bir çerçeve içinde iki ayrı kumaş rayı yer alır. Üst ray tül (şeffaf) kumaş, alt ray blackout (karartmalı) kumaş taşır. Gündüz yalnızca tül katmanı kullanılarak dışarıdan görünüm engellenir, ışık ise mekan içine yumuşakça filtre edilir. Akşam her iki katman birlikte kullanıldığında tam karartma ve gizlilik sağlanır.',
  },
  {
    q: 'Cam balkon için hangi plise perde tercih edilmeli?',
    a: 'Cam balkon ve büyük açıklıklar için yan kılavuzlu plise perde sistemi önerilir. Yan kılavuz profil, kumaşın rüzgarda sallanmasını önler ve tam kapanma sağlar. Isı yalıtımı önemliyse honeycomb, görünüm estetiği öncelikliyse saten ya da keten plise perde uygundur. Büyük açıklıklarda motorize sistem de tercih edilebilir.',
  },
  {
    q: 'Plise perde temizliği nasıl yapılır?',
    a: 'Toz almak için hafif nemli bir bez yeterlidir; yatay katlara paralel doğrultuda silinir. Deterjan kullanılması kumaş yüzeyine zarar verebilir; nötr pH\'lı ıslak bez tercih edilmeli. Fiberglas tül kumaşlar için yumuşak fırça veya elektrikli süpürge eki uygundur. Yıkama makinesi kesinlikle önerilmez.',
  },
  {
    q: 'Avrupa\'ya teslimat süresi ne kadar?',
    a: 'Sipariş onayının ardından üretim 2-4 iş günü, kargo aşaması ise 2-6 iş günü sürer. Almanya, Hollanda ve Belçika\'ya toplam 5-7; Fransa ve Avusturya\'ya 6-8; İsviçre\'ye 7-10 iş günü içinde teslimat yapılır. Yüksek sezonda (Nisan–Ağustos) +1-2 iş günü eklenebilir. Takip numarası sipariş onayıyla birlikte iletilir.',
  },
  {
    q: 'Plise perde garantisi var mı?',
    a: 'Evet. Fabrikamız tüm ürünlerde 2 yıl mekanik ve kumaş garantisi verir. Mekanik arıza (ray, braketi, kordon kopması) ile kumaş üretim hatası bu kapsama girer. Normal kullanım aşınması, UV solması ve yanlış montajdan kaynaklanan hasarlar garanti dışıdır. Garanti belgesi ürünle birlikte gönderilir.',
  },
  {
    q: 'Özel ölçü sipariş verebilir miyim?',
    a: 'Tüm siparişlerimiz özel ölçülüdür; stoktan hazır ürün satılmaz. Minimum genişlik 20 cm, maksimum genişlik tek parçada 300 cm, yükseklik ise 400 cm\'e kadar üretilebilir. Bu ölçüleri aşan açıklıklarda birden fazla kanat uygulanır. Trapez veya üçgen şekilli pencereler için teknik çizim talep edilir.',
  },
  {
    q: 'Yarı ve tam karartma plise perde farkı nedir?',
    a: 'Yarı karartma (blackout) kumaş ışığın %85-95\'ini keser; pencereden hafif bir parlama geçer. Tam karartma kumaş ise %99-100 ışık blokajı sağlar; özellikle uyku odaları ve sinema odaları için uygundur. Tam karartmada kenar sızdırmazlığı için yan kılavuz profil kullanılması gerekir; aksi takdirde kenarlarda ışık kaçağı oluşabilir.',
  },
  {
    q: 'Büyük pencereler için plise perde uygun mu?',
    a: 'Evet. 200 cm\'ye kadar genişlikte tek kanat üretim mümkündür. Daha geniş açıklıklarda iki veya üç kanatlı sistem uygulanır; kanatlar arasına ince bölücü profil yerleştirilir. Yükseklik 300 cm\'yi geçen pencerelerde kumaş sarkmasını önlemek için orta kordon desteği eklenir.',
  },
  {
    q: 'Plise perde fiyatları nelere göre değişir?',
    a: 'Fiyatı belirleyen başlıca etkenler: pencere alanı (en x yükseklik), kumaş tipi (standart, saten, blackout, honeycomb), montaj yöntemi (vidalı, bantlı, kasaya) ve ek özellikler (motorize, gece gündüz çift kumaş). Honeycomb ve motorize sistemler standart pliseden daha yüksek maliyetlidir. Kesin fiyat için ölçünüzü WhatsApp\'tan paylaşabilirsiniz.',
  },
  {
    q: 'Bayilik veya toplu sipariş imkanı var mı?',
    a: 'Fenetre Systems aktif olarak Türkiye ve Avrupa\'da bölge bayisi almaktadır. Toplu siparişlerde (10+ ürün) özel fiyat ve öncelikli üretim hattı uygulanır. Müteahhitler, iç mimar firmaları ve yapı marketleri için özel fiyat teklifleri hazırlanabilir. Bayilik başvurusu için WhatsApp hattımızdan iletişime geçebilirsiniz.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="sss" className="py-20 lg:py-28 bg-[#f4f9f4]" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-divider" aria-hidden="true" />
          <h2 id="faq-heading" className="text-[32px] lg:text-[40px] font-black text-ink mb-4">
            Sıkça Sorulan <span className="text-pine">Sorular</span>
          </h2>
          <p className="text-mist text-[16px] leading-relaxed">
            Plise perde montajı hakkında en çok merak edilen konuların tamamı.
            Yanıt bulamazsanız <strong className="text-ink">WhatsApp hattından</strong> direkt sorabilirsiniz.
          </p>
        </div>

        <div className="space-y-3" role="list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              role="listitem"
              className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                openIndex === i ? 'border-pine shadow-sm' : 'border-border'
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-[15px] font-semibold text-ink leading-snug pr-2">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openIndex === i ? 'bg-pine text-white rotate-45' : 'bg-pine/10 text-pine'
                  }`}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div
                  id={`faq-answer-${i}`}
                  className="px-6 pb-6 text-[14px] text-mist leading-relaxed border-t border-border pt-4"
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-pine/10 border border-pine/20 rounded-2xl p-6 text-center">
          <p className="text-[15px] font-semibold text-ink mb-4">
            Aklınızdaki soru burada yoksa direkt sorun:
          </p>
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20hakk%C4%B1nda%20sorum%20var."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pine text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#6fab6d] transition-colors shadow-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp&apos;tan Soru Sor
          </a>
        </div>
      </div>
    </section>
  )
}
