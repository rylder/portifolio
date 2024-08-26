import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#282828",
      green: "#0EA47A",
      gray: "#3E3E3E",
    },
  },
  plugins: [],
};

export default config;
