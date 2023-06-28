/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#423B68",
        secondary: "#F7912A",
        tertiary: "#34D2EB",
        highlight: "#eaf2ef",
        "black-100": "#0D090A",
        "white-100": "#F4F4F9",
      },
      boxShadow: {
        card: "0px 35px 70px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
