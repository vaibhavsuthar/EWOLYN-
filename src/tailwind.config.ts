import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-cyan': '#307B96',
        'light-gray': '#F0F4F7',
        'soft-orange': '#E59554',
        'indian-saffron': '#FF9933',
        'indian-green': '#138808',
        'indian-navy': '#000080',
      },
      fontFamily: {
        sans: ['var(--font-pt-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
