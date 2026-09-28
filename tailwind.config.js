/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], display: ['"Space Grotesk"', 'Inter', 'sans-serif'], mono: ['"IBM Plex Mono"', 'monospace'] },
      colors: { obsidian: '#09090B', zinc: { 200: '#E4E4E7', 300: '#D4D4D8', 400: '#A1A1AA', 500: '#71717A', 950: '#18181B', line: '#27272A' }, spring: { DEFAULT: '#00A3E0', soft: '#38BDF8' } },
      keyframes: { 'fade-up': { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } }, 'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } } },
      animation: { 'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both', 'fade-in': 'fade-in 0.9s ease-out both' },
    },
  },
  plugins: [],
};
