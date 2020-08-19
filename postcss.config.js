//postcss.config.js
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss("./tailwind.congig.js"),
        require('autoprefixer'),
    ],
};