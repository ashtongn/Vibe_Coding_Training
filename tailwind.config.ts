import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f7f8fa',
          100: '#eef1f4',
          200: '#d6dce3',
          300: '#b2becb',
          400: '#7c8a99',
          500: '#536271',
          600: '#3b4755',
          700: '#27313c',
          800: '#191f27',
          900: '#10151b',
        },
        signal: {
          100: '#e9f8f3',
          300: '#7fd0ad',
          500: '#1f9d71',
          700: '#12654a',
        },
        amberglass: '#f7c873',
      },
      boxShadow: {
        panel: '0 20px 40px rgba(16, 21, 27, 0.08)',
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at top, rgba(247, 200, 115, 0.25), transparent 35%), linear-gradient(180deg, rgba(255,255,255,0.94), rgba(247,248,250,0.96))',
      },
    },
  },
  plugins: [typography],
};

export default config;
