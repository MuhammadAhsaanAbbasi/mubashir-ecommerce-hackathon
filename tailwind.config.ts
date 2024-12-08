import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myDark:"#252B42",
        myGrey:"#737373",
        myBlue:"#23A6F0",
        myGreen:"#2DC071",
        myDarkGreen:"#23856D",
        myOrange:"#E77C40",
        myLightBlue:"#8EC2F2",
        myDarkOrange:"#E74040",
        
        
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
""