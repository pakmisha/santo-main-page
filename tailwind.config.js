module.exports = {
  content: ["./src/views/**/*.pug", "./src/js/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-accent":
          "linear-gradient(to bottom right, #FFC700 0%, #F0A600 100%)",
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        "brand-primary": "#2CA094",
        "brand-primary-dark": "#165960",
        "brand-accent": "#FFC700",
        "brand-dark": "#394344CC",
      },
      fontFamily: {
        primary: ["Nunito", "sans-serif"],
      },
      transitionTimingFunction: {
        inQuad: "cubic-bezier(0.32, 0, 0.67, 0)",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        13: "4rem",
        14: "5rem",
        15: "6rem",
        16: "7rem",
        17: "8rem",
        18: "9rem",
        19: "10rem",
      },
    },
  },
  plugins: [],
};
