/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunito: "Nunito",
    },
    colors: {
      black: {
        0: "#ffffff",
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#000000",
      },
      "regent-st-blue": {
        50: "#f3f9fc",
        100: "#e7f2f7",
        200: "#c9e4ee",
        300: "#add8e6",
        400: "#62b5ce",
        500: "#3e9cb9",
        600: "#2e7e9b",
        700: "#26667e",
        800: "#235669",
        900: "#224858",
        950: "#162f3b",
      },
    },
    extend: {},
  },
  plugins: [],
};
