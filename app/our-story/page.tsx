'use client'

import InfoPage from '@/components/InfoPage'
import useLang from '@/hooks/useLang'
import { copy } from '@/lib/siteContent'

export default function OurStoryPage() {
  const lang = useLang()
  const t = copy[lang].story

  return (
    <main className="pageWrap">
      <p className="smallLabel">{t.label}</p>
      <h1>{t.title}</h1>

      <div className="storyLayout">
        <div>
          <p className="pageText">{t.text}</p>
        </div>

        <div className="storyImage">
          <img
            src="/assets/couple-story.jpg"
            alt="Nataliya and Robert"
          />
        </div>
      </div>
    </main>
  )
}