<template>
  <div v-loading="isLoading" ref="projectContainer" class="project-list-container">
    <div v-for="project in projectData" :key="project.id" class="project-item">
      <a
        :href="project.url ? project.url : `javascript:alert('Unavailable')`"
        :target="project.url ? `_blank` : '_self'"
        ><img class="thumb" v-lazy="project.thumb"
      /></a>
      <div class="prject-info-container">
        <h2>
          项目标题: {{ project.name
          }}<a
            :href="
              project.github
                ? project.github
                : `javascript:alert('Unavailable')`
            "
            :target="project.github ? `_blank` : '_self'"
            class="github"
            >Github</a
          >
        </h2>
        <p v-for="(description, i) in project.description" :key="i">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import mainScrollEvent from "@/mixins/mainScrollEvent"

export default {
  mixins: [mainScrollEvent("projectContainer")],
  created() {
    this.$store.dispatch("projects/fetchProjects");
  },
  computed: {
    ...mapState("projects", ["isLoading", "projectData"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.module.less";

.project-list-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.project-item {
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }

  .thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }

  .info {
    line-height: 1.7;
    flex: 1 1 auto;

    h2 {
      margin: 0;
    }
  }

  .github {
    font-size: 14px;
    color: @primary;
  }
}
</style>
