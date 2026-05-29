export type Lang = 'en' | 'es'

export const content = {
  en: {
    nav: ['Story', 'Schedule', 'Travel', 'Gallery', 'RSVP'],
    heroSmall: 'We are getting married',
    title: 'Robert & Belén',
    date: 'Saturday, 14 September 2026',
    place: 'Mallorca, Spain',
    cta: 'RSVP Now',
    storyTitle: 'A celebration of love, family and new beginnings',
    story: 'Join us for a timeless wedding celebration surrounded by the people we love most. More personal text will be added here once supplied.',
    scheduleTitle: 'Wedding Schedule',
    travelTitle: 'Travel & Accommodation',
    travel: 'Venue, accommodation, airport, taxi and local travel details will be added here. This section is designed to support guests travelling internationally.',
    galleryTitle: 'Our Moments',
    rsvpTitle: 'Kindly RSVP',
    rsvpText: 'Please confirm your attendance and dietary requirements below.',
    adminTitle: 'RSVP Responses'
  },
  es: {
    nav: ['Historia', 'Programa', 'Viaje', 'Galería', 'Confirmar'],
    heroSmall: 'Nos casamos',
    title: 'Robert & Belén',
    date: 'Sábado, 14 de septiembre de 2026',
    place: 'Mallorca, España',
    cta: 'Confirmar asistencia',
    storyTitle: 'Una celebración de amor, familia y nuevos comienzos',
    story: 'Acompáñanos en una celebración elegante rodeados de las personas que más queremos. El texto final se añadirá cuando esté disponible.',
    scheduleTitle: 'Programa de la boda',
    travelTitle: 'Viaje y alojamiento',
    travel: 'Aquí se añadirán los detalles del lugar, alojamiento, aeropuerto, taxis y transporte local.',
    galleryTitle: 'Nuestros momentos',
    rsvpTitle: 'Confirma tu asistencia',
    rsvpText: 'Por favor confirma tu asistencia e indica cualquier requisito alimentario.',
    adminTitle: 'Respuestas RSVP'
  }
}

export const schedule = [
  { time: '14:00', title: 'Guest Arrival', detail: 'Welcome drinks and soft music' },
  { time: '15:00', title: 'Ceremony', detail: 'The wedding ceremony begins' },
  { time: '17:00', title: 'Cocktail Hour', detail: 'Canapés, photos and celebration' },
  { time: '19:00', title: 'Dinner', detail: 'Reception dinner and speeches' },
  { time: '21:00', title: 'Dancing', detail: 'Music, dancing and late evening celebration' }
]
