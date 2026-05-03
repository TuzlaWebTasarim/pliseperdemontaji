import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pine:    '#83bd81',
        'pine-light': '#e8f5e8',
        'pine-mid':   '#b8ddb7',
        slate:   '#404e5e',
        'slate-light': '#f4f7fa',
        ink:     '#1a2530',
        mist:    '#4a5668',
        fog:     '#8a9aaa',
        border:  '#e0ebe0',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'plise-stripe': `repeating-linear-gradient(
          0deg,
          transparent 0px,
          transparent 16px,
          rgba(131,189,129,0.07) 16px,
          rgba(131,189,129,0.07) 17px
        )`,
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease both',
        'fade-in':   'fadeIn 0.5s ease both',
        'slide-right': 'slideRight 0.6s ease both',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
