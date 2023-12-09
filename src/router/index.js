import Vue from 'vue'
import VueRouter from "vue-router"
import routes from './routes'
import { tabTitleSetter } from '@/utils'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: "history"
})

router.afterEach((to, from) => {
  const routeName = to.meta.title

  if(routeName){
    tabTitleSetter.setRouteTitle(routeName)
  }
})

export default router