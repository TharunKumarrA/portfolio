/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#1E1E1E",
      secondary: "#6E6E6E",
      background: "#EFEFEF",
    },
    fontSize: {
      hero: ["112px", { fontWeight: "900", lineHeight: "1.2" }],
      title: ["32px", { fontWeight: "normal", letterSpacing: "0.12em" }],
      heading: ["32px", { fontWeight: "medium", letterSpacing: "0.04em" }],
      focus: ["72px", { fontWeight: "bold", letterSpacing: "0.08em" }],
      subtitle: ["24px", { fontWeight: "normal", letterSpacing: "0.04em" }],
      link: ["18px", { fontWeight: "light", letterSpacing: "0.12em" }],
      para: ["18px", { fontWeight: "300", letterSpacing: "0.04em" }],
    },
    extend: {
      fontFamily: {
        komigo: ["var(--font-komigo)", "sans-serif"],
        code7x5: ["var(--font-code7x5)", "monospace"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
