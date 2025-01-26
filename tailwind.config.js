/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Add a custom color
      colors: {
        aqua: "#3EC6E0",
        aquaDark: "#084154",
      },
    },
  },
  plugins: [],
};
