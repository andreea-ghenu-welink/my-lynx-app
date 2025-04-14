import lynxPreset from '@lynx-js/tailwind-preset';

export default {
  mode: 'jit',
  presets: [lynxPreset],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: '#D8D846',
        secondary: '#06c2cc',
        accent: 'rgb(159, 147, 33)',
        dark: '#000000',
        white: '#FFFFFF',
      },
    },
  },
};