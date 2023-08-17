// @type {import('tailwindcss').Config} 
// import { Flowbite } from 'flowbite-react'
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat'," sans-serif"]
      }
    },
  },
  plugins: [import('flowbite/plugin')],
}

