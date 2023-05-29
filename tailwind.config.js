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
      },

      backgroundImage: {
        heroImage: "url('./src/assets/Photo.png')",
        projectBg: "url('./src/assets/Background.png')",
      },
    },
  },
  plugins: [],
};
