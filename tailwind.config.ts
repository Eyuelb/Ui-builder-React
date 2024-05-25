import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['class', '[data-mantine-color-scheme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "12px",
        sm: "13px",
        md: "16px",
        lg: "19px",
        xl: "24px",
      },
      colors: {
        primary: {},
        secondary: {},
      },
      container: {
        padding: '1rem',
        screens: {
          xs: '412px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      screens: {
        xs: '412px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
export default config;
