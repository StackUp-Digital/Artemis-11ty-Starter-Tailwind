import LazyLoad from 'vanilla-lazyload'

export default () =>
  new LazyLoad({
    threshold: 0,
    cancel_on_exit: true,
    elements_selector: 'img.is-lazy-js',
  })
