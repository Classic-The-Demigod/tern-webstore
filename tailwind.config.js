/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'primary': ["SF Mono", "sans-serif"],
    },
    extend: {
      keyframes: {
        rainbow: {
          '0%, 100%': { color: '#ff0000' },  // Red
          '14.28%': { color: '#ff7f00' },    // Orange
          '28.56%': { color: '#ffff00' },    // Yellow
          '42.84%': { color: '#00ff00' },    // Green
          '57.12%': { color: '#0000ff' },    // Blue
          '71.40%': { color: '#4b0082' },    // Indigo
          '85.68%': { color: '#8b00ff' },    // Violet
        },
      },
      animation: {
        rainbow: 'rainbow 5s linear infinite',
      },

      boxShadow: {
        'right-custom': '15px 0 5px -5px rgba(0,0,0,0.3)'
      },
      scale:{
        '110': "1.10",
        '115': "1.15",
        "120": "1.20"
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      content: ['before', 'after'],
      scale: ['hover', 'group-hover']
    }
  }
};
