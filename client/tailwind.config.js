export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunito: "Nunito",
    },
    extend: {
      colors: {
        skyBlue: {
          50: "#effcfc",
          100: "#d5f4f8",
          200: "#b1e9f0",
          300: "#80d8e6",
          400: "#3ebbd2",
          500: "#229fb8",
          600: "#1f809b",
          700: "#20687e",
          800: "#225668",
          900: "#214858",
          950: "#102e3c",
        },
      },
    },
  },
  plugins: [],
};
