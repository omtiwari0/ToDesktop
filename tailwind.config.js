/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      fontFamily: {
         'Poppins': ['Poppins', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif']
      },
      spacing: {
        '2.3': '0.600rem', // halfway between p-2 and p-3
      },
      colors: {
        'lightgrayish': '#f7f6f7',
        'red-50': '#fff1f2',
        'purple-50': '#f5f3ff',
        'yellow-50': '#fffbeb',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}

