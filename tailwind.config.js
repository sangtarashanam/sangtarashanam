module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my_bg_image' : "url('../public/4.svg')",
        'my_bg_image2' : "url('../public/20.png')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
