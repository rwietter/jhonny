/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./domains/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gradientColors: {
          'card-gradient': ['#D9FFBC', '#FCF286'],
          'bg-gradient': ['#E9E9E9', '#FFFFFF'],
        },
        primary: "#000000",
        secondary: "#F2F2F2",
      },
      fontSize: {
      },
      fontFamily: {
        inter: [
          "Inter var",
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32'
          },
        ],
        strong: "Poppins, sans-serif",
        primary: "Raleway, sans-serif",
        secondary: "Futura Std, sans-serif",
        sacramento: "Sacramento, cursive",
      },
    },
  },
  plugins: [],
}

