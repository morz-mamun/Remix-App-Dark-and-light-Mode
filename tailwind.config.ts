import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors:{
        // text color and icon color
        'primary':'#252b37',
        'secondary':'#404857',
        'tertiary':'#666c79',
        'quaternary':'#8c919a',
        // background color
        'secondary-bg':'#f7f7f8',
        'tertiary-bg':'#efeff1',
        'quaternary-bg':'#e6e7e9',
        'popup-bg':'#000',
        // stroke color
        'stroke-primary':'#d4d6d9',
        'stroke-secondary':'#bfc2c7',
        'stroke-tertiary':'#adb0 b7',
        'stroke-quaternary':'#666c79'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
