import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import SmartImage from './SmartImage.jsx'
import { IMAGES, waLink } from '../lib/data.js'

const OPTIONS = ['Gym', 'CrossFit', 'Pádel']

export default function FinalCTA() {
  const [name, setName] = useState('')
  const [discipline, setDiscipline] = useState('CrossFit')

  const submit = (e) => {
    e.preventDefault()
    const msg = `Hola Altitude! Soy ${name.trim()} y quiero agendar mi clase de prueba de ${discipline}.`
    window.open(waLink(msg), '_blank', 'noopener')
  }

  return (
    <section id="unete" className="relative overflow-hidden py-28 md:py-40">
      <SmartImage src={IMAGES.cta} className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-abyss/80" />
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/30 blur-[160px]" />
      <div className="noise absolute inset-0" />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 font-display text-sm uppercase tracking-[0.35em] text-crimson"
        >
          Tu primer día es gratis
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-8xl"
        >
          Tu única competencia eres <span className="text-crimson">tú mismo.</span>
        </motion.h2>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-12 max-w-xl rounded-3xl border border-white/10 bg-carbon/80 p-6 text-left backdrop-blur md:p-8"
        >
          <label className="block text-xs font-semibold uppercase tracking-widest text-white/60">
            Tu nombre
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: María"
              className="mt-2 w-full rounded-xl border border-white/10 bg-abyss px-4 py-4 text-base normal-case tracking-normal text-white outline-none transition placeholder:text-white/30 focus:border-crimson"
            />
          </label>

          <fieldset className="mt-5">
            <legend className="text-xs font-semibold uppercase tracking-widest text-white/60">
              Disciplina de interés
            </legend>
            <div className="mt-2 grid grid-cols-3 gap-3">
              {OPTIONS.map((o) => (
                <button
                  type="button"
                  key={o}
                  onClick={() => setDiscipline(o)}
                  aria-pressed={discipline === o}
                  className={`rounded-xl border px-3 py-3 font-display text-sm uppercase tracking-widest transition ${
                    discipline === o
                      ? 'border-crimson bg-crimson text-white glow-red'
                      : 'border-white/10 bg-abyss text-white/60 hover:border-white/30'
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            className="glow-red mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-crimson px-6 py-4 font-display text-lg uppercase tracking-widest transition hover:bg-blood"
          >
            <MessageCircle size={20} />
            Enviar y Agendar por WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  )
}
