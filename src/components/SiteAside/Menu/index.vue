<template>
  <div class="menu-container">
    <a
      v-for="item in menuItems"
      :key="item.link"
      :href="item.link"
      :class="{ selected: isSelected(item.link, item.blurMatch) }"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </a>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      menuItems: [
        { link: "/", title: "首页", icon: "home" },
        { link: "/blog", title: "文章", icon: "blog", blurMatch: true },
        { link: "/about", title: "关于我", icon: "about" },
        { link: "/projects", title: "项目", icon: "code" },
        { link: "/message", title: "留言板", icon: "chat" },
      ],
    };
  },
  methods: {
    isSelected(path, blurMatch) {
      const navLink = path.toLowerCase();
      const currentLocation = location.pathname.toLowerCase();

      if (blurMatch) {
        return currentLocation.startsWith(navLink);
      }
      return currentLocation === navLink;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.module.less";

.menu-container {
  color: @grey;
  margin: 24px 0;

  a {
    display: flex;
    align-items: center;
    padding: 0 50px;
    height: 45px;

    .icon {
      width: 23px;
    }

    &:hover {
      color: #fff;
    }

    &.selected {
      background-color: darken(@words, 3%);
    }
  }
}
</style>