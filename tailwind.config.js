/** @type {import('tailwindcss').Config} */
export default {
 content: [
  "./index.html",
  "./src/**/*"
],
  theme: {
    extend: {
      fontFamily: {
        serifHeading: ["'Playfair Display'", "serif"],
      },
      colors: {
        brandBlue: "#1C5C7B",
      },
      boxShadow: {
        cardGlow:
          "0 20px 40px rgba(17, 82, 113, 0.12), inset 0 6px 8px rgba(255,255,255,0.6)",
      },
    },
  },
  plugins: [],
};



// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

