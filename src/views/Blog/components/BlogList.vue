<template>
  <div v-loading="isLoading" ref="container" class="article-list-container">
    <ul v-if="!isLoading">
      <li
        v-for="article in fetchResult.rows"
        :key="article.id"
        :class="{ active: true }"
      >
        <div v-if="article.thumb" class="article-thumb">
          <img
            :src="article.thumb"
            :title="article.title"
            :alt="article.title"
          />
        </div>

        <div class="article-main">
          <a href="">
            <h2>{{ article.title }}</h2>
          </a>
          <div class="article-info-container">
            <span>日期: {{ article.createDate }}</span>
            <span>浏览量: {{ article.scanNumber }}</span>
            <span>评论: {{ article.commentNumber }}</span>
            <a href="">{{ article.category.name }}</a>
          </div>

          <div class="article-description">
            {{ article.description }}
          </div>
        </div>
      </li>
    </ul>
    <Pager
      v-if="!isLoading && fetchResult.total"
      :current="routeInfo.page"
      :total="fetchResult.total"
      :limit="routeInfo.limit"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import fetchData from "@/mixins/fetchData";
import { getBlogsByPage } from "@/api/blog";

export default {
  mixins: [fetchData({})],
  components: {
    Pager,
  },
  data() {
    return {
      page: 1,
      limit: 10,
      articleId: null,
    };
  },
  computed: {
    routeInfo() {
      const { params = {}, query = {} } = this.$route ?? {};
      const categoryId = +params.categoryId || -1;
      const page = +query.page || 1;
      const limit = +query.limit || 10;
      const articleId = query.articleId || null;

      return {
        categoryId,
        page,
        limit,
        articleId,
      };
    },
  },
  watch: {
    $route: {
      async handler(newVal, oldVal) {
        this.isLoading = true;
        // this.$refs.container.scrollTop = 0
        this.fetchResult = await this.fetchData();
        this.isLoading = false;
      },
      deep: false, // 是否监听内部属性变化
      immediate: false, // 是否立即执行一次handler
    },
  },
  methods: {
    async fetchData() {
      const { page, categoryId, limit } = this.routeInfo;
      return await getBlogsByPage(page, limit, categoryId);
    },
    handlePageChange(newPage) {
      const { categoryId, limit, articleId } = this.routeInfo;
      let urlStr = "/articles";
      const queryStr = `?page=${newPage}&limit=${limit}&articleId=${articleId}`;

      if (categoryId == -1) {
        urlStr = urlStr + queryStr;
      } else {
        urlStr = urlStr + `/category/${categoryId}` + queryStr;
      }

      this.$router.push(urlStr).catch(() => {});
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.module.less";
@import "~@/styles/mixin.module.less";

.article-list-container {
  line-height: 1.7;
  position: relative;
  display: flex;
  flex-direction: column;
  .fully-fill();
  box-sizing: border-box;
  scroll-behavior: smooth;
  padding: 20px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
  }
}

li {
  display: flex;
  border-bottom: 1px solid @grey;
  padding: 15px 0;

  .article-thumb {
    flex: 0 0 auto;
    margin-right: 15px;

    img {
      display: block;
      max-width: 200px;
      object-fit: cover;
      border-radius: 5px;
    }
  }
}

.article-main {
  flex: 1 1 auto;

  h2 {
    margin: 0;
  }

  .article-info-container {
    font-size: 12px;
    margin: 2px 0 15px;
    color: @grey;

    span {
      margin-right: 15px;
    }
  }
}

.article-description {
  font-size: 14px;
}
</style>