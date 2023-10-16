import getComponentRootDom from "./getComponentRootDom"
import Icon from "@/components/Icon"
import styles from './message.module.less'

/**
 * 
 * @param {String} content 
 * @param {String} type type of the popup message, allow values: success, error, warn, info
 * @param {HTMLElement} container HTML element that wraps the message, default to the viewport
 * @param {Number} duration popup message fade out time, default to 2s
 * @param {Function} onAnimationFinish callback that runs upon message dismiss
 */
export default function (msgConfig = {}) {
    const { content = "", type = "info", container = document.body, duration = 2000, onAnimationFinish } = msgConfig
    // 创建消息元素
    const divEl = document.createElement("div")
    const iconEl = getComponentRootDom(Icon, {
        type
    })

    divEl.innerHTML = `<span class="${styles.icon}">${iconEl.outerHTML}</span><div>${content}</div>`
    divEl.className = `${styles.message} ${styles["message-" + type]}`

    if(container){
        if(getComputedStyle(container).position === "static"){
            container.style.position = 'relative'
        }
    }

    // 插入消息元素
    container.appendChild(divEl)

    // 强制渲染，保证动画效果
    divEl.clientHeight //trigger reflow

    // 动画效果
    divEl.style.opacity = 1
    divEl.style.transform = `translate(-50%, -50%)`

    // 消息元素消失
    setTimeout(() => {
        divEl.style.opacity = 0
        divEl.style.transform = `translate(-50%, -50%) translateY(-80%)`

        // 动画结束后删除消息元素，运行回调函数，只触发一次
        divEl.addEventListener('transitionend', function(){
            divEl.remove()

            if(onAnimationFinish){
                onAnimationFinish()
            }
        }, { once: true })
    }, duration);
}