import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.mdx'],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [],
} satisfies Config;
