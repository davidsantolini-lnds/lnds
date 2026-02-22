import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F8FA',
        foreground: '#0F172A',
        accent: '#2563EB',
        muted: '#475569',
        card: '#FFFFFF'
      },
      boxShadow: {
        soft: '0 16px 40px -24px rgba(15, 23, 42, 0.45)'
      }
    }
  },
  plugins: []
};

export default config;
