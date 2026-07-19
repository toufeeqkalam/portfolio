/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Fira Code"', '"Space Mono"', 'monospace'],
        heading: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-up-delay-1': 'fade-in-up 0.8s ease-out 0.2s forwards',
        'fade-in-up-delay-2': 'fade-in-up 0.8s ease-out 0.4s forwards',
        'fade-in-up-delay-3': 'fade-in-up 0.8s ease-out 0.6s forwards',
        'fade-in-up-delay-4': 'fade-in-up 0.8s ease-out 0.8s forwards',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.15', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(1.1)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
