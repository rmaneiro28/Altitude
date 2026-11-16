import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import SmartImage from './SmartImage.jsx'
import { IMAGES, waLink } from '../lib/data.js'

const words = ['NO ES SOLO', 'ENTRENAR.', 'ES LLEGAR', 'A LA CIMA.']

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.95])

  return (
    <section id="top" ref={ref} className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Fondo con zoom */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 will-change-transform">
        <SmartImage src={IMAGES.hero} alt="Entrenamiento en Altitude" className="h-full w-full object-cover" />
      </motion.div>
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-abyss" />
      <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-abyss/60" />
      <div className="absolute -bottom-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-crimson/25 blur-[140px]" />
      <div className="noise absolute inset-0" />

      {/* Contenido con parallax */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5 pt-16 md:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur"
        >
          <MapPin size={14} className="text-crimson" />
          La Castellana, Caracas • Abierto 24/7
        </motion.div>

        <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[8.5rem]">
          {words.map((w, i) => (
            <span key={w} className="block overflow-hidden">
              <motion.span
                className={`block ${i >= 2 ? 'text-crimson' : ''}`}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.35 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-6 max-w-xl text-base text-white/75 md:text-lg"
        >
          Entrena en el rooftop más exclusivo de Caracas. Musculación, CrossFit y Pádel sin límites de horario.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href={waLink('Hola Altitude! Quiero reclamar mi día de prueba 🔥')}
            target="_blank"
            rel="noreferrer"
            className="glow-red group inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-8 py-4 font-display text-lg uppercase tracking-widest transition hover:bg-blood"
          >
            Reclama tu Día de Prueba
            <ArrowRight size={20} className="transition group-hover:translate-x-1" />
          </a>
          <a
            href="#disciplinas"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 font-display text-lg uppercase tracking-widest transition hover:border-white hover:bg-white/10"
          >
            Explorar Instalaciones
          </a>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.35em] text-white/60">Scroll</span>
        <div className="relative h-14 w-px overflow-hidden bg-white/20">
          <div className="absolute inset-0 animate-scroll-line bg-crimson" />
        </div>
      </div>
    </section>
  )
}
