<template>
  <Layout>
    <BlogList />

    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "./components/BlogList.vue";
import BlogCategory from "./components/BlogCategory.vue";

export default {
  mixins: [],
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },
  data() {
    return {
      page: 1,
      limit: 10,
      articleId: 1,
    };
  },
  created() {
    const { params = {}, query = {} } = this.$route ?? {};
    const { categoryId } = params;
    const { page, limit, articleId } = query;

    console.log("路由信息：", categoryId, page, limit, articleId);
  },
  methods: {},
};
</script>

<style>
</style>