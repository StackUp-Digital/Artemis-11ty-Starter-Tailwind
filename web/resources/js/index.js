import Vue from 'vue'
import LazyLoad from './plugins/lazyload'
import Notification from './components/Notification.vue'

// Example Function
export function logMessage(name) {
  return `Hey ${name}, it's good to see you!`
}

logMessage('Artemis')

// Main init function
// Use this to handle Vue components as below
function init() {
  new Vue({
    el: '#app',
    components: { Notification },
    mounted() {
      LazyLoad()
    },
  })
}

init()
