module.exports = {
    content: [
        './src/**/*.html',
        './src/**/*.ts'
    ],
    theme: {
        extend: {
            colors: {
                mirage: {
                    DEFAULT: '#151b2b'
                },
                bostonBlue: {
                    light: '#428BCA',
                    DEFAULT: '#00548D',
                    dark: '#1d2f49',
                }
            }
        },
    },
    variants: {
        extend: {
            backgroundColor: ["active"],
            filter: ['hover'],
            zIndex: ['hover', 'active'],
            fill: ['hover', 'focus'],
        },
    },
    plugins: [],
}