module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: "'Ubuntu'",
        OpenSans: "'Open Sans'",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
