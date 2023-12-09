/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9",
        secondary: "#B6B6B6",
        tertiary: "#828282",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
