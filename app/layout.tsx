import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Plise Perde Montajı: Hızlı Kurulum, Şık Tasarım',
  description:
    'Plise Perde Montajı: Uzman ekibimizle evinizde profesyonel kurulum hizmeti. Hızlı teslimat, şık tasarımlar ve garantili işçilik.',
  keywords:
    'plise perde montajı, plise perde, pliseli perde, gece gündüz plise perde, honeycomb perde, saten plise perde, cam balkon plise perde, plise perde fiyatları, plise perde montajı nasıl yapılır, keten plise perde',
  metadataBase: new URL('https://pliseperdemontaji.com.tr'),
  alternates: { canonical: 'https://pliseperdemontaji.com.tr' },
  openGraph: {
    title: 'Plise Perde Montajı: Hızlı Kurulum, Şık Tasarım',
    description:
      'Plise Perde Montajı: Uzman ekibimizle evinizde profesyonel kurulum hizmeti. Hızlı teslimat, şık tasarımlar ve garantili işçilik.',
    url: 'https://pliseperdemontaji.com.tr',
    siteName: 'Plise Perde Montajı',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plise Perde Montajı: Hızlı Kurulum, Şık Tasarım',
    description: 'Plise Perde Montajı: Uzman ekibimizle evinizde profesyonel kurulum hizmeti.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.fenetresystems.com/#org',
      name: 'Fenetre Systems',
      url: 'https://www.fenetresystems.com',
      logo: 'https://www.fenetresystems.com/logo.png',
      foundingDate: '2014',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cumhuriyet Mah. 2233 Sok. No:4/A',
        addressLocality: 'Gebze',
        addressRegion: 'Kocaeli',
        addressCountry: 'TR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+90-540-336-3873',
        contactType: 'customer service',
        availableLanguage: ['Turkish', 'German', 'French'],
      },
      sameAs: [
        'https://www.facebook.com/FenetreSystems/',
        'https://www.instagram.com/fenetresystems/',
        'https://x.com/FenetreSystems',
        'https://www.linkedin.com/company/fenetresystems/',
        'https://tr.pinterest.com/fenetresystems/',
        'https://www.youtube.com/@FenetreSystems',
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://pliseperdemontaji.com.tr/#webpage',
      url: 'https://pliseperdemontaji.com.tr',
      name: 'Plise Perde Montajı | Fenetre Systems',
      description:
        'Plise perde montajı rehberi, ürün çeşitleri ve fabrika fiyatları. Türkiye geneli montajlı teslimat.',
      inLanguage: 'tr-TR',
      isPartOf: { '@id': 'https://pliseperdemontaji.com.tr/#website' },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://pliseperdemontaji.com.tr/#localbiz',
      name: 'Fenetre Systems – Plise Perde',
      image: 'https://www.fenetresystems.com/logo.png',
      telephone: '+905403363873',
      email: 'info@fenetresystems.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cumhuriyet Mah. 2233 Sok. No:4/A',
        addressLocality: 'Gebze',
        addressRegion: 'Kocaeli',
        postalCode: '41400',
        addressCountry: 'TR',
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:30', closes: '18:30' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '14:00' },
      ],
      priceRange: '₺₺',
      servesCuisine: undefined,
      areaServed: ['TR','DE','NL','BE','FR','AT','CH'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Plise perde montajı nasıl yapılır?', acceptedAnswer: { '@type': 'Answer', text: 'Plise perde montajı; pencere ölçüsünün milimetrik alınması, uygun ray sisteminin seçimi, sabitleme braketlerinin vida ya da çift taraflı bant ile yerleştirilmesi ve perde kasasının rayın üzerine oturtulması adımlarından oluşur. Montaj süresi pencere başına ortalama 15-25 dakikadır.' } },
        { '@type': 'Question', name: 'Plise perde ölçüsü nasıl alınır?', acceptedAnswer: { '@type': 'Answer', text: 'Pencere genişliği ve yüksekliği en az 3 farklı noktadan ölçülür; en küçük değer esas alınır. Kasaya montajda cam yüzeyi değil, kasa iç genişliği baz alınır. Bant (çerçeve) montajda ise gerçek cam boyutu kullanılır.' } },
        { '@type': 'Question', name: 'Avrupa\'ya teslimat süresi ne kadar?', acceptedAnswer: { '@type': 'Answer', text: 'Sipariş onayından sonra üretim 2-4 iş günü, Almanya, Hollanda, Belçika, Fransa, Avusturya ve İsviçre\'ye kargo ile teslim toplam 4-10 iş günü arasında tamamlanmaktadır.' } },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#83bd81" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased pb-mobile-bar">
        {children}
      </body>
    </html>
  )
}
