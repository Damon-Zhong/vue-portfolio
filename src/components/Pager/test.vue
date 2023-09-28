<template>
    <div id="app">
      <Pager
        :total="total"
        :current="current"
        :visibleNumber="visibleNumber"
        @pageChange="handlePageChange($event)"
      />
    </div>
  </template>
  
  <script>
  import Pager from "./";
  
  export default {
    components: {
      Pager,
    },
    data() {
      return {
        current: 1,
        total: 302,
        visibleNumber: 7,
      };
    },
    methods: {
      handlePageChange(newPageNum) {
        this.current = newPageNum;
        // 加载当前页数据
      },
    },
  };
  </script>
  
  <style lang="less" scoped>
  </style>
  