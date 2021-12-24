module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#FF7A7A",
        primaryRedHover: "#ffa3a3",
        primaryGreen: "#38CC8C",
        primaryGreenHover: "#63e0aa",
        accentBlue: "#6055A5",
        accentBlueHover: "#8478cc",
        neutralDarkBlue: "#3E3C49",
        neutralGrayBlue: "#B9B6D3",
      },
      boxShadow: {
        tryIt: "0px 10px 2px -2px rgba(0,0,0,0.3)",
        tryItDes: "0px 10px 2px -5px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
