import generated from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx}',
    './src/components/**/*.{html,js,jsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [generated],
};

