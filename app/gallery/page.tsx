'use client'

import useLang from '@/hooks/useLang'
import { copy } from '@/lib/siteContent'

export default function GalleryPage() {
  const lang = useLang()
  const t = copy[lang].gallery

  return (
    <main className="pageWrap">
      <p className="smallLabel">{t.label}</p>
      <h1>{t.title}</h1>

      <p className="pageText">
        {lang === 'en'
          ? 'A collection of memories, inspiration, and moments leading up to our wedding celebration.'
          : 'Una colección de recuerdos, inspiración y momentos previos a nuestra celebración de boda.'}
      </p>

      <div className="galleryGrid">
        <img src="/assets/wp1.jpg" alt="Wedding style" />
        <img src="/assets/detail.jpg" alt="Wedding detail" />
        <img src="/assets/venue.jpg" alt="Wedding venue" />
      </div>
    </main>
  )
}