/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// postcss.config.js
module.exports = {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('tailwindcss/nesting')(require('postcss-nesting')),
      require('autoprefixer'),
    ]
  }