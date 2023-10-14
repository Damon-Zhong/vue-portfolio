<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <Avatar url="https://shop7.webmodule.prestashop.net/pokedoge/11831-large_default/snorlax.jpg" :size="100" />
    <Icon type="home" /> -->
    <Pager
      :total="total"
      :current="current"
      :visibleNumber="visibleNumber"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Avatar from "./components/Avatar";
import Icon from "./components/Icon";
import Pager from "./components/Pager";
import Empty from "./components/Empty"

export default {
  name: "App",
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
