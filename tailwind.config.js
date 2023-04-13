module.exports = {
  mode: 'jit',
  // darkMode: false, // or 'media' or 'class'
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'teal-input': '#ebfbfb',
        'teal-base': '#00D3D3',
        'teal-text': '#00A7A7',
      },
    },
  },
  plugins: [],
  purge: {
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        // standard: [/^bg-/, /^text-/],
      },
    },
  },
};
