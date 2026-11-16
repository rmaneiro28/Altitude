// Datos reales del negocio y contenido editable
export const WHATSAPP_NUMBER = '584144448109'
export const INSTAGRAM_URL = 'https://www.instagram.com/altitudegym.ccs'
export const INSTAGRAM_HANDLE = '@altitudegym.ccs'
export const ADDRESS = 'Torre Banco Lara, Piso 1 · La Castellana, Caracas'

export const waLink = (text = '') =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`

// Placeholders Unsplash: reemplázalos por las fotos reales del gym (ponlas en /public y cambia la ruta)
export const IMG = {
  hero: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80',
  crossfit: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1400&q=80',
  gym: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80',
  padel: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=80',
  community: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
}

export const SCHEDULE = {
  'Lunes a Viernes': [
    {
      turno: 'Turno de la mañana',
      slots: [
        { time: '8:00 AM – 9:00 AM', advanced: false },
        { time: '9:00 AM – 10:00 AM', advanced: true },
      ],
    },
    {
      turno: 'Turno de la tarde',
      slots: [
        { time: '5:00 PM – 6:00 PM', advanced: false },
        { time: '6:00 PM – 7:00 PM', advanced: false },
        { time: '7:00 PM – 8:00 PM', advanced: true },
      ],
    },
  ],
  Sábados: [
    {
      turno: 'Sábado',
      slots: [
        { time: '9:00 AM – 10:00 AM', advanced: false },
        { time: '10:00 AM – 11:00 AM', advanced: true },
      ],
    },
  ],
}
