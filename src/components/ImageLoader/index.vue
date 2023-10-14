<template>
  <div class="image-loader-container">
    <img v-if="!isTransitionFinished" class="image-placeholder" :src="placeholder" />
    <img
      class="image-origin"
      :src="src"
      @load="onLoadFinish"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      isOriginLoaded: false,
      isTransitionFinished: false
    };
  },
  computed: {
    originOpacity() {
      return this.isOriginLoaded ? 1 : 0;
    },
  },
  methods: {
    onLoadFinish() {
      this.isOriginLoaded = true;
      setTimeout(() => {
        this.isTransitionFinished = true
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.module.less";

.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    .self-fill();
    object-fit: cover;
  }
}

.image-placeholder {
  filter: blur(5px);
}
</style>