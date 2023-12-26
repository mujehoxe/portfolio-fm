/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "moniqa-thin-condensed-heading": [
          "Moniqa-ThinCondensedHeading",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
