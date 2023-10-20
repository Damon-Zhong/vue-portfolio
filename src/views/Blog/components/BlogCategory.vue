<template>
  <div v-loading="isLoading" class="blog-category-container">
    文章分类
    <HierarchyList
      @onListItemClick="handleCategoryChange"
      v-if="!isLoading"
      :list="categoryList"
    />
  </div>
</template>

<script>
import HierarchyList from "./HierarchyList.vue";
import fetchData from "@/mixins/fetchData";
import { getBlogCategories } from "@/api/blog";

export default {
  mixins: [fetchData([])],
  components: {
    HierarchyList,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    categoryList() {
      const totalArticleCount = this.fetchResult.reduce(
        (prevRes, nextObj) => prevRes + nextObj.articleCount,
        0
      );

      const newList = [
        {
          name: "全部",
          id: -1,
          articleCount: totalArticleCount,
        },
        ...this.fetchResult,
      ];

      return newList.map((category) => ({
        ...category,
        isSelect: category.id === this.categoryId,
        suffix: `${category.articleCount}篇`,
      }));
    },
  },
  methods: {
    async fetchData() {
      return await getBlogCategories();
    },
    handleCategoryChange(categoryItem) {
      const changeToCategoryId = categoryItem.id;
      if (this.categoryId === changeToCategoryId) {
        return;
      }

      const query = {
        page: 1,
        limit: this.limit,
      };

      if (changeToCategoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          params: {
            categoryId: changeToCategoryId,
          },
          query,
        });
      }
    },
  },
  watch: {
    $route() {},
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.module.less";

.blog-category-container {
  width: 300px;
  padding: 20px;
  box-sizing: border-box;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 0;
  position: relative;
  height: 100%;

  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;

    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
</style>