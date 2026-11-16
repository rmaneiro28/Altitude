/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        abyss: '#050505',
        carbon: '#121212',
        crimson: '#E11D48',
        blood: '#DC2626',
      },
      fontFamily: {
        display: ['Oswald', 'Syne', 'Impact', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(225,29,72,0.55)' },
          '50%': { boxShadow: '0 0 0 14px rgba(225,29,72,0)' },
        },
        scrollLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s infinite',
        'scroll-line': 'scrollLine 1.8s cubic-bezier(.65,0,.35,1) infinite',
      },
    },
  },
  plugins: [],
}
