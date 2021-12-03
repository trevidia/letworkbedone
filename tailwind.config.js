module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontsize: {
        tiny: '0.6rem'
      },
      height: {
        "screen-90": "90vh",
        "screen-80": "80vh",
        "screen-70": "70vh",
        "screen-60": "60vh",
        "screen-50": "50vh",
        "screen-40": "40vh",
        "screen-30": "30vh",
        "screen-20": "20vh",
        "screen-10": "10vh",
      },
      width: {
        "screen-90": "90vw",
        "screen-80": "80vw",
        "screen-70": "70vw",
          "screen-60": "60vw",
          "screen-50": "50vw",
          "screen-40": "40vw",
          "screen-30": "30vw",
          "screen-20": "20vw",
          "screen-10": "10vw",
      },
        backgroundColor: {
          yellowgreen: "#83C724",
          primary: "#0076CB",
          secondary: "#2b3247",
          alert: "#ffeeba",
          linkedin: "#0e76a8",
        },
        textColor: {
          alert: "#856404",
          username: "#2718f7",
          link: "#0076CB",
        },
        borderColor: {
            primary: "#0076CB"
        }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      height: ['group-hover']
    },
  },
  plugins: [],
}
