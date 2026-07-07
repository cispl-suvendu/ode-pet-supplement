import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bone: "var(--bone)",
        obsidian: "var(--obsidian)",
        oat: "var(--oat)",
        sage: "var(--sage)",
        clay: "var(--clay)",
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
        info: "var(--info)",
      },
      fontFamily: {
        display: ["var(--font-ogg)", "Georgia", "Times New Roman", "serif"],
        body: ["var(--font-neue-haas)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
