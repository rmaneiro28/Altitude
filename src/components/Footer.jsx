import { Instagram, MapPin } from 'lucide-react'
import Logo from './Logo.jsx'
import { INSTAGRAM_URL } from '../lib/data.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-abyss">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 text-sm text-white/60 md:flex-row md:px-8">
        <div className="flex items-center gap-3">
          <Logo size={40} />
          <span className="font-display uppercase tracking-widest text-white">Altitude Functional Fitness</span>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} className="text-crimson" />
            Torre Banco Lara, Piso 1 · La Castellana, Caracas
          </span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            <Instagram size={16} className="text-crimson" />
            @altitudegym.ccs
          </a>
        </div>

        <p>© 2026 Altitude. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
