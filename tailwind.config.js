/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["dist/**/*.html"],
  theme: {
    screens: {
      sm: "550px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
    },
  },
  plugins: [],
};
