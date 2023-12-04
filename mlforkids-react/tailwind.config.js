/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        // Add any other paths here. For example, if you have HTML files:
        './node_modules/@material-tailwind/react/**/*.js',
        "./public/**/*.html",
    ],
    theme: {
        extend: {
            colors: {
                'text-primary': '#000006',
                'text-gray': '#666B68',

                //menu
                'menu': '#22619B',
                'menu-hover': '#1A4C7A',
                'menu-active': '#CE5D5B',
                'hamburger-background': 'rgba(128, 128, 128, 0.3)',

                // button colors
                'red-button': '#CD5C5A',
                'red-button-hover': '#B44C4A',
                'cyan-button': '#74C4BC',
                'cyan-button-hover': '#5FADA5',

                // design colors
                'brand-cyan': '#74C4BC',
                'brand-cyan-hover': '#5FADA5',
                'brand-blue': '#22619B',
                'brand-red': '#CE5D5B',
                'brand-red-hover': '#B44C4A',
                'brand-orange': '#E8BE5B',
                'brand-white': '#FFFFFF',
                'brand-gray-1': '#666B68',
                'brand-gray-1-hover': '#5C605D',
                'brand-gray-2': '#D4D5CF',
                'brand-gray-2-hover': '#BEBFB9',

                'footer-bg-gray': '#EAEAE5',
            },
            // width: {
            //     'custom-width': '75rem', // Replace with the desired width.
            // },
        },
    },
    plugins: [],
    safelist: [
    ],
}
