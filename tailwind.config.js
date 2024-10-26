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
        'fuxia': '5px 5px 5px #fe00ff',
        'blue': '2px 2px 3px #66aaf9',
        'white': '2px 1px 1px #FFFFFF',

        
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        rowdies: ["Rowdies", "sans-serif"],
        arima: ["Arima", "system-ui"],
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
