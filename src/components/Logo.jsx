/** Logo circular "Altitude" con silueta de montaña (SVG, sin assets externos) */
export default function Logo({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Altitude">
      <circle cx="50" cy="50" r="48" fill="#050505" stroke="#fff" strokeWidth="3" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="#E11D48" strokeWidth="1.5" />
      <path
        d="M16 64 L34 40 L42 50 L56 28 L72 52 L80 44 L88 64 Z"
        fill="none"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M22 70 H78" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />
      <text
        x="50"
        y="86"
        textAnchor="middle"
        fontFamily="Oswald, Impact, sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="#fff"
        letterSpacing="1"
      >
        ALTITUDE
      </text>
    </svg>
  )
}
