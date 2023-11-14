<template>
  <div class="article-comments-container">
    <MessageArea
      title="评论区"
      :subTitle="`(${fetchResult.total})`"
      :list="fetchResult.rows"
      :isListLoading="isLoading"
      @submit="handleCommentSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import { getArticleComments, submitComment } from "@/api/blog";

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
    async handleCommentSubmit(formInput, callback){
      const articleId = this.$route.params.articleId || null;

      const newComment = await submitComment({...formInput, blogId: articleId  })

      this.fetchResult.rows.unshift(newComment);
      this.fetchResult.total++;
      callback("评论成功！") //调用子组件回调
    }
  },
};
</script>

<style>
</style>