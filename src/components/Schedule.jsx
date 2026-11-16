import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarCheck, Zap } from 'lucide-react'
import { Reveal, container, item } from './Reveal.jsx'
import { SCHEDULE, waLink } from '../lib/data.js'

export default function Schedule() {
  const tabs = Object.keys(SCHEDULE)
  const [active, setActive] = useState(tabs[0])

  return (
    <section id="horarios" className="relative border-y border-white/10 bg-carbon/60 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="mb-3 font-display text-sm uppercase tracking-[0.35em] text-crimson">
            Horarios de CrossFit
          </p>
          <h2 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
            Elige tu hora. <span className="text-crimson">Reserva tu cupo.</span>
          </h2>
          <p className="mt-4 text-white/60">Instructora: Dayana Vicentelli</p>
        </Reveal>

        {/* Tabs */}
        <div className="mx-auto mt-10 flex w-fit rounded-full border border-white/10 bg-abyss p-1.5">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className="relative rounded-full px-6 py-3 font-display text-sm uppercase tracking-widest transition md:px-8"
            >
              {active === t && (
                <motion.span
                  layoutId="tab-pill"
                  className="glow-red absolute inset-0 rounded-full bg-crimson"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className={`relative ${active === t ? 'text-white' : 'text-white/60'}`}>{t}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={container(0.08)}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
            className="mt-12 space-y-10"
          >
            {SCHEDULE[active].map((group) => (
              <div key={group.turno}>
                <motion.h3
                  variants={item}
                  className="mb-4 font-display text-lg uppercase tracking-[0.25em] text-white/50"
                >
                  {group.turno}
                </motion.h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.slots.map((s) => (
                    <motion.div
                      key={s.time}
                      variants={item}
                      className={`flex flex-col justify-between gap-5 rounded-2xl border p-6 transition hover:-translate-y-1 ${
                        s.advanced
                          ? 'border-crimson/50 bg-crimson/10 hover:shadow-[0_0_30px_rgba(225,29,72,0.3)]'
                          : 'border-white/10 bg-abyss hover:border-white/30'
                      }`}
                    >
                      <div>
                        {s.advanced && (
                          <span className="mb-3 inline-flex items-center gap-1 rounded-full bg-crimson px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">
                            <Zap size={12} /> Nivel Avanzado
                          </span>
                        )}
                        <p className="font-display text-3xl font-bold tracking-tight md:text-4xl">{s.time}</p>
                        <p className="mt-1 text-sm text-white/50">
                          {active === 'Sábados' ? 'Sábados' : 'Lunes a Viernes'}
                        </p>
                      </div>
                      <a
                        href={waLink(
                          `Hola Altitude! Quiero reservar cupo en la clase de CrossFit de ${active === 'Sábados' ? 'los Sábados' : 'Lunes a Viernes'} de ${s.time}${s.advanced ? ' (Nivel Avanzado)' : ''}.`
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-3 text-sm font-semibold transition hover:border-crimson hover:bg-crimson"
                      >
                        <CalendarCheck size={16} />
                        Reservar cupo en este horario
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
