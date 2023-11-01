<template>
  <div  class="article-toc-container">
    <h2>目录</h2>
    <HierarchyList
      @onListItemClick="handleTocChange"
      :list="toc"
    />
  </div>
</template>

<script>
import HierarchyList from './HierarchyList';

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
  created(){

  },
  methods: {
    handleTocChange(item){
      location.hash = item.anchor
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