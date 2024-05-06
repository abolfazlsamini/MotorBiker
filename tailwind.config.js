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

      fontSize: {
        head: [
          "20px",
          {
            lineHeight: "25px",
            wordSpacing: "1px",
            letterSpacing: "-2px",
            fontWeight: "700",
          },
        ],
        head2x: [
          "40px",
          {
            lineHeight: "45px",
            wordSpacing: "1px",
            letterSpacing: "-2px",
            fontWeight: "700",
          },
        ],
        head3x: [
          "58px",
          {
            lineHeight: "55px",
            wordSpacing: "1px",
            letterSpacing: "-2px",
            fontWeight: "700",
          },
        ],
        head4x: [
          "88px",
          {
            lineHeight: "75px",
            wordSpacing: "1px",
            letterSpacing: "-2px",
            fontWeight: "700",
          },
        ],
      },
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
        15: "15rem",
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
        "80%": "80%",
        65: "17rem",
        350: "350px",
        610: "610px",
        710: "710px",
        95: "95px",
        105: "105px",
        115: "115px",
        145: "145px",
        162: "160px",
        174: "196px",
        100: "100rem",
        800: "780px",
      },
      maxWidth: {
        "60%": "50%",
        "80%": "80%",
        600: "600px",
        768: "768px",
        880: "880px",
        900: "900px",
        1080: "1080px",
        1440: "1440px",
      },
      minHeight: {
        "100vh": "100vh",
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
        ubiwhite: "#d6d6d6",
        ubiwhiteshareplay: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
