// tailwind.config.js
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#333333',
                secondary: '#757582',
                bodyColor: '#FAFAFA',
                bgColor: '#525252',
                hovered: '#212020',
                darkHovered: '#171717',
                muted: '#828282'
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [
        function ({ addBase, theme }) {
            // for allowing => var(--property)
            addBase({
                ":root": {
                    "--font-display": theme('sans'),
                    "--primary": theme("colors.primary"),
                    "--secondary": theme("colors.secondary"),
                    "--bodyColor": theme("colors.bodyColor"),
                    "--bgColor": theme("colors.bodyColor"),
                    "--hovered": theme("colors.hovered"),
                    "--darkHovered": theme("colors.darkHovered"),
                    "--muted": theme("colors.muted"),
                },
            });
        },],
};
