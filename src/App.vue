<template>
  <div>
    <div class="app-container">
      <Layout>
        <template #left>
          <div class="site-aside">
            <SiteAside />
          </div>
        </template>

        <template #default>
          <RouterView />
        </template>

        <template #right>
          <div class="right-aside">
            <HierarchyList :list="testlist" @onListItemClick="handleItemClick" />
          </div>
        </template>
      </Layout>
    </div>
  </div>
</template>
<script>
import SiteAside from "@/components/SiteAside";
import Layout from "@/components/Layout";
import HierarchyList from "@/views/Blog/components/HierarchyList";

export default {
  components: {
    SiteAside,
    Layout,
    HierarchyList,
  },
  data() {
    return {
      testlist: [
        { id: "1", name: "Java", isSelect: false },
        { id: "2", name: "Python", isSelect: true },
        {
          id: "3",
          name: "Javascript",
          isSelect: false,
          children: [
            { id: "3-1", name: "React", isSelect: false },
            { id: "3-2", name: "React Native", isSelect: false },
          ],
        },
        { id: "4", name: "Go", isSelect: false },
        { id: "5", name: "React", isSelect: false },
      ],
    };
  },
  methods: {
    handleItemClick(item){
      console.log("select:", item)
    }
  }
};
</script>
<style lang="less" scoped>
@import "~@/styles/mixin.module.less";

.app-container {
  .self-fill(fixed);
}

.site-aside {
  width: 280px;
  height: 100%;
}

.right-aside {
  width: 280px;
  height: 100%;
}
</style>