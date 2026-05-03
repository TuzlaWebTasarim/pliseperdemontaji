import Link from 'next/link'

const europeCountries = [
  {
    flag: '🇩🇪',
    name: 'Almanya',
    detail: 'Bayern, NRW, Baden-Württemberg başta olmak üzere tüm eyaletlere DHL Express ile teslimat.',
    delivery: '5-7 gün',
    products: ['Plise Perde', 'Sineklik', 'Zip Perde'],
  },
  {
    flag: '🇳🇱',
    name: 'Hollanda',
    detail: 'Amsterdam, Rotterdam, Den Haag ve tüm şehirlere. Konut projeleri ve müteahhitlere toplu teslimat.',
    delivery: '5-7 gün',
    products: ['Plise Perde', 'Düet Perde', 'Honeycomb'],
  },
  {
    flag: '🇧🇪',
    name: 'Belçika',
    detail: 'Flaman ve Valon bölgelerine düzenli sevkiyat. Fransızca fatura desteği mevcuttur.',
    delivery: '6-8 gün',
    products: ['Sineklik', 'Ahşap Jaluzi', 'Plise Perde'],
  },
  {
    flag: '🇫🇷',
    name: 'Fransa',
    detail: 'Paris Île-de-France ve Auvergne-Rhône-Alpes bölgelerine özel ölçülü perde sistemleri.',
    delivery: '6-9 gün',
    products: ['Sineklik', 'Zip Perde', 'Düet Perde'],
  },
  {
    flag: '🇦🇹',
    name: 'Avusturya',
    detail: 'Viyana ve Salzburg başta olmak üzere villa ve rezidans projelerine honeycomb ve zip perde.',
    delivery: '6-8 gün',
    products: ['Honeycomb', 'Zip Perde', 'Ahşap Jaluzi'],
  },
  {
    flag: '🇨🇭',
    name: 'İsviçre',
    detail: 'Almanca ve Fransızca konuşulan bölgelere motorize sistemler dahil kapsamlı ürün yelpazesi.',
    delivery: '7-10 gün',
    products: ['Düet Perde', 'Motorize Zip', 'Sineklik'],
  },
]

const turkeyRegions = [
  { region: 'Marmara', cities: 'İstanbul, Kocaeli, Bursa, Sakarya, Tekirdağ' },
  { region: 'Ege', cities: 'İzmir, Manisa, Muğla, Denizli, Aydın' },
  { region: 'Akdeniz', cities: 'Antalya, Mersin, Adana, Hatay, Isparta' },
  { region: 'İç Anadolu', cities: 'Ankara, Konya, Kayseri, Eskişehir, Sivas' },
  { region: 'Karadeniz', cities: 'Trabzon, Samsun, Zonguldak, Ordu, Rize' },
  { region: 'Doğu Anadolu', cities: 'Erzurum, Malatya, Elazığ, Van, Ağrı' },
  { region: 'G.Doğu Anadolu', cities: 'Gaziantep, Şanlıurfa, Diyarbakır, Adıyaman' },
]

export default function ServiceRegions() {
  return (
    <section id="bolgeler" className="py-20 lg:py-28 bg-[#f4f9f4]" aria-labelledby="regions-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-divider" aria-hidden="true" />
          <h2 id="regions-heading" className="text-[32px] lg:text-[40px] font-black text-ink mb-4">
            Hizmet <span className="text-pine">Bölgeleri</span>
          </h2>
          <p className="text-mist text-[16px] leading-relaxed">
            Gebze fabrikamızdan Türkiye'nin 81 iline montajlı teslimat;
            <strong className="text-ink"> Avrupa'nın 6 ülkesine</strong> kapıya teslim.
            Aracısız, doğrudan fabrikadan.
          </p>
        </div>

        {/* Avrupa ülkeleri */}
        <h3 className="text-[20px] font-bold text-ink mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-pine flex items-center justify-center text-white text-[14px] font-bold">EU</span>
          Avrupa Teslimat Haritası
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {europeCountries.map((c) => (
            <article key={c.name} className="bg-white rounded-2xl p-6 border border-border hover-lift shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[32px]" role="img" aria-label={c.name}>{c.flag}</span>
                <div>
                  <h4 className="text-[16px] font-bold text-ink">{c.name}</h4>
                  <span className="text-[12px] text-pine font-semibold">⏱ {c.delivery} içinde kapıya</span>
                </div>
              </div>
              <p className="text-[13px] text-mist leading-relaxed mb-4">{c.detail}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.products.map((p) => (
                  <span key={p} className="text-[11px] bg-pine/10 text-pine font-medium px-2.5 py-1 rounded-full">
                    {p}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Diğer Avrupa ülkeleri notu */}
        <div className="bg-pine/10 border border-pine/20 rounded-2xl px-6 py-4 mb-14 flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-0.5" aria-hidden="true">
            <circle cx="10" cy="10" r="9" stroke="#83bd81" strokeWidth="1.5" />
            <path d="M10 9v5" stroke="#83bd81" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="10" cy="6.5" r="1" fill="#83bd81" />
          </svg>
          <p className="text-[14px] text-slate">
            <strong>İspanya, İtalya, Polonya, Çekya, Avustralya</strong> ve diğer tüm Avrupa ülkelerine de teslimat yapılmaktadır.
            Teslimat süresi ülkeye göre değişir; kesin bilgi için{' '}
            <a href="https://wa.me/905403363873" target="_blank" rel="noopener noreferrer" className="text-pine font-semibold hover:underline">
              WhatsApp üzerinden soru sorabilirsiniz.
            </a>
          </p>
        </div>

        {/* Türkiye bölgeleri */}
        <h3 className="text-[20px] font-bold text-ink mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-slate flex items-center justify-center text-white text-[12px] font-bold">TR</span>
          Türkiye Geneli Montajlı Teslimat
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full text-[13px]" role="table">
            <thead className="bg-[#f4f9f4]">
              <tr>
                <th scope="col" className="px-5 py-3 font-semibold text-slate text-left">Bölge</th>
                <th scope="col" className="px-5 py-3 font-semibold text-slate text-left">Kapsanan İller</th>
                <th scope="col" className="px-5 py-3 font-semibold text-slate text-left">Hizmet</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-border">
              {turkeyRegions.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? '' : 'bg-[#fafff9]'}>
                  <td className="px-5 py-3 font-semibold text-slate whitespace-nowrap">{r.region}</td>
                  <td className="px-5 py-3 text-mist">{r.cities}</td>
                  <td className="px-5 py-3">
                    <span className="inline-flex items-center gap-1 text-pine text-[12px] font-semibold">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6l2.5 2.5L10 3" stroke="#83bd81" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      Montajlı Teslimat
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* İç bağlantı */}
        <p className="text-center mt-8 text-[14px] text-mist">
          Tüm bölgelerde{' '}
          <Link href="/" className="text-pine font-semibold hover:underline">
            cam balkon plise perde
          </Link>{' '}
          ve{' '}
          <Link href="/" className="text-pine font-semibold hover:underline">
            yarı plise perde montajı
          </Link>{' '}
          dahil tüm modeller geçerlidir.
        </p>
      </div>
    </section>
  )
}
