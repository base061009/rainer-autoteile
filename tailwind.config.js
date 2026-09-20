/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#17A9C4",
        "primary-dark": "#0E7A8F",
        ink: "#1A1A1A",
        muted: "#6B6B6E",
        surface: "#F5F7F8",
        danger: "#C23934",
        success: "#1F7A4D",
      },
    },
  },
  plugins: [],
};
