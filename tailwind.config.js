module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#1E1E2E",
        accent: "#FAB387",
        muted: "rgba(240,237,232,0.4)",
      },
      maxWidth: {
        page: "768px",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)"],
        mono: ["var(--font-dm-mono)"],
        sans: ["var(--font-geist)"],
      },
    },
  },
  plugins: [],
}