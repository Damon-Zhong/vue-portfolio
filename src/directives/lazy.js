
import { debounce } from '@/utils'
import eventBus from '../eventBus'
import defaultLoader from "@/assets/defaultLoader.gif"

let imagesToUpdate = []

function setImageSrc(img){
    img.domEl.src = defaultLoader; // 先用占位图片

    const clientHeight = document.documentElement.clientHeight
    const rect = img.domEl.getBoundingClientRect();
    const imageHeight = rect.height || 180
    if(rect.top >= -imageHeight && rect.top <= clientHeight){
        // 进入视口范围
        const tempImg = new Image()
        tempImg.onload = function(){
            // 当图片加载完成后将src赋值
            img.domEl.src = img.src
        }
        tempImg.src = img.src

        imagesToUpdate = imagesToUpdate.filter(item => item !== img)
    }

}

function replaceAssetSrc(){
    for(const imgEl of imagesToUpdate){
        setImageSrc(imgEl)
    }
}

function handleScrollLazyEvent(domEl){
    replaceAssetSrc()
}

eventBus.$on("mainScroll", debounce(handleScrollLazyEvent) )

export default {
    inserted(el, binding){
        const imgObj = {
            domEl: el,
            src: binding.value,
            isHandled: false
        }
        imagesToUpdate.push(imgObj)
        setImageSrc(imgObj)
    },
    unbind(el){
        imagesToUpdate = imagesToUpdate.filter(img => img.domEl !== el)
    }
}