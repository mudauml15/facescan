/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },

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
