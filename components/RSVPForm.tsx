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
      dietary: form.get('dietary'),
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
          <option value="Yes">Yes, joyfully attending</option>
          <option value="No">Sorry, cannot attend</option>
        </select>

        <input name="guests" type="number" placeholder="Number of guests" min="1" />

        <input className="full" name="dietary" placeholder="Dietary requirements" />

        <textarea
          className="full"
          name="message"
          placeholder="Message for the couple"
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