const tinycolor = require("tinycolor2");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        "color-50": tinycolor("#373342").lighten(40).toString(),
        "color-100": tinycolor("#373342").lighten(30).toString(),
        "color-200": tinycolor("#373342").lighten(20).toString(),
        "color-300": tinycolor("#373342").lighten(10).toString(),
        "color-400": tinycolor("#373342").lighten(5).toString(),
        "color-500": tinycolor("#373342").toString(),
        "color-600": tinycolor("#373342").darken(10).toString(),
        "color-700": tinycolor("#373342").darken(20).toString(),
        "color-800": tinycolor("#373342").darken(30).toString(),
        "color-900": tinycolor("#373342").darken(40).toString(),
      },
    },
  },
  plugins: [],
};
