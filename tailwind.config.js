/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    colors: {
      nogizaka: "#4a044e",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        secondary: "#64748b",
        nogizaka: "#4a044e",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
