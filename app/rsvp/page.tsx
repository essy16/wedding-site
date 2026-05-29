import RSVPForm from '@/components/RSVPForm'

export default function RSVPPage() {
  return (
    <main className="privateRsvpPage">
      <section className="privateRsvpHero">
        <p className="eyebrow gold">Robert & Nataliya</p>
        <h1>Private RSVP</h1>
        <p>
          Please confirm your attendance and provide the required guest details.
        </p>
      </section>

      <section className="privateRsvpWrap">
        <RSVPForm />
      </section>
    </main>
  )
}