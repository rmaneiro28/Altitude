import { useRef } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'

const wrap = (min, max, v) => {
  const range = max - min
  return ((((v - min) % range) + range) % range) + min
}

/** Fila infinita cuya velocidad (y sentido) reacciona a la velocidad del scroll */
function Row({ text, baseVelocity = -4, outline = false, red = false }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smooth = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const factor = useTransform(smooth, [0, 1000], [0, 5], { clamp: false })
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`)
  const dir = useRef(baseVelocity < 0 ? -1 : 1)

  useAnimationFrame((_, delta) => {
    let move = dir.current * Math.abs(baseVelocity) * (delta / 1000)
    const f = factor.get()
    if (f < 0) dir.current = -1
    else if (f > 0) dir.current = 1
    move += dir.current * Math.abs(move) * Math.abs(f)
    baseX.set(baseX.get() + move)
  })

  const cls = outline ? (red ? 'text-stroke-red' : 'text-stroke') : 'text-white'

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div style={{ x }} className="flex w-max will-change-transform">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`pr-8 font-display text-6xl font-bold uppercase leading-none tracking-tight md:text-8xl ${cls}`}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section
      aria-hidden="true"
      className="relative -rotate-1 scale-105 space-y-3 border-y border-white/10 bg-carbon py-6"
    >
      <Row text="CROSSFIT • GYM 24H • PÁDEL • ALTO RENDIMIENTO •" baseVelocity={-4} outline />
      <Row text="24 HORAS • CROSSFIT • PÁDEL • LA CASTELLANA • SIN EXCUSAS •" baseVelocity={4} outline red />
    </section>
  )
}
