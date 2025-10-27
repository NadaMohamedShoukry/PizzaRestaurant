/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      //overrides the sans tailwind default font for the app
      sans: "Roboto Mono, monospace",
    },
    //if you want to add colors too with the fonts and keep
    //the previously created colors write it in the extends.
    extend: {
      colors: {
        pizza: "#1234",
      },
      height: {
        // dynamic viewport height
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
