/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      primary: '#222831', // background
      secondary: '#393E46', // border, separator
      accent_1: '#00ADB5', // buttons, links
      accent_1_hover: '#66D9E8', // lighter shade for hover
      accent_2: '#FF5E5B', // button 2 (Contrasting color)
      accent_2_hover: '#FF8A87', // lighter shade for hover on Button 2
      accent_3: '#4EA699', // button 3 (Contrasting color)
      accent_3_hover: '#7FC2B8', // Lighter shade for hover on Button 3
      accent_4: '#EEEEEE', // text
    },
  },
  plugins: []
};