/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{vue,js,ts}",
    "./src/layouts/**/*.vue",
    "./src/global/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/app.vue",
    "./src/plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./src/modules/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "2rem",
          "2xl": "6rem",
        },
      },

      colors: {
        red: {
          50: "#fef2f2",
          100: "#fde8e8",
          200: "#fbd5d5",
          300: "#f8b4b4",
          400: "#f98080",
          500: "#C54442",
          600: "#e02424",
          700: "#c81e1e",
          800: "#9b1c1c",
          900: "#771d1d",
        },

        move: "#23282D",
      },
    },
  },
  darkMode: "class",
};
