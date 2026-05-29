import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="homeHero">
      <section className="heroText">
        <p className="smallLabel">Wedding Celebration</p>
        <h1>
          Nataliya
          <span>Robert</span>
        </h1>

        <div className="heroDetails">
          <p>24th October 2026</p>
          <p>Hotel Sant Pere del Bosc</p>
          <p>Lloret de Mar</p>
        </div>

        <Link href="/rsvp" className="yellowButton">
          Private RSVP
        </Link>
      </section>
    </main>
  )
}