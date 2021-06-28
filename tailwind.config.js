const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          900: "var(--color-primary-900)",
          800: "var(--color-primary-800)",
          700: "var(--color-primary-700)",
          600: "var(--color-primary-600)",
          500: "var(--color-primary-500)",
          400: "var(--color-primary-400)",
          300: "var(--color-primary-300)",
          200: "var(--color-primary-200)",
          100: "var(--color-primary-100)",
        },
      },
    },
    fontFamily: {
      /* Change Favorite Typography Default */
      /* See custom font family : https://tailwindcss.com/docs/font-family */
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
