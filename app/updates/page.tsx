'use client'

import InfoPage from '@/components/InfoPage'
import useLang from '@/hooks/useLang'
import { copy } from '@/lib/siteContent'

export default function UpdatesPage() {
  const lang = useLang()
  const t = copy[lang].updates

  return (
    <InfoPage
      label={t.label}
      title={t.title}
    >
      <div className="updateCard">
        <h3>{t.cardTitle}</h3>
        <p>{t.cardText}</p>
      </div>
    </InfoPage>
  )
}