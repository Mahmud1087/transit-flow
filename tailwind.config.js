/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        prim: {
          1: '#FFBE34',
          2: '#091242',
          3: '#1f2a69',
        },
        sec: {
          1: '#F4F4F4',
          2: '#1C1F35',
          3: '#666C89',
        },
        grad: {
          1: '#ffb629',
          2: '#ffda56',
          3: '#ffd7a6',
        },
        titleBg: {
          1: '#041c3780',
          2: '#e8e8e880',
        },
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
      pattern: /(bg|text|border)-sec-(1|2|3)/,
    },
    {
      pattern: /(bg|text|border)-titleBg-(1|2|3)/,
    },
    {
      pattern: /(bg|text|border)-grad-(1|2|3)/,
    },
    {
      pattern: /(bg|text|border)-prim-(1|2|3)/,
    },
  ],
};
