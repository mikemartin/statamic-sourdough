const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Sansita', 'sans-serif'],
        sans: ['Archivo', 'sans-serif'],
      },
      colors: {
        primary: colors.orange,
        secondary: colors.amber,
        success: colors.green,
        error: colors.red,
        neutral: colors.stone,
        social: {
          twitter: '#1DA1F2',
          linkedin: '#1a91da',
          instagram: '#e1306c',
          facebook: '#3b5998',
          youtube: '#ff0000',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
