import Vuex from 'vuex'
import Vue from "vue"
import banner from './banner'
import setting from './setting'
import projects from './projects'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        banner,
        setting,
        projects
    },
    strict: true
})