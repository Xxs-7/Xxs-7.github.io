/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/**/*.{jsx,tsx,mdx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "article": "auto",
        "sidebar-article": "20rem auto",
        "sidebar-article-headNav": "20rem auto 20rem",
      },
    },
  },
  plugins: [],
};
