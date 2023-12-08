import Vue from "vue";
const app = new Vue({})
/* 
* 事件名：mainScroll
* 定义：主区域滚动条位置发生变化时触发
* 参数：
    - 滚动的dom元素 

* 事件名：setMainScroll
* 定义：需要设置主区域滚动位置时触发
* 参数：
    - 滚动的位置 
*/
// const listeners = {}

// const eventBus = {
//     $on(eventName, handler){
//         if(!listeners[eventName]){
//             listeners[eventName] = new Set()
//         }else{
//             listeners[eventName].add(handler)
//         }
//     },
//     $off(eventName, handler){
//         if(!listeners[eventName]){
//             return
//         }
        
//         listeners[eventName].delete(handler)
//     },
//     $emit(eventName, ...args){
//         if(!listeners[eventName]){
//             return
//         }

//         for(const handler of listeners[eventName]){
//             handler(...args)
//         }
//     }
// }



// Vue实例当中就带有$on, $off, $emit方法，即可实现事件总线功能
// export default new Vue({

// })

// 也可直接在Vue原型上添加
Vue.prototype.$eventBus = app

export default app