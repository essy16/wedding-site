import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF7EF',
        champagne: '#E8D8B8',
        gold: '#B99A5B',
        ink: '#221B15',
        blush: '#F4E7DF'
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Arial', 'sans-serif']
      },
      boxShadow: {
        luxury: '0 30px 80px rgba(34, 27, 21, 0.14)'
      }
    }
  },
  plugins: []
}
export default config
