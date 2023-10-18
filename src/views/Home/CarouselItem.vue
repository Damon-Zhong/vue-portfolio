<template>
  <div
    class="item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="item-img" :style="getImagePosition" ref="image">
      <ImageLoader
        @load="this.renderText"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
      />
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
  data() {
    return {
      titleWidth: 0,
      descriptionWidth: 0,
      containerSize: null, // 外层容器的尺寸
      imageSize: null, // 内层图片尺寸
      mouseX: 0, // 鼠标相对于外层容器的横坐标
      mouseY: 0, // 鼠标相对于外层容器的纵坐标
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descriptionWidth = this.$refs.description.clientWidth;
    this.setSize();
    this.mouseX = this.getContainerCenter.x;
    this.mouseY = this.getContainerCenter.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  computed: {
    // 获取图片定位坐标
    getImagePosition() {
      if (!this.imageSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.imageSize.width - this.containerSize.width; // 多出的宽度
      const extraHeight = this.imageSize.height - this.containerSize.height; // 多出的高度
      // 等比例移动
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px, ${top}px)`, // 效率较直接设置left top高，不触发reflow
      };
    },
    getContainerCenter() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  methods: {
    renderText() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // 强制页面渲染
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.description.style.opacity = 1;
      this.$refs.description.style.width = 0;
      // 强制页面渲染
      this.$refs.description.clientWidth;
      this.$refs.description.style.transition = "2s 0.5s";
      this.$refs.description.style.width = this.descriptionWidth + "px";
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.imageSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      const { left, top } = rect;
      const { clientX, clientY } = e;

      this.mouseX = clientX - left;
      this.mouseY = clientY - top;
    },
    handleMouseLeave(e) {
      this.mouseX = this.getContainerCenter.x;
      this.mouseY = this.getContainerCenter.y;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.module.less";
@import "~@/styles/mixin.module.less";

.item-container {
  .fully-fill();
  color: @white;
  background-color: @dark;
  position: relative;
  overflow: hidden
}

.item-img {
  .fully-fill();
  width: 110%;
  height: 110%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s;
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