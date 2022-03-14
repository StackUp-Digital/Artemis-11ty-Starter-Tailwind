// Laravel Mix
const mix = require('laravel-mix')

mix.setPublicPath('./dist/assets/')

mix
  .js('./web/resources/js/index.js', './js')
  .postCss('./web/resources/styles/styles.css', './css', [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ])

if (!mix.inProduction()) {
  mix.js('./web/resources/js/a11y.js', './js/')
}

// If production, minify css/js
if (mix.inProduction()) {
  mix.minify('./dist/assets/css/styles.css').minify('./dist/assets/js/index.js')
}
