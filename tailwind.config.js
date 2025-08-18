/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // avtomatik markazlash
        padding: "1rem", // ichki bo‘sh joy
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1184px", // eng katta qiymat
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        bebas: ["BebasNeue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
