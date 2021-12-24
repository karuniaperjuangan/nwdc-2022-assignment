module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'body': ['"Open Sans"', 'sans'],
      'heading': ['Exo'],
    },
    
    extend: {
      colors: {
      'nwdc-transparent': 'rgba(158, 0, 246,0)',
      'nwdc-bg-purple': '#9e00f6',
      'nwdc-bg-blue': '#6454f0',
      'nwdc-text-purple': '#322a78',
      'nwdc-violet': '#b65eba',
      'nwdc-dark-pink': '#5c4bff',
      'nwdc-light-pink': '#feadd5',
      'nwdc-orange': '#ffa62e',
      'nwdc-blue': '#5092f3',
      'nwdc-cyan': '#24e8de',
    },
    },
  },
  plugins: [],
}
