// Laravel Mix
const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

require('laravel-mix-purgecss')

mix.setPublicPath('./dist/assets/')

// Compile css and js
mix
  .sass('./web/resources/styles/styles.scss', './css')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.config.js')],
  })
  .purgeCss({
    enabled: mix.inProduction(),
    folders: ['src', 'templates'],
    extensions: ['html', 'js', 'njk', 'vue'],
  })
  .js('./web/resources/js/index.js', './js/')

  if (!mix.inProduction()) {
    mix.js('./web/resources/js/a11y.js', './js/')
  }

// If production, minify css/js
if (mix.inProduction()) {
  mix.minify('./dist/assets/css/styles.css').minify('./dist/assets/js/index.js')
}
