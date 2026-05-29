export type Lang = 'en' | 'es'

export const pages = [
  { href: '/', label: { en: 'Home', es: 'Inicio' } },
  { href: '/our-story', label: { en: 'Our Story', es: 'Nuestra Historia' } },
  { href: '/wedding-day', label: { en: 'Wedding Day', es: 'Día de la Boda' } },
  { href: '/accommodation', label: { en: 'Accommodation', es: 'Alojamiento' } },
  { href: '/travel', label: { en: 'Travel', es: 'Viaje' } },
  { href: '/things-to-do', label: { en: 'Things To Do', es: 'Qué Hacer' } },
  { href: '/faq', label: { en: 'FAQ', es: 'Preguntas' } },
  { href: '/updates', label: { en: 'Updates', es: 'Noticias' } },
  { href: '/gallery', label: { en: 'Gallery', es: 'Galería' } },
  { href: '/rsvp', label: { en: 'RSVP', es: 'RSVP' } },
]

export const copy = {
  en: {
    home: {
      label: 'Wedding Celebration',
      name1: 'Nataliya',
      name2: 'Robert',
      date: '24th October 2026',
      venue: 'Hotel Sant Pere del Bosc',
      location: 'Lloret de Mar',
      cta: 'Private RSVP',
    },
    story: {
      label: 'Our Story',
      title: 'Nataliya & Robert',
      text: 'We are so excited to celebrate our wedding with family and friends in the beautiful surroundings of Hotel Sant Pere del Bosc in Lloret de Mar.',
    },
    weddingDay: {
      label: 'Wedding Day',
      title: 'The Celebration',
    },
    accommodation: {
      label: 'Accommodation',
      title: 'Where To Stay',
      text: 'We recommend staying in Lloret de Mar where possible. A curated list of hotels and accommodation options will be added here.',
    },
    travel: {
      label: 'Travel',
      title: 'Getting There',
      text: 'The nearest airport is Girona. Barcelona Airport is also convenient and offers a wider choice of flights. From both airports you can travel to Lloret de Mar by public transport, taxi or car.',
      cta: 'View Venue',
    },
    things: {
      label: 'Things To Do',
      title: 'Costa Brava',
      text: 'Many guests are planning to make a holiday of it. We will add recommendations for beaches, restaurants, local walks, day trips and informal get-togethers before and after the wedding.',
    },
    updates: {
      label: 'Updates',
      title: 'Announcements',
      cardTitle: 'More information coming soon',
      cardText: 'Important updates, travel notes and wedding-week plans will be published here.',
    },
    gallery: {
      label: 'Gallery',
      title: 'Moments & Style',
    },
    faq: {
      label: 'FAQ',
      title: 'Questions',
    },
    rsvp: {
      label: 'Private RSVP',
      title: 'Kindly Respond',
      text: 'Please complete the private RSVP sequence below. This is the visual Phase 1 flow.',
    },
    admin: {
      label: 'Admin Preview',
      title: 'RSVP Dashboard',
      search: 'Search guest records...',
      export: 'Export CSV',
    },
  },

  es: {
    home: {
      label: 'Celebración de Boda',
      name1: 'Nataliya',
      name2: 'Robert',
      date: '24 de octubre de 2026',
      venue: 'Hotel Sant Pere del Bosc',
      location: 'Lloret de Mar',
      cta: 'RSVP Privado',
    },
    story: {
      label: 'Nuestra Historia',
      title: 'Nataliya y Robert',
      text: 'Estamos muy emocionados de celebrar nuestra boda con familiares y amigos en el precioso entorno del Hotel Sant Pere del Bosc en Lloret de Mar.',
    },
    weddingDay: {
      label: 'Día de la Boda',
      title: 'La Celebración',
    },
    accommodation: {
      label: 'Alojamiento',
      title: 'Dónde Alojarse',
      text: 'Recomendamos alojarse en Lloret de Mar si es posible. Aquí añadiremos una lista seleccionada de hoteles y opciones de alojamiento.',
    },
    travel: {
      label: 'Viaje',
      title: 'Cómo Llegar',
      text: 'El aeropuerto más cercano es Girona. El aeropuerto de Barcelona también es una opción cómoda y ofrece una mayor variedad de vuelos. Desde ambos aeropuertos se puede llegar a Lloret de Mar en transporte público, taxi o coche.',
      cta: 'Ver Lugar',
    },
    things: {
      label: 'Qué Hacer',
      title: 'Costa Brava',
      text: 'Muchos invitados planean convertir el viaje en unas pequeñas vacaciones. Añadiremos recomendaciones de playas, restaurantes, paseos, excursiones y encuentros informales antes y después de la boda.',
    },
    updates: {
      label: 'Noticias',
      title: 'Anuncios',
      cardTitle: 'Más información próximamente',
      cardText: 'Aquí publicaremos actualizaciones importantes, notas de viaje y planes para la semana de la boda.',
    },
    gallery: {
      label: 'Galería',
      title: 'Momentos y Estilo',
    },
    faq: {
      label: 'Preguntas Frecuentes',
      title: 'Preguntas',
    },
    rsvp: {
      label: 'RSVP Privado',
      title: 'Confirmar Asistencia',
      text: 'Por favor completa la secuencia privada de RSVP a continuación. Este es el flujo visual de la Fase 1.',
    },
    admin: {
      label: 'Vista Admin',
      title: 'Panel RSVP',
      search: 'Buscar invitados...',
      export: 'Exportar CSV',
    },
  },
}

