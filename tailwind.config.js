/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ffbb38",

          "secondary": "#ffeae5",

          "accent": "#000",

          "base-100": "#FFFFFF",

          "info": "#caebfd",

          "success": "#19cc40",

          "warning": "#eecea9",

          "error": "#f35b44",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
