/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xxs: "180px",
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        surgery1: "url('/public/images/surgery.png')",
        surgery22: "url('/public/images/sur11.png')",
        surgery33: "url('/public/images/sur22.png')",
        surgery111: "url('/public/images/sur111.png')",
        surgery222: "url('/public/images/sur222.png')",

      },
      colors: {
        surg: "#E9F3F9",
        sur1: "#8D8E8D",
        sur2: "#E9F3F9",
        kirmizidaire: "#F0E2E2",
        karelaci: "#4084B8",
        üstgri: "#F9F6F6",
        altgri: "#EEEEEE",
        tamgri: "#5C5A5A",
      },
      fontFamily: {
        hizmet: ["Dancing Script", "cursive"],
        all: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}