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
        light: "#ffffff",
        "light-text": "#23272F",
        dark: "#23272F",
        "dark-text": "#fffbf0",
        highlight: "#801dae",
        hover: "#395260",
      },
    },
  },
  plugins: [],
};
