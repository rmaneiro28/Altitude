import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight, Clock, Dumbbell, Flame, Users } from 'lucide-react'
import SmartImage from './SmartImage.jsx'
import { Stagger, item } from './Reveal.jsx'
import { IMAGES, waLink } from '../lib/data.js'

/** Tarjeta con zoom de imagen, resplandor rojo y leve atracción magnética al cursor */
function Card({ className = '', image, icon: Icon, tag, title, text, big = false, cta }) {
  const ref = useRef(null)
  const mx = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 })
  const my = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 })

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 8)
    my.set(((e.clientY - r.top) / r.height - 0.5) * 8)
    ref.current.style.setProperty('--gx', `${e.clientX - r.left}px`)
    ref.current.style.setProperty('--gy', `${e.clientY - r.top}px`)
  }
  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.article
      ref={ref}
      variants={item}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: mx, y: my }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-carbon transition-[border-color,box-shadow] duration-500 hover:border-crimson/70 hover:shadow-[0_0_40px_rgba(225,29,72,0.35)] ${className}`}
    >
      <SmartImage
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/50 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(300px circle at var(--gx,50%) var(--gy,50%), rgba(225,29,72,0.22), transparent 60%)',
        }}
      />

      <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
        <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-crimson/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">
          <Icon size={13} />
          {tag}
        </div>
        <h3
          className={`font-display font-bold uppercase leading-none tracking-tight ${
            big ? 'text-5xl md:text-7xl' : 'text-4xl md:text-5xl'
          }`}
        >
          {title}
        </h3>
        <p className="mt-3 max-w-md text-sm text-white/75 md:text-base">{text}</p>
        {cta && (
          <a
            href={waLink(cta)}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-fit items-center gap-1 font-display text-sm uppercase tracking-widest text-crimson transition hover:gap-2"
          >
            Quiero info <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default function Disciplines() {
  return (
    <section id="disciplinas" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="mb-14 max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 font-display text-sm uppercase tracking-[0.35em] text-crimson"
        >
          Experiencia & Disciplinas
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl"
        >
          Todo lo que necesitas <span className="text-crimson">en un solo rooftop</span>
        </motion.h2>
      </div>

      <Stagger className="grid auto-rows-[300px] grid-cols-1 gap-4 md:auto-rows-[260px] md:grid-cols-6" stagger={0.14}>
        <Card
          big
          className="md:col-span-4 md:row-span-2"
          image={IMAGES.crossfit}
          icon={Flame}
          tag="Clases grupales"
          title="CrossFit"
          text="Alta intensidad, dirigida por coaches top como Dayana Vicentelli. Mañana y tarde, con turnos de nivel avanzado."
          cta="Hola Altitude! Quiero info sobre las clases de CrossFit"
        />
        <Card
          className="md:col-span-2"
          image={IMAGES.gym}
          icon={Clock}
          tag="Abierto 24 horas"
          title="Gym 24H"
          text="Zonas de cardio con tecnología de punta y peso libre disponibles a cualquier hora."
        />
        <Card
          className="md:col-span-2"
          image={IMAGES.padel}
          icon={Dumbbell}
          tag="Alto nivel"
          title="Pádel"
          text="Canchas de nivel profesional para entrenar y competir."
        />
        <Card
          className="md:col-span-6 md:!row-span-1"
          image={IMAGES.community}
          icon={Users}
          tag="Comunidad"
          title="Baby Gym & Comunidad"
          text="Un espacio pensado para todos los estilos de vida. Pregunta por el Baby Gym y los planes disponibles."
          cta="Hola Altitude! Quiero info sobre Baby Gym y planes"
        />
      </Stagger>
    </section>
  )
}
