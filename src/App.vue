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
      </Layout>
    </div>
  </div>
</template>
<script>
import SiteAside from "@/components/SiteAside";
import Layout from "@/components/Layout";

export default {
  components: {
    SiteAside,
    Layout,
  },
  data() {
    return {};
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