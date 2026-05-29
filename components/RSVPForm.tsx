'use client'

import { useState } from 'react'

export default function RSVPForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = new FormData(e.currentTarget)

    const data = {
      full_name: form.get('full_name'),
      email: form.get('email'),
      attending: form.get('attending'),
      guests: form.get('guests'),
      guest_names: form.get('guest_names'),
      dietary: form.get('dietary'),
      accessibility: form.get('accessibility'),
      message: form.get('message'),
    }

    console.log(data)

    setLoading(false)
    setSuccess(true)
    e.currentTarget.reset()
  }

  return (
    <form className="rsvpCard" onSubmit={handleSubmit}>
      <div className="formGrid">
        <input name="full_name" placeholder="Full name" required />
        <input name="email" type="email" placeholder="Email address" required />

        <select name="attending" required>
          <option value="">Will you attend?</option>
          <option value="Yes">Yes, I/we will attend</option>
          <option value="No">Sorry, I/we cannot attend</option>
        </select>

        <input name="guests" type="number" placeholder="Number of guests" min="1" />

        <input name="guest_names" className="full" placeholder="Names of all guests" />

        <input name="dietary" className="full" placeholder="Dietary requirements / allergies" />

        <input name="accessibility" className="full" placeholder="Accessibility needs, if any" />

        <textarea
          className="full"
          name="message"
          placeholder="Message for Robert & Nataliya"
          rows={5}
        />

        <button className="submitBtn full" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit RSVP ♡'}
        </button>
      </div>

      {success && <p className="success">Thank you — your RSVP has been received.</p>}
    </form>
  )
}