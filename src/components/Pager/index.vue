<template>
    <div class="pager-container" v-if="pageNumber > 1">
      <a @click="handlePageChange(1)" :class="{ disabled: current === 1 }"
        >|&lt;&lt;</a
      >
      <a
        @click="handlePageChange(current - 1)"
        :class="{ disabled: current === 1 }"
        >&lt;&lt;</a
      >
  
      <a
        v-for="(n, i) in currentDisplayPages"
        :key="i"
        :class="{ active: current === n }"
        @click="handlePageChange(n)"
        >{{ n }}</a
      >
  
      <a
        @click="handlePageChange(current + 1)"
        :class="{ disabled: current === pageNumber }"
        >&gt;&gt;</a
      >
      <a
        @click="handlePageChange(pageNumber)"
        :class="{ disabled: current === pageNumber }"
        >&gt;&gt;|</a
      >
    </div>
  </template>
  
  <script>
  export default {
    props: {
      current: {
        type: Number,
        default: 1,
      },
      total: {
        type: Number,
        default: 100,
      },
      limit: {
        type: Number,
        default: 10,
      },
      visibleNumber: {
        type: Number,
        default: 10,
      },
    },
    computed: {
      // 总页数
      pageNumber() {
        return Math.ceil(this.total / this.limit);
      },
      // 可见的最小页码
      minPageNum() {
        let min = this.current - Math.floor(this.visibleNumber / 2);
  
        if (min < 1) {
          min = 1;
        }
  
        if (min > this.pageNumber - this.visibleNumber + 1) {
          min = this.pageNumber - this.visibleNumber + 1;
        }
  
        return min;
      },
      // 可见的最大页码
      maxPageNum() {
        let max = this.minPageNum + this.visibleNumber - 1;
  
        if (max > this.pageNumber) {
          max = this.pageNumber;
        }
  
        return max;
      },
      // 当前可见页码
      currentDisplayPages() {
        let pageNumberArr = [];
  
        for (let i = this.minPageNum; i <= this.maxPageNum; i++) {
          pageNumberArr.push(i);
        }
  
        return pageNumberArr;
      },
    },
    methods: {
      handlePageChange(newPage) {
        this.$emit("pageChange", newPage);
      },
    },
  };
  </script>
  
  <style lang="less" scoped>
  @import "~@/styles/colors.module.less";
  
  .pager-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  
    a {
      color: @primary;
      margin: 0 3px;
      cursor: pointer;
  
      &.disabled {
        color: @lightWords;
        cursor: not-allowed;
      }
  
      &.active {
        color: @words;
        font-weight: bold;
        cursor: text;
      }
    }
  }
  </style>