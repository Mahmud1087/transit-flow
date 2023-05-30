/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        prim1: '#FFBE34',
        prim2: '#091242',
        prim3: '#1f2a69',
        sec1: '#F4F4F4',
        heading: '#1C1F35',
        paragraph: '#666C89',
        grad1: '#ffb629',
        grad2: '#ffda56',
        grad3: '#ffd7a6',
        titleBg1: '#041c3780',
        titleBg2: '#e8e8e880',
        greyish: '#666C89',
      },

      backgroundImage: {
        heroImage: "url('./src/assets/Photo.png')",
        projectBg: "url('./src/assets/Background.png')",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-sec1/,
      pattern: /(bg|text|border)-paragraph/,
      pattern: /(bg|text|border)-heading/,
      pattern: /(bg|text|border)-greyish/,
      pattern: /(bg|text|border)-titleBg(1|2)/,
      pattern: /(bg|text|border)-grad(1|2|3)/,
    },
  ],
};
