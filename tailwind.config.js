/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    daisyui: {
      themes: ["winter", "night"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        montserrat: ["montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lobster: ["Lobster", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
