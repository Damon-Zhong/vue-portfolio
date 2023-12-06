<template>
    <div v-show="show" @click="handleClick" class="back-to-top">
        Top
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    created() {
        this.$eventBus.$on("mainScroll", this.handleScroll)
    },
    destroyed() {
        this.$eventBus.$off('mainScroll', this.handleScroll)
    },
    methods: {
        handleScroll(domEl) {
            if(!domEl){
                this.show = false
                return
            }
            const threshold = 500
            this.show = domEl.scrollTop > threshold
        },
        handleClick(){
            this.$eventBus.$emit("setMainScroll", 0)
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/colors.module.less";

.back-to-top {
    background: @primary;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    z-index: 99;
    right: 25px;
    bottom: 25px;
    cursor: pointer;
    line-height: 50px;
    color: @white;
    text-align: center;
}
</style>