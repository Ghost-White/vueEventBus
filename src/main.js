import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 事件总线
Vue.prototype.$EventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
