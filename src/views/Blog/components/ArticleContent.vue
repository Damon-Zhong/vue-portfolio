<template>
  <div class="article-content-container">
    <h1>{{ article.title }}</h1>
    <div class="article-info-container">
      <span>日期: {{ article.createDate }}</span>
      <span>浏览量: {{ article.scanNumber }}</span>
      <a href="#message-form">评论: {{ article.commentNumber }}</a>
      <router-link
        :to="{
          name: 'CategoryBlog',
          params: {
            categoryId: article.category.id,
          },
        }"
      >
        {{ article.category.name }}
      </router-link>
    </div>

    <div v-html="article.htmlContent" class="markdown-body">

    </div>
  </div>
</template>

<script>
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";

export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(this.article);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.module.less";

.article-info-container {
  font-size: 12px;
  color: @grey;

  span {
    margin-right: 15px;
  }
}

.markdown-body {
    margin: 2em 0;
}
</style>