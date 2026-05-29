'use client'

import useLang from '@/hooks/useLang'
import { copy, faqs } from '@/lib/siteContent'

export default function FAQPage() {
  const lang = useLang()
  const t = copy[lang].faq

  return (
    <main className="pageWrap">
      <p className="smallLabel">{t.label}</p>
      <h1>{t.title}</h1>

      <div className="faqGrid">
        {faqs[lang].map(([q, a]) => (
          <div className="faqCard" key={q}>
            <h3>{q}</h3>
            <p>{a}</p>
          </div>
        ))}
      </div>
    </main>
  )
}