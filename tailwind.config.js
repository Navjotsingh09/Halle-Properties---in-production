/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Brand-Colours-Blue': '#82c7be',
        'Brand-Colours-Black': '#2a363a',
        'Brand-Colours-White': '#ffffff',
        'Brand-Colours-Grey': '#dadddc',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
