/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
    theme: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Poppins", "serif"],
      },
      extend: {},
    },
    plugins: [
      require("flowbite/plugin"),
      require("@tailwindcss/forms")({
        strategy: "base",
      }),
    ],
  };
  