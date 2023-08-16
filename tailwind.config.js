/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*/**/*.{jsx,tsx,mdx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        article: "auto",
        "sidebar-article": "20rem auto",
        "sidebar-article-headNav": "20rem auto 20rem",
      },
      colors: {
        light: "#fffbf0",
        "light-text": "#666666",
        dark: "#23272F",
        "dark-text": "#fffbf0",
        highlight: "#4c8dae",
        hover: "#395260",
        header: "#000000",
        "header-dark": "#ffffff",
      },
    },
  },
  plugins: [],
};
