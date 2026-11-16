export const WHATSAPP_NUMBER = '584144448109'
export const INSTAGRAM_URL = 'https://instagram.com/altitudegym.ccs'

export const waLink = (text = '') =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`

// Placeholders de Unsplash: reemplazar por fotos reales del gimnasio
const u = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMAGES = {
  hero: u('photo-1534438327276-14e5300c3a48', 2400),
  crossfit: u('photo-1517836357463-d25dfeac3438'),
  gym: u('photo-1571019613454-1cb2f99b2d8b'),
  padel: u('photo-1626224583764-f87db24ac4ea'),
  community: u('photo-1540497077202-7c8a3999166f'),
  cta: u('photo-1558611848-73f7eb4001a1', 2000),
}

export const SCHEDULE = {
  'Lunes a Viernes': [
    {
      turno: 'Turno de la mañana',
      slots: [
        { time: '8:00 AM - 9:00 AM', advanced: false },
        { time: '9:00 AM - 10:00 AM', advanced: true },
      ],
    },
    {
      turno: 'Turno de la tarde',
      slots: [
        { time: '5:00 PM - 6:00 PM', advanced: false },
        { time: '6:00 PM - 7:00 PM', advanced: false },
        { time: '7:00 PM - 8:00 PM', advanced: true },
      ],
    },
  ],
  Sábados: [
    {
      turno: 'Sábados',
      slots: [
        { time: '9:00 AM - 10:00 AM', advanced: false },
        { time: '10:00 AM - 11:00 AM', advanced: true },
      ],
    },
  ],
}
