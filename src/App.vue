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
import Pager from "@/components/Pager";
import Empty from "@/components/Empty";
import ImageLoader from "@/components/ImageLoader";
import SiteAside from "@/components/SiteAside";
import Modal from "@/components/Modal";
import Layout from "@/components/Layout";

export default {
  components: {
    Pager,
    Empty,
    ImageLoader,
    SiteAside,
    Modal,
    Layout,
  },
  methods: {
    onImageLoaded() {
      console.log("图片加载完成");
    },
  },
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
</style>