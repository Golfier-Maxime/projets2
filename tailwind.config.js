const withAnimations = require('animated-tailwindcss');


module.exports = withAnimations({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      "colors": {
        "Dark-purple": "#271B3D",
        "Deep-purple": "#6133B4",
        "Simple-purple": "#9D6BF5",
        "Simple-cyan": "#46A7D9",
        "green-cyan": "#46D9A4",
        "cyanAxolott": "#08A2F1",
        "black-par": "1D1D1B"
      },

      "fontFamily": {
        "mulish": "Mulish",
        "prompt": "Prompt"
      },
      screens: {
        'ipad_mini': '744px',
        'ipad_pro': '1024px',
        'desktop': '1440px',

      },
    },
  },
  plugins: [],
});