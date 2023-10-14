<template>
  <div>
    <div class="app-container">
      <Layout>
        <template #left>
          <div class="site-aside">
            <SiteAside />
          </div>
        </template>
        <div class="main">
          主区域，宽度占满剩余空间，溢出隐藏
          <RouterView />
        </div>

        <template #right>
          <div class="right">右边栏区域，宽度适应内容，溢出隐藏</div>
        </template>
      </Layout>
    </div>
    <router-view />
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