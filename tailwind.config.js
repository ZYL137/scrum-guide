/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: " #FFD1D1;",
        "white-0.8": "rgba(255, 255, 255, 0.8)",
      },
      borderRadius: { card: "30px" },
      boxShadow: { custom: "0px 4px 30px rgba(0, 0, 0, 0.3)" },
      colors: {
        "gray-dark": "#3A3A3A",
      },
    },
  },
  plugins: [],
};
