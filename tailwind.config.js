const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F1420",
        panel: "#161C2C",
        line: "#2A3244",
        paper: "#ECE9E1",
        muted: "#A9AEBD",
        amber: "#E7A33E",
        teal: "#5FC7B9",
      },
      fontFamily: {
        display: ["var(--font-fraunces)"],
        sans: ["var(--font-inter)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
