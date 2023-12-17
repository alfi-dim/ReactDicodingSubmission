import generated from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx}',
    './src/components/**/*.{html,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        light: {
          containerBackgroundColor: '#d8d8d8',
          textColor: '#1e293b',
        },
        dark: {
          containerBackgroundColor: '#1e293b',
          textColor: '#f5f5f5',
        },
      }
    },
  },
  plugins: [generated],
};

