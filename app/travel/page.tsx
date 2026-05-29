'use client'

import InfoPage from '@/components/InfoPage'
import useLang from '@/hooks/useLang'
import { copy } from '@/lib/siteContent'

export default function TravelPage() {
  const lang = useLang()
  const t = copy[lang].travel

  return (
    <InfoPage
      label={t.label}
      title={t.title}
      text={t.text}
    >
      <a
        href="https://www.hotelsantperedelbosc.com/en"
        target="_blank"
        rel="noopener noreferrer"
        className="yellowButton"
      >
        {t.cta}
      </a>
    </InfoPage>
  )
}