<template>
  <div class="article-comments-container">
    <MessageArea
      title="评论区"
      :subTitle="`(${fetchResult.total})`"
      :list="fetchResult.rows"
      :isListLoading="isLoading"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import { getArticleComments } from "@/api/blog";

export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  methods: {
    async fetchData() {
      const articleId = this.$route.params.articleId || null;

      return await getArticleComments(articleId, this.page, this.limit);
    },
  },
};
</script>

<style>
</style>