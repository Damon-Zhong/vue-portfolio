import Vue from 'vue'
import App from './App.vue'
import './styles/global.module.less'
import router from './router'
import showMessage from './utils/showMessage'
import "./mock"
import "./eventBus"

// Directives
import vLoading from "./directives/loading"
import vLazy from "./directives/lazy"
Vue.prototype.$showMessage = showMessage

// 注册全局指令
Vue.directive("loading", vLoading)
Vue.directive("lazy", vLazy)
 
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


