export default function(refVal){
    return {
        mounted() {
            console.log(this.$refs[refVal])
            this.$eventBus.$on("setMainScroll", this.handleSetMainScrollEvent)
            this.$refs[refVal].addEventListener('scroll', this.handleMainScrollEvent)
        },
        beforeDestroy() {
            this.$eventBus.$emit("mainScroll")
            this.$eventBus.$off("setMainScroll", this.handleSetMainScrollEvent)
            this.$refs[`${refVal}`].removeEventListener('scroll', this.handleMainScrollEvent)
        },
        methods: {
            handleSetMainScrollEvent(scrollTop){
                this.$refs[refVal].scrollTop = scrollTop
            },
            handleMainScrollEvent(){
                console.log("ahahahhaha")
                this.$eventBus.$emit("mainScroll", this.$refs[refVal])
            }
        },
    }
}