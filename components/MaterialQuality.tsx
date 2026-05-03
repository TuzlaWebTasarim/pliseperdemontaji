import Link from 'next/link'

const materials = [
  {
    name: 'Polyester Dokuma',
    uv: '%95',
    opacity: 'Yarı Geçirgen',
    durability: '12-15 yıl',
    cleaning: 'Islak bez',
    note: 'Standart plise perdenin temel kumaşı. Renk stabilitesi yüksek.',
  },
  {
    name: 'Saten Dokuma',
    uv: '%92',
    opacity: 'Yarı Geçirgen',
    durability: '10-12 yıl',
    cleaning: 'Kuru bez',
    note: 'Parlak yüzey. Estetik öncelikli alanlarda tercih edilir.',
  },
  {
    name: 'Keten Karışımı',
    uv: '%88',
    opacity: 'Yarı Geçirgen',
    durability: '10-14 yıl',
    cleaning: 'Islak bez',
    note: 'Doğal görünüm. Organik dokuyla modern tarza uyum sağlar.',
  },
  {
    name: 'Blackout Polyester',
    uv: '%99',
    opacity: 'Tam Karartma',
    durability: '12-15 yıl',
    cleaning: 'Islak bez',
    note: 'Yatak odası ve sunum odaları için en yaygın tercih.',
  },
  {
    name: 'Tül (Fiberglas)',
    uv: '%75',
    opacity: 'Şeffaf',
    durability: '8-10 yıl',
    cleaning: 'Fırçalama',
    note: 'Dışarıdan görünmeyi önler, iç mekan aydınlığını korur.',
  },
]

const profiles = [
  { label: 'Üst Ray Profili', material: '6063 T5 alüminyum alaşımı', thick: '1.2 mm', finish: 'Eloksallı / RAL boyalı' },
  { label: 'Alt Ağırlık Profili', material: '6063 T5 alüminyum alaşımı', thick: '1.0 mm', finish: 'Mat anodize' },
  { label: 'Yan Kılavuz', material: 'Fiberglas takviyeli polimer', thick: '—', finish: 'UV dayanımlı' },
  { label: 'Mengene & Braketi', material: 'Çelik / PA66 plastik', thick: '—', finish: 'Galvanizli' },
]

export default function MaterialQuality() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="material-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-divider" aria-hidden="true" />
          <h2 id="material-heading" className="text-[32px] lg:text-[40px] font-black text-ink mb-4">
            Malzeme Kalitesi &{' '}
            <span className="text-pine">Teknik Özellikler</span>
          </h2>
          <p className="text-mist text-[16px] leading-relaxed">
            Uzun ömürlü bir <Link href="/" className="text-pine font-semibold hover:underline">plise perde</Link> için
            kumaş seçimi kadar profil kalitesi de belirleyicidir.
            Fabrikamızda kullanılan tüm hammaddeler{' '}
            <strong className="text-ink">Avrupa tedarikçilerinden</strong> temin edilir.
          </p>
        </div>

        {/* Kumaş tablosu */}
        <h3 className="text-[18px] font-bold text-ink mb-5">Kumaş Karşılaştırması</h3>
        <div className="overflow-x-auto rounded-2xl border border-border shadow-sm mb-14">
          <table className="w-full text-[13px]" role="table">
            <thead className="bg-[#f4f9f4]">
              <tr>
                <th scope="col" className="px-5 py-3 font-semibold text-slate text-left">Kumaş</th>
                <th scope="col" className="px-5 py-3 font-semibold text-slate text-left">UV Filtresi</th>
                <th scope="col" className="px-5 py-3 font-semibold text-slate text-left">Opaklık</th>
                <th scope="col" className="px-5 py-3 font-semibold text-slate text-left">Ömür</th>
                <th scope="col" className="px-5 py-3 font-semibold text-slate text-left">Temizlik</th>
                <th scope="col" className="px-5 py-3 font-semibold text-slate text-left">Not</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-border">
              {materials.map((m, i) => (
                <tr key={i} className={i % 2 === 0 ? '' : 'bg-[#fafff9]'}>
                  <td className="px-5 py-3 font-semibold text-ink">{m.name}</td>
                  <td className="px-5 py-3 text-pine font-semibold">{m.uv}</td>
                  <td className="px-5 py-3 text-mist">{m.opacity}</td>
                  <td className="px-5 py-3 text-mist">{m.durability}</td>
                  <td className="px-5 py-3 text-mist">{m.cleaning}</td>
                  <td className="px-5 py-3 text-fog text-[12px]">{m.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Profil sistemi */}
        <h3 className="text-[18px] font-bold text-ink mb-5">Alüminyum Profil Sistemi</h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {profiles.map((p, i) => (
            <div key={i} className="bg-[#f4f9f4] rounded-xl p-5 border border-border">
              <div className="text-[14px] font-bold text-ink mb-2">{p.label}</div>
              <div className="space-y-1 text-[13px] text-mist">
                <div><span className="font-medium text-slate">Malzeme:</span> {p.material}</div>
                {p.thick !== '—' && <div><span className="font-medium text-slate">Kalınlık:</span> {p.thick}</div>}
                <div><span className="font-medium text-slate">Yüzey:</span> {p.finish}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Özellik listesi */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: 'Sessiz Mekanizma', desc: 'Tüm raylı sistemler kaydırma sesi yaratmaz. Yatak odası kullanımında konfor sağlar.' },
            { title: 'Çift Taraflı Kordon', desc: 'Güvenlik standardı gereği çocuk erişimine karşı güvenli IP kordon sistemi uygulanır.' },
            { title: 'Genişletilmiş Renk Paleti', desc: 'Her kumaş tipinde 40 ila 120 renk arasında seçenek. RAL renk kartıyla eşleştirme yapılabilir.' },
            { title: 'Motorize Seçenek', desc: 'Zigbee, RF ve Wi-Fi protokolleri desteklenir. Akıllı ev sistemleriyle uyumlu çalışır.' },
            { title: 'Doğrusal Tolerans', desc: 'Fabrikamız ±1 mm üretim toleransı güvencesi verir. Ölçü farkı 2 mm\'yi aşarsa ürün yenilenir.' },
            { title: 'Oeko-Tex Standard 100', desc: 'Tüm kumaşlar zararlı madde testinden geçer. Alerji hassasiyeti olan mekanlarda güvenle kullanılır.' },
          ].map((f, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-pine/15 flex items-center justify-center shrink-0 mt-0.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8l3 3 7-7" stroke="#83bd81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-[14px] font-bold text-ink mb-1">{f.title}</div>
                <div className="text-[13px] text-mist leading-relaxed">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
