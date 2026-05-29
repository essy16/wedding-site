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
        <input name="full_name" placeholder="Nombre completo" required />

        <input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          required
        />

        <select name="attending" required>
          <option value="">¿Asistirás?</option>
          <option value="Yes">Sí, asistiré/asistiremos</option>
          <option value="No">Lo siento, no podré/podremos asistir</option>
        </select>

        <input
          name="guests"
          type="number"
          placeholder="Número de invitados"
          min="1"
        />

        <input
          name="guest_names"
          className="full"
          placeholder="Nombres de todos los invitados"
        />

        <input
          name="dietary"
          className="full"
          placeholder="Requisitos alimentarios / alergias"
        />

        <input
          name="accessibility"
          className="full"
          placeholder="Necesidades de accesibilidad, si las hubiera"
        />

        <textarea
          className="full"
          name="message"
          placeholder="Mensaje para Robert y Nataliya"
          rows={5}
        />

        <button className="submitBtn full" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar RSVP ♡'}
        </button>
      </div>

      {success && (
        <p className="success">
          Gracias — hemos recibido tu confirmación de asistencia.
        </p>
      )}
    </form>
  )
}