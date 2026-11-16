import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo.jsx'
import { waLink } from '../lib/data.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-black/80 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Altitude Functional Fitness">
          <Logo size={44} />
          <span className="hidden font-display text-sm uppercase tracking-[0.25em] text-white/70 sm:block">
            Functional Fitness
          </span>
        </a>

        <div className="hidden items-center gap-8 font-display text-sm uppercase tracking-widest text-white/70 md:flex">
          <a href="#disciplinas" className="transition hover:text-white">Disciplinas</a>
          <a href="#horarios" className="transition hover:text-white">Horarios</a>
          <a href="#unete" className="transition hover:text-white">Únete</a>
        </div>

        <a
          href={waLink('Hola Altitude! Quiero reclamar mi clase gratis 💪')}
          target="_blank"
          rel="noreferrer"
          className="animate-pulse-glow rounded-full bg-crimson px-5 py-2.5 font-display text-sm uppercase tracking-widest text-white transition hover:bg-blood"
        >
          Clase Gratis
        </a>
      </nav>
    </motion.header>
  )
}
