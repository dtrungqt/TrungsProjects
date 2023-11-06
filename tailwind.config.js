/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        koho: ["KoHo", "sans-serif"],
      },
      colors: {
        orange: "#EF5A39",
        "light-orange": "#f0752c",
        grey: "#848d92",
        "thin-grey": "#f7f7f7",
        "light-grey": "#d5d5d5",
        "strong-grey": "#666",
        yellow: "#ffbd0b",
        "dark-yellow": "#e2972a",
        green: "#198754",
        "dark-green": "#214252",
        "light-blue": "#8cbfd8",
        pink: "#fd5056",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
