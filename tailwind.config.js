/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      backgroundPosition: {
        "bottom-4": "center bottom 5%",
      },
      colors: {
        ubired: "#ff1c38",
        ubiyellow: "ffb52d",
      },
      zIndex: {
        11: "-1",
      },
      height: {
        20: "20vh",
        35: "35vh",
        60: "60vh",
        75: "75vh",
        78: "78vh",
        80: "80vh",
        90: "90vh",
        105: "105%",
        99: "99vh",
        110: "110%",
      },
      backgroundColor: {
        ubired: "#ff1c38",
        ubiyellow: "#ffb52d",
        ubiblack: "#292929",
      },
      textColor: {
        ubigray: "#292929",
      },
    },
  },
  plugins: [],
};
