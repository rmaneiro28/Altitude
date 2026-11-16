import { motion } from 'framer-motion'

export const container = (stagger = 0.12) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
})

export const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

/** Bloque que aparece desde abajo al entrar en viewport */
export function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}

/** Contenedor con stagger: sus hijos deben ser <motion.* variants={item}> */
export function Stagger({ children, className = '', stagger = 0.12 }) {
  return (
    <motion.div
      className={className}
      variants={container(stagger)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  )
}
