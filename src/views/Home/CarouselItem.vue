<template>
  <div class="item-container">
    <div class="item-img">
      <ImageLoader @load="this.renderText" :src="carousel.bigImg" :placeholder="carousel.midImg" />
    </div>
    <div class="title" ref="title">
      {{ carousel.title }}
    </div>

    <div class="description" ref="description">
      {{ carousel.description }}
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";

export default {
  components: {
    ImageLoader,
  },
  props: ["carousel"],
  data(){

    return{
      titleWidth: 0,
      descriptionWidth: 0
    }
  },
  mounted(){
    this.titleWidth = this.$refs.title.clientWidth
    this.descriptionWidth = this.$refs.description.clientWidth
    this.renderText()
  },
  methods: {
    renderText(){
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // 强制页面渲染
      this.$refs.title.clientWidth
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth +"px";

      this.$refs.description.style.opacity = 1;
      this.$refs.description.style.width = 0;
      // 强制页面渲染
      this.$refs.description.clientWidth
      this.$refs.description.style.transition = "2s 0.5s";
      this.$refs.description.style.width = this.descriptionWidth +"px";
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.module.less";
@import "~@/styles/mixin.module.less";

.item-container {
  .fully-fill();
  color: @white;
  // background-color: @dark;
  position: relative;
}

.item-img {
  .fully-fill();
}

.title,
.description {
  position: absolute;
  letter-spacing: 2px;
  left: 30px;
  color: @white;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;

  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5); // 文字描边
}

.title {
  top: calc(50% - 40px);
  font-size: 2em;
}

.description {
  top: calc(50% + 20px);
  font-size: 1.2em;
}
</style>