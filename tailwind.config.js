/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832"
        }
      },
      boxShadow: {
        "normal": "0px 1px 10px 0px rgba(0, 0, 0, 0.05)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
    },
    fontFamily: {
      "Dana": "Dana",
      "DanaMedium": "Dana Medium",
      "DanaDemiBold": "Dana DemiBold",
      "MorabbaLight": "Morabba Light",
      "MorabbaBold": "Morabba Bold",
      "MorabbaMedium": "Morabba Medium",
    }
  },
  plugins: [],
}
