'use client'

import InfoPage from '@/components/InfoPage'
import useLang from '@/hooks/useLang'
import { copy } from '@/lib/siteContent'

export default function ThingsToDoPage() {
  const lang = useLang()
  const t = copy[lang].things

  return (
    <InfoPage
      label={t.label}
      title={t.title}
      text={t.text}
    />
  )
}