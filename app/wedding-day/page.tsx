'use client'

import useLang from '@/hooks/useLang'
import { copy, schedule } from '@/lib/siteContent'

export default function WeddingDayPage() {
  const lang = useLang()
  const t = copy[lang].weddingDay

  return (
    <main className="pageWrap">
      <p className="smallLabel">{t.label}</p>
      <h1>{t.title}</h1>

      <div className="scheduleList verticalSchedule">
        {schedule[lang].map(([time, title, detail]) => (
          <div className="scheduleCard verticalScheduleCard" key={time}>
            <span>{time}</span>

            <div>
              <h3>{title}</h3>
              <p>{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}