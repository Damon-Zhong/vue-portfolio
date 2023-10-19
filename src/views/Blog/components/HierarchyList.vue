<template>
  <ul class="list-wrapper">
    <li v-for="item in list" :key="item.id">
      <span @click="handleItemClick(item)" :class="{ active: item.isSelect }">{{ item.name }}</span>
      <HierarchyList :list="item.children" @onListItemClick="handleItemClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "HierarchyList",
  props: {
    // type Item = { id: string, name: string, isSelect: boolean, children?: Item[] }
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showList: false,
    };
  },
  methods: {
    handleItemClick(item){
        this.$emit("onListItemClick", item)
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.module.less";

.list-wrapper {
  list-style: none;
  padding: 0;

  .list-wrapper{
    margin-left: 1em;
  }

  li{
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;

    .active{
        color: @warn;
        font-weight: 700;
    }
  }
}
</style>