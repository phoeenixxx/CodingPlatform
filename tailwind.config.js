export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        editor: {
          bg: '#1e1e1e',
          sidebar: '#252526',
          active: '#37373d',
          text: '#d4d4d4',
          accent: '#007acc'
        }
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}