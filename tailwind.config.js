export const content = [
  "./src/pages/**/*.{js,jsx,tsx}",
  "./src/components/**/*.{js,jsx,tsx}",
  "./src/app/**/*.{js,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      blue: {
        light: "#82bfca",
        medium: "#489fb5",
        dark: "#16697a",
      },
      brown: {
        light: "#ede7e3",
      },
      orange: "#ffa62b",
    },
    fontFamily: {
      title: ["Roboto", "sans-serif"],
      general: ["Times New Roman", "serif"],
    },
    fontSize: {},
  },
  animation: {
    spin: 'spin 1s linear infinite',
    'spin-slow': 'spin 5s linear infinite',
  },
};
export const plugins = [];
