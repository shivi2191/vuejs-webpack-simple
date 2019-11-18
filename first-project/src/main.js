import Vue from 'vue'
import App from './App.vue'
import Message from './Home.vue'
import ServerStatus from './Components/ServerStatus.vue'

export const eventBus = new Vue();

Vue.component('my-message-ext', Message)
Vue.component('my-server-status', ServerStatus)

new Vue({
  el: '#app',
  render: h => h(App)
})
