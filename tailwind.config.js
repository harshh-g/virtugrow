const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    
    extend: {
      colors: {
        'custom-white': '#fff',
        'custom-blue' : '#2beee2', 
        "custom-blue-dark": "#005785"// Add custom colors
      },
      backgroundColor:{
       'custom-blue' : '#2beee2',
       'custom-blue2':'#000d1a',
       'blue-custom': '#020718'
       
      },
      height:{
        'custom-hero': '30rem'
      },
      fontFamily:{
        'custom-font': ['Roboto', 'serif' ]
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        }
      }
      ,
      
    },
  },
  plugins: [flowbite.plugin()],
}

