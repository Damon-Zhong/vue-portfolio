<template>
  <div v-loading="isLoading" class="home-container" ref="container" @wheel="handleWheel">
    <ul
      class="carousel-container"
      :style="{
        marginTop: getContainerPosition,
      }"
      @transitionend="handleTransitionEnd"
      v-if="!isLoading"
    >
      <li v-for="banner in fetchResult" :key="banner.id">
        <CarouselItem :carousel="banner" />
      </li>
    </ul>

    <div
      v-if="!isLoading"
      v-show="currentIndex > 0"
      class="icon prev"
      @click="switchTo(currentIndex - 1)"
    >
      <Icon type="arrowUp" />
    </div>
    <div
      v-if="!isLoading"
      v-show="currentIndex < fetchResult.length - 1"
      class="icon next"
      @click="switchTo(currentIndex + 1)"
    >
      <Icon type="arrowDown" />
    </div>

    <ul v-if="!isLoading" class="indicators">
      <li
        v-for="(banner, index) in fetchResult"
        :key="banner.id"
        :class="{ active: index == currentIndex }"
        @click="switchTo(index)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from "@/api/banner";
import CarouselItem from "./CarouselItem.vue";
import Icon from "@/components/Icon";
import fetchData from "@/mixins/fetchData"

export default {
  mixins: [fetchData([])],
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      currentIndex: 0, // 当前显示的轮播图下标
      containerHeight: 0, // 容器高度
      isScrolling: false, // 是否正在翻页
    };
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    getContainerPosition() {
      return -this.containerHeight * this.currentIndex + "px";
    },
  },
  methods: {
    async fetchData() {
      return await getBanners()
    },
    switchTo(toIndex) {
      this.currentIndex = toIndex;
    },
    handleWheel(e) {
      const scrollDistance = e.deltaY;
      if (this.isScrolling) {
        return;
      }

      if (scrollDistance < 0) {
        // 向上滚动
        if (this.currentIndex === 0 || scrollDistance > -10) {
          return;
        }

        this.currentIndex--;
        this.isScrolling = true;
      } else {
        //向下滚动
        if (
          this.currentIndex === this.fetchResult.length - 1 ||
          scrollDistance < 10
        ) {
          return;
        }

        this.currentIndex++;
        this.isScrolling = true;
      }
    },
    handleTransitionEnd() {
      this.isScrolling = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.module.less";
@import "~@/styles/colors.module.less";

.home-container {
  .fully-fill();
  position: relative;
  overflow: hidden;

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  .carousel-container {
    .fully-fill();
    transition: 0.5s;

    li {
      .fully-fill();
    }
  }

  .icon {
    .self-center-position();
    font-size: 30px;
    color: @grey;
    cursor: pointer;
    transform: translateX(-50%);
    @gap: 25px;
    @amp: 5px;

    &.prev {
      top: @gap;
      animation: vibrate-upward 1s infinite;
    }

    &.next {
      top: auto;
      bottom: @gap;
      animation: vibrate-downward 1s infinite;
    }

    @keyframes vibrate-upward {
      0% {
        transform: translate(-50%, @amp);
      }

      50% {
        transform: translate(-50%, -@amp);
      }

      100% {
        transform: translate(-50%, @amp);
      }
    }

    @keyframes vibrate-downward {
      0% {
        transform: translate(-50%, -@amp);
      }

      50% {
        transform: translate(-50%, @amp);
      }

      100% {
        transform: translate(-50%, -@amp);
      }
    }
  }

  .indicators {
    .self-center-position();
    transform: translateY(-50%);
    left: auto;
    right: 20px;

    li {
      width: 7px;
      height: 7px;
      border: 1px solid @white;
      border-radius: 50%;
      background-color: @words;
      box-sizing: border-box;
      cursor: pointer;
      margin-bottom: 10px;
      transition: 0.5s;

      &.active {
        background-color: @white;
      }
    }
  }
}
</style>