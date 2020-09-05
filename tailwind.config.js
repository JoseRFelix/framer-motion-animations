module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        grab: "grab",
        grabbing: "grabbing",
      },
    },
  },
  variants: {
    cursor: ["responsive", "active"],
  },
  plugins: [],
};
