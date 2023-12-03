import Vue from 'vue'
import App from './App.vue'
import './styles/global.module.less'
import router from './router'
import showMessage from './utils/showMessage'
import "./mock"
import vLoading from "./directives/loading"
import "./eventBus"

Vue.prototype.$showMessage = showMessage

// 注册全局指令
Vue.directive("loading", vLoading)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


