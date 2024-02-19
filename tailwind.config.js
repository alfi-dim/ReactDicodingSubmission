/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        forum: {
          primary: '#EBE3D5',
          background: '#F3EEEA',
          dark: {
            primary: '#1B1A55',
            background: '#535C91',
          },
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('flowbite/plugin'),
  ],
};
