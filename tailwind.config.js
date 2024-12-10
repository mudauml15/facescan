/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Lexend Deca"', "montserrat"], // Set as the default sans-serif font
      },
      colors: {
        "custom-dark": "#242424", // Define your custom color
      },
    },
  },
  plugins: [],
};
