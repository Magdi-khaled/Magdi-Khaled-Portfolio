// tailwind.config.js
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#d9d9da',
                secondary: '#ffc86b',
                third: '#717275',
                forth: '#8e7c5a',
                muted: '#7a7a7a',
                bgprimary: '#34353a',
                bgsecondary: '#3d3e42',
                bgthird: '#f0bf6c',
                bgforth: '#5d5e61',
            },
        },
    },
    plugins: [
        function ({ addBase, theme }) {
            addBase({
                ":root": {
                    "--font-display": theme('sans,serif'),
                    "--primary": theme("colors.primary"),
                    "--secondary": theme("colors.secondary"),
                    "--bgprimary": theme("colors.bgprimary"),
                },
            });
        },],
};
