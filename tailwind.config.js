module.exports = {
  purge: ["./src/index.html"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mirage: {
          DEFAULT: '#151b2b'
        },
        bostonBlue:{
          light: '#428BCA',
          DEFAULT: '#00548D',
          dark:'#002355',
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}
