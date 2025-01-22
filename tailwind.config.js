/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        'anime':"anime 0.5s linear",
      },
      keyframes:{
        anime:{
          'from':{transform:"translateX(-20rem)"},
          'to':{transform:"translateX(0rem)"},
        }
      }
    },
  },
  plugins: [],
}

