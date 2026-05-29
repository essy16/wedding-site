'use client'

import useLang from '@/hooks/useLang'
import { copy } from '@/lib/siteContent'

export default function AccommodationPage() {
  const lang = useLang()
  const t = copy[lang].accommodation

  const hotels =
    lang === 'en'
      ? [
          {
            name: 'Hotel Sant Pere del Bosc',
            text: 'Luxury countryside hotel and wedding venue.',
          },
          {
            name: 'Lloret Town Hotels',
            text: 'Convenient accommodation close to restaurants, beaches and transport.',
          },
        ]
      : [
          {
            name: 'Hotel Sant Pere del Bosc',
            text: 'Hotel rural de lujo y lugar de celebración de la boda.',
          },
          {
            name: 'Hoteles en Lloret',
            text: 'Alojamiento cómodo cerca de restaurantes, playas y transporte.',
          },
        ]

  return (
    <main className="pageWrap">
      <p className="smallLabel">{t.label}</p>
      <h1>{t.title}</h1>

      <p className="pageText">{t.text}</p>

      <div className="faqGrid">
        {hotels.map((hotel) => (
          <div className="faqCard" key={hotel.name}>
            <h3>{hotel.name}</h3>
            <p>{hotel.text}</p>
          </div>
        ))}
      </div>
    </main>
  )
}