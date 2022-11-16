/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["dist/**/*.html"],
  theme: {
    screens: {
      sm: "450px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1450px",
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        brandColor: "#EC1D25",
      },
    },
  },
  plugins: [],
};
