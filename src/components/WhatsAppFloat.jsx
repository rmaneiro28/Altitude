import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { waLink } from '../lib/data.js'

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
    <path d="M16.04 3C9.4 3 4 8.38 4 15c0 2.3.65 4.5 1.88 6.4L4 29l7.82-1.84A12.1 12.1 0 0 0 16.04 27C22.68 27 28 21.62 28 15S22.68 3 16.04 3Zm0 21.9c-1.8 0-3.55-.5-5.07-1.43l-.36-.22-4.64 1.1 1.24-4.5-.24-.38A9.8 9.8 0 0 1 6.2 15c0-5.4 4.4-9.8 9.84-9.8 5.43 0 9.76 4.4 9.76 9.8s-4.33 9.9-9.76 9.9Zm5.4-7.3c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.5.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.5.7.3 1.26.48 1.7.62.72.23 1.37.2 1.88.12.57-.08 1.75-.72 2-1.4.24-.7.24-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
  </svg>
)

export default function WhatsAppFloat() {
  const [showTip, setShowTip] = useState(false)

  useEffect(() => {
    const show = setTimeout(() => setShowTip(true), 3500)
    const hide = setTimeout(() => setShowTip(false), 11000)
    return () => {
      clearTimeout(show)
      clearTimeout(hide)
    }
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20 }}
            className="rounded-full border border-white/10 bg-carbon px-4 py-2 text-sm font-medium shadow-xl"
          >
            ¿Dudas? Escríbenos
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href={waLink('Hola Altitude! Tengo una consulta.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Escríbenos por WhatsApp"
        onMouseEnter={() => setShowTip(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_30px_rgba(37,211,102,0.5)]"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </motion.a>
    </div>
  )
}
