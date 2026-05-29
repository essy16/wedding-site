'use client'

import { useState } from 'react'
import RSVPForm from '@/components/RSVPForm'
import Reveal from '@/components/Reveal'
import { content, schedule, Lang } from '@/lib/content'

export default function HomePage() {
  const [lang, setLang] = useState<Lang>('en')
  const t = content[lang]

  return (
    <main>
      <header className="nav">
        <a href="#" className="logo">R & B</a>

        <nav>
          <a href="#story">Our Story</a>
          <a href="#schedule">Schedule</a>
          <a href="#travel">Travel</a>
          <a href="#gallery">Gallery</a>
          <a href="#rsvp">RSVP</a>
        </nav>

        <button className="lang" onClick={() => setLang(lang === 'en' ? 'es' : 'en')}>
          {lang === 'en' ? 'ES' : 'EN'}
        </button>
      </header>

      <section className="hero">
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">Together with our families</p>
          <h1>Robert & Bastien</h1>
          <p className="heroMeta">29 June 2025 • Marbella, Spain</p>
          <a href="#rsvp" className="goldBtn">Kindly RSVP</a>
        </div>
      </section>

      <Reveal>
        <section id="story" className="section intro">
          <p className="eyebrow gold">Our Story</p>
          <h2>{t.storyTitle}</h2>
          <p>{t.story}</p>
        </section>
      </Reveal>

      <Reveal>
        <section id="schedule" className="section split">
          <div>
            <p className="eyebrow gold">The Day</p>
            <h2>{t.scheduleTitle}</h2>

            <div className="timeline">
              {schedule.map((item) => (
                <div className="timelineItem" key={item.time}>
                  <div className="time">{item.time}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="imageCard">
            <img src="/assets/table.jpg" alt="Luxury wedding table setting" />
            <p>We are so excited to celebrate this special day with you.</p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="travel" className="section travel">
          <p className="eyebrow gold">Travel & Accommodation</p>
          <h2>{t.travelTitle}</h2>
          <p>{t.travel}</p>
        </section>
      </Reveal>

      <Reveal>
        <section id="gallery" className="section gallery">
          <p className="eyebrow gold">Gallery</p>
          <h2>Moments & Memories</h2>

          <div className="galleryGrid">
            <img src="/assets/detail.jpg" alt="Wedding detail" />
            <img src="/assets/flowers.jpg" alt="Wedding flowers" />
            <img src="/assets/venue.jpg" alt="Wedding venue" />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="rsvp" className="section rsvpSection">
          <div className="rsvpText">
            <p className="eyebrow gold">Kindly Respond</p>
            <h2>{t.rsvpTitle}</h2>
            <p>{t.rsvpText}</p>
          </div>

          <RSVPForm />
        </section>
      </Reveal>
    </main>
  )
}