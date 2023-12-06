<template>
  <div class="article-toc-container">
    <h2>目录</h2>
    <HierarchyList @onListItemClick="handleTocChange" :list="tocWithSelect" />
  </div>
</template>

<script>
import HierarchyList from './HierarchyList';
import { debounce } from '@/utils'

export default {
  components: {
    HierarchyList
  },
  props: {
    toc: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeAnchor: ""
    }
  },
  computed: {
    tocWithSelect() {
      const rebuildToc = (tocArr = []) => {
        return tocArr.map(toc => ({
          ...toc,
          isSelect: this.activeAnchor === toc.anchor,
          children: rebuildToc(toc.children)
        }))
      }

      return rebuildToc(this.toc)
    },
    // 根据Toc获取所有标题h元素的id
    titleDoms() {
      const titles = []

      const addToTitleList = (tocArr) => {
        for (const toc of tocArr) {
          const titleEl = document.getElementById(toc.anchor)

          titles.push(titleEl)

          if (toc.children && toc.children.length) {
            addToTitleList(toc.children)
          }
        }
      }

      addToTitleList(this.toc)

      return titles
    }

  },
  created() {
    this.handler = debounce(this.handleActiveAnchorChange, 50)
    this.$eventBus.$on("mainScroll", this.handler)
  },
  destroyed() {
    this.$eventBus.$off("mainScroll", this.handler)
  },
  methods: {
    handleTocChange(item) {
      location.hash = item.anchor
    },
    // 设置activeAnchor
    handleActiveAnchorChange(domEl) {
      if(!domEl){
        return
      }
      const visibleHeight = 200;
      this.activeAnchor = "" // 重置
      // 当对应<h>元素到达视口指定位置
      for (const el of this.titleDoms) {
        if (!el) {
          continue;
        }

        // 元素距离视口顶部的距离
        const elTop = el.getBoundingClientRect().top

        if (elTop >= 0 && elTop < visibleHeight) {
          this.activeAnchor = el.id
          return
        } else if (elTop > visibleHeight) {
          return
        } else {
          this.activeAnchor = el.id // 假定激活状态直到下一个标题元素进入指定范围
        }

      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/colors.module.less";

.article-toc-container {
  box-sizing: border-box;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 0;
  height: 100%;

  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;

    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
</style>