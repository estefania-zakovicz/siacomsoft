const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        blue: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#006FEE",
          700: "#004493",
          800: "#002e62",
          900: "#001731",
        },
        azul: {
          950: "#040815",
        },
        zinc: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
        },
        fuxia: "#fe00ff",
      },
      textShadow: {
        'fuxia': '5px 5px 10px #fe00ff',
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        mate: ['Mate SC', 'serif'],
      },
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
    }),
    require('tailwindcss-textshadow'), // Plugin de text-shadow
  ],
};
