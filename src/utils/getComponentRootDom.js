import Vue from "vue";

/**
 * 
 * @param {*} comp 
 * @param {*} props 
 */

export default function(comp, props) {
    const vm = new Vue({
        render: h => h(comp, { props })
    })
    
    vm.$mount()
    return vm.$el
}