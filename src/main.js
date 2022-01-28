import Vue from 'vue'
import zain from './components/zain.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(zain),
}).$mount('#app')
