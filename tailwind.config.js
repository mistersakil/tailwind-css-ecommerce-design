/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens: {
      xs: "300px",
      sm: "500px",
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
      spacing: {
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
      },
    },
  },
  plugins: [],
};
