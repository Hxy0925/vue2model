import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'           //vue
import router from './router'         //路由
import './plugins/element.js'         //element
import * as echarts from 'echarts'    //图表

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
