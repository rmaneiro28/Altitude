import { useState } from 'react'

/** <img> con fallback a degradado oscuro si el placeholder no carga */
export default function SmartImage({ src, alt = '', className = '', style }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div
        className={className}
        style={{
          ...style,
          background:
            'radial-gradient(circle at 30% 20%, rgba(225,29,72,.35), transparent 55%), linear-gradient(135deg,#1a1a1a,#050505)',
        }}
      />
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
      style={style}
    />
  )
}
