<template>
  <Layout>
    <div class="article-detail-container" v-loading="isLoading">
      <ArticleContent v-if="!!fetchResult" :article="fetchResult" />
    </div>
    <template #right>
      <div v-loading="isLoading" class="right-container">
        <ArticleToc v-if="!!fetchResult" :toc="fetchResult.toc" />
      </div>
    </template>
  </Layout>
</template>


<script>
import fetchData from "@/mixins/fetchData";
import { getArticleDetailById } from "@/api/blog";
import Layout from "@/components/Layout";
import ArticleContent from "./components/ArticleContent";
import ArticleToc from "./components/ArticleToc";

export default {
  components: {
    Layout,
    ArticleContent,
    ArticleToc,
  },
  mixins: [fetchData(null)],
  created() {},
  methods: {
    async fetchData() {
      const articleId = this.$route.params.articleId;
      return await getArticleDetailById(articleId);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.module.less";
@import "~@/styles/colors.module.less";

.article-detail-container {
  .fully-fill();
  overflow-x: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 15px;
  scroll-behavior: smooth;

}

.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;

}
</style>