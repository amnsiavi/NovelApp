/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px", // Custom extra-small breakpoint
        sm: "750px", // Custom small breakpoint
        md: "768px", // Custom medium breakpoint
        lg: "1024px", // Custom large breakpoint
        xl: "1280px", // Custom extra-large breakpoint
      },
    },
  },
  plugins: [],
};
