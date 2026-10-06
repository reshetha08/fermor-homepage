/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0a0f1c',
        fermor: { 600: '#1d4ed8', 500: '#3b82f6' },
      },
    },
  },
  plugins: [],
}

