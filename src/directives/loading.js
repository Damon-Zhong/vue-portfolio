import styles from './loading.module.less';

const isLoaderExists = (el) => {
   return el.querySelector("div[data-role=loading]")
}

const createLoader = () => {
    const loaderContainer = document.createElement("div")
    loaderContainer.dataset.role = "loading"
    loaderContainer.className = styles["loader-container"]
    const loader = document.createElement("div")
    loader.className = styles.loader
    loaderContainer.appendChild(loader)

    return loaderContainer
}




// 简化写法
export default function(el, binding){
    const currentLoader = isLoaderExists(el)
    if(binding.value){
        if(!currentLoader){
           const newLoader = createLoader()
           el.appendChild(newLoader)
        }
    }else{
        if(currentLoader){
            currentLoader.remove()
        }
    }
}

// export default {
//     bind(el, binding){
//         // 只调用一次，指令第一次绑定到元素时调用，可进行一次性的初始化设置
//         if(binding.value){

//         }
//     },
//     inserted(el, binding){
//         // 被绑定元素插入父节点时调用
//     },
//     update(el, binding){
//         // 所在组件发生数据变化使节点更新时调用
//         if(binding.value){
            
//         }
//     }
// }