export const schedule = {
  en: [
    ['14:00', 'Guest Arrival', 'Welcome drinks and time to settle in.'],
    ['15:00', 'Ceremony', 'The wedding ceremony begins.'],
    ['17:00', 'Cocktail Hour', 'Canapés, photos and celebration.'],
    ['19:00', 'Dinner', 'Reception dinner and speeches.'],
    ['21:00', 'Dancing', 'Music, dancing and evening celebration.'],
  ],
  es: [
    ['14:00', 'Llegada de Invitados', 'Bebidas de bienvenida y tiempo para acomodarse.'],
    ['15:00', 'Ceremonia', 'Comienza la ceremonia de boda.'],
    ['17:00', 'Cóctel', 'Canapés, fotos y celebración.'],
    ['19:00', 'Cena', 'Cena de recepción y discursos.'],
    ['21:00', 'Baile', 'Música, baile y celebración por la noche.'],
  ],
}

export const faqs = {
  en: [
    ['Where should I stay?', 'Stay in Lloret de Mar if possible. We have put together a list of recommended hotels and accommodation options on the Accommodation page.'],
    ['What airport should I fly into?', 'The nearest airport is Girona. Barcelona Airport is also a convenient option with a wider choice of flights.'],
    ['Do I need to hire a car?', 'Not necessarily. Lloret is easy to get around on foot and taxis are readily available.'],
    ['What should I wear?', 'The dress code is smart wedding attire. We would love everyone to dress up and celebrate with us.'],
    ['Can I bring children?', 'Absolutely. Children are very welcome.'],
    ['Can I bring a plus one?', 'Yes. Partners and plus ones are welcome.'],
    ['Will food be provided?', 'Yes. Dietary requirements and allergies can be provided when you complete your RSVP.'],
    ['How do I RSVP?', 'We will have sent you a private RSVP link by message.'],
    ['Will there be updates before the wedding?', 'Yes. Any important information will be published here.'],
    ['What language will the wedding be in?', 'The wedding will be a mixture of English and Spanish.'],
    ['Can I make a holiday of it?', 'Absolutely. We would love you to. We see this as a mini holiday for everyone as much as a wedding day.'],
    ['Gifts', 'We do not expect gifts, but for anybody wanting to contribute, we have a honeymoon travel fund set up.'],
  ],
  es: [
    ['¿Dónde debería alojarme?', 'Recomendamos alojarse en Lloret de Mar si es posible. Hemos preparado una lista de hoteles y opciones de alojamiento recomendadas en la página de Alojamiento.'],
    ['¿A qué aeropuerto debería volar?', 'El aeropuerto más cercano es Girona. El aeropuerto de Barcelona también es una opción cómoda con una mayor variedad de vuelos.'],
    ['¿Necesito alquilar un coche?', 'No necesariamente. Lloret es fácil de recorrer a pie y hay taxis disponibles.'],
    ['¿Qué debería llevar?', 'El código de vestimenta es elegante para boda. Nos encantaría que todos se arreglaran para celebrar con nosotros.'],
    ['¿Puedo llevar niños?', 'Por supuesto. Los niños son muy bienvenidos.'],
    ['¿Puedo llevar un acompañante?', 'Sí. Las parejas y acompañantes son bienvenidos.'],
    ['¿Habrá comida?', 'Sí. Puedes indicar requisitos dietéticos y alergias cuando completes el RSVP.'],
    ['¿Cómo hago el RSVP?', 'Te habremos enviado un enlace privado de RSVP por mensaje.'],
    ['¿Habrá actualizaciones antes de la boda?', 'Sí. Cualquier información importante se publicará aquí.'],
    ['¿En qué idioma será la boda?', 'La boda será una mezcla de inglés y español, reflejando ambos lados de la familia.'],
    ['¿Puedo convertirlo en vacaciones?', 'Por supuesto. Nos encantaría. Vemos esto como unas pequeñas vacaciones para todos, además del día de la boda.'],
    ['Regalos', 'No esperamos regalos, pero para quien quiera contribuir, tenemos un fondo de viaje para la luna de miel.'],
  ],
}