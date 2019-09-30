import Vue from 'vue'
import router from './router/router'
import store from './store/store'
import './plugins/element.js';
import './assets/common/reset.css'
import http from '@/utils/http'
import fn from '@/utils/fn'

Vue.config.productionTip = false

// 挂载全局
Vue.prototype.$http = http // ajax请求方法
Vue.prototype.$fn = fn     // 工具方法

new Vue({
  router,
  store,
}).$mount('#app')
