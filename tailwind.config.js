/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto': 'Roboto',
        'sora': 'Sora'
      },
      screens:{
        sm: '520px'
      }
    },
  },
  plugins: [],
}

