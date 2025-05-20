/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bharat-green': {
          100: '#eafaef',
          200: '#d5f5df',
          300: '#b0eac0',
          400: '#4ade80', // primary green
          500: '#22c55e', // darker green
          600: '#16a34a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg')",
        'ev-pattern': "url('https://images.pexels.com/photos/6815341/pexels-photo-6815341.jpeg')",
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
}