/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "cr-red-violet": "#DA18A3",
        "cr-red-linear-start": "#EB1484",
        "cr-red-linear-end": "#C81CC5",
        "cr-dark": "#24252D",
        "cr-light": "#FFFFFF",
        "cr-grey-100": "#E3E1E3",
        "cr-grey-200": "#888888",
        "cr-grey-300": "#4F4F4F",
        "cr-black-100": "#2D2E36",
        "cr-black-200": "#1B1A21",
        "cr-black-300": "#E3E1E3",
        "cr-black-400": "#24252D",
      },
      fontSize: {
        "cr-h1": "28px",
        "cr-h2": "24px",
        "cr-h3": "20px",
      },
    },
  },
  plugins: [],
};
