/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        zinc: {
          850: '#1f1f22',
          900: '#18181b',
          950: '#09090b',
        },
        paper: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'sans-serif'],
        serif: ['Merriweather', 'Noto Serif TC', 'serif'],
        mono: ['Noto Sans Mono', 'monospace'],
      },
      screens: {
        'print': {'raw': 'print'},
      }
    },
  },
  plugins: [],
}