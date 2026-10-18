/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brand: "#4CAF4F",
        "brand-dark": "#3f9a42",
        ink: "#4D4D4D",
        mist: "#F5F7FA",
        night: "#263238",
      },
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
