'use client'

import { useState } from 'react'

export default function RSVPWizard() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    groupName: '',
    primaryContact: '',
    email: '',
    attending: '',
    guests: '',
    guestNames: '',
    childrenAges: '',
    dietary: '',
    allergies: '',
    accommodation: '',
  })

  function update(name: string, value: string) {
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function next() {
    if (step === 2 && form.attending === 'No') {
      setSubmitted(true)
      return
    }

    setStep((prev) => Math.min(prev + 1, 7))
  }

  function back() {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  function submit() {
    console.log('RSVP visual only:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="wizardCard">
        <h2>Gracias</h2>
        <p>
          Hemos recibido tu confirmación de asistencia. Estamos deseando
          celebrar con vosotros en Lloret de Mar.
        </p>
      </div>
    )
  }

  return (
    <div className="wizardCard">
      <p className="stepCounter">Paso {step} de 7</p>

      {step === 1 && (
        <div className="wizardStep">
          <h2>Datos del Grupo</h2>
          <input
            placeholder="Nombre de la familia o grupo"
            value={form.groupName}
            onChange={(e) => update('groupName', e.target.value)}
          />
          <input
            placeholder="Nombre del contacto principal"
            value={form.primaryContact}
            onChange={(e) => update('primaryContact', e.target.value)}
          />
          <input
            placeholder="Correo electrónico"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
          />
        </div>
      )}

      {step === 2 && (
        <div className="wizardStep">
          <h2>¿Asistirán a la boda?</h2>
          <select
            value={form.attending}
            onChange={(e) => update('attending', e.target.value)}
          >
            <option value="">Seleccionar</option>
            <option value="Yes">Sí</option>
            <option value="No">No</option>
          </select>
        </div>
      )}

      {step === 3 && (
        <div className="wizardStep">
          <h2>Grupo de Invitados</h2>
          <input
            placeholder="Número de invitados"
            value={form.guests}
            onChange={(e) => update('guests', e.target.value)}
          />
          <textarea
            placeholder="Nombres de los invitados y tipo, por ejemplo: invitado principal, pareja, adulto, niño"
            value={form.guestNames}
            onChange={(e) => update('guestNames', e.target.value)}
          />
        </div>
      )}

      {step === 4 && (
        <div className="wizardStep">
          <h2>Niños</h2>
          <textarea
            placeholder="Nombres y edades de los niños"
            value={form.childrenAges}
            onChange={(e) => update('childrenAges', e.target.value)}
          />
        </div>
      )}

      {step === 5 && (
        <div className="wizardStep">
          <h2>Requisitos Alimentarios</h2>
          <select
            value={form.dietary}
            onChange={(e) => update('dietary', e.target.value)}
          >
            <option value="">Seleccionar</option>
            <option value="None">Ninguno</option>
            <option value="Vegetarian">Vegetariano</option>
            <option value="Vegan">Vegano</option>
            <option value="Allergy / Intolerance">Alergia / Intolerancia</option>
          </select>

          {form.dietary === 'Allergy / Intolerance' && (
            <textarea
              placeholder="Por favor indica los detalles de la alergia o intolerancia"
              value={form.allergies}
              onChange={(e) => update('allergies', e.target.value)}
            />
          )}
        </div>
      )}

      {step === 6 && (
        <div className="wizardStep">
          <h2>Alojamiento</h2>
          <select
            value={form.accommodation}
            onChange={(e) => update('accommodation', e.target.value)}
          >
            <option value="">¿Su grupo se alojará en la zona?</option>
            <option value="Yes">Sí</option>
            <option value="No">No</option>
            <option value="Not Sure Yet">Todavía no lo sabemos</option>
          </select>
        </div>
      )}

      {step === 7 && (
        <div className="wizardStep">
          <h2>Resumen</h2>
          <div className="summaryBox">
            <p><strong>Grupo:</strong> {form.groupName}</p>
            <p><strong>Contacto:</strong> {form.primaryContact}</p>
            <p><strong>Correo electrónico:</strong> {form.email}</p>
            <p><strong>Asistencia:</strong> {form.attending === 'Yes' ? 'Sí' : form.attending}</p>
            <p><strong>Invitados:</strong> {form.guests}</p>
            <p><strong>Alojamiento:</strong> {form.accommodation}</p>
          </div>
        </div>
      )}

      <div className="wizardActions">
        {step > 1 && <button onClick={back}>Atrás</button>}
        {step < 7 && <button onClick={next}>Siguiente</button>}
        {step === 7 && <button onClick={submit}>Enviar RSVP</button>}
      </div>
    </div>
  )
}