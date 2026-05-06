import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        siap: {
          navy: '#061B35',
          midnight: '#03101F',
          deep: '#08294D',
          blue: '#0877D8',
          cyan: '#00A9E0',
          teal: '#00B7A6',
          green: '#83C341',
          ice: '#EFF7FB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 22px 70px rgba(3, 16, 31, 0.16)',
      },
    },
  },
  plugins: [],
} satisfies Config;
