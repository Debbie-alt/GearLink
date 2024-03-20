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
        xs:'480px',
        sm: '520px'
      },
      colors:{
        'red':'rgba(255, 255, 255, 0.5)'
      }
    },
  },
  plugins: [],
}

