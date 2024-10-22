/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{jx,jsx,tx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#EFFAF6',
                    100: '#D9F2E7',
                    200: '#B6E4D2',
                    300: '#95D0B7',
                    400: '#83B49B',
                    500: '#39977C',
                    600: '#217A64',
                    700: '#1A6252',
                    800: '#174E43',
                    900: '#144037',
                    950: '#0A2D20',
                },
                secondary: {
                    50: '#F0F7FF',
                    100: '#E0F1FE',
                    200: '#B9DEFE',
                    300: '#90C5FD',
                    400: '#63A8FA',
                    500: '#0C8CE9',
                    600: '#006FC9',
                    700: '#0257A2',
                    800: '#064B86',
                    900: '#083F6F',
                    950: '#072B4A',
                }
            },
        },
    },
    plugins: [],
}
