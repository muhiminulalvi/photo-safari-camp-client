/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#fcad1b",

          secondary: "#036b72",

          accent: "#86e8b5",

          neutral: "#201e24",

          "base-100": "#efeff5",

          info: "#93adec",

          success: "#4bd89b",

          warning: "#fcaa45",

          error: "#f73a1d",
        },
      },
      "black",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
