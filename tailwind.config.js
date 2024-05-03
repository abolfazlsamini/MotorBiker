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
        terms: "#d6d6d6",
        ubigray: "#121212",
        ubiblue: "#007aff",
        ubiwhite: "#f2f2f2",
        ubiblack2: "#0d0d0d",
      },
      zIndex: {
        11: "-1",
        22: "-2",
      },
      height: {
        20: "20vh",
        30: "30vh",
        35: "35vh",
        46: "46vh",
        48: "48vh",
        60: "60vh",
        65: "65vh",
        75: "75vh",
        78: "78vh",
        80: "80vh",
        90: "90vh",
        106: "106vh",
        105: "105%",
        99: "99vh",
        110: "110%",
        115: "115vh",
        400: "400px",
        900: "900px",
        70: "70px",
      },
      width: {
        "40%": "40%",
        "60%": "60%",
        100: "100rem",
        800: "780px",
      },
      maxWidth: {
        600: "600px",
        900: "900px",
        1080: "1080px",
        1440: "1440px",
      },
      padding: {
        "1/5": "15%",
      },
      backgroundColor: {
        ubired: "#ff1c38",
        ubiyellow: "#ffb52d",
        ubiblack: "#292929",
        ubiblue: "#006ef5",
        ubibluehover: "#1991ff",
      },
      textColor: {
        ubiblue: "#006ef5",
        ubigray: "#292929",
      },
    },
  },
  plugins: [],
};
