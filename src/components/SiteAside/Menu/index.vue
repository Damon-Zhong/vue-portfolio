<template>
  <div class="menu-container">
    <RouterLink
      v-for="item in menuItems"
      :key="item.link"
      :to="item.link"
      :exact="item.exact"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
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
        { link: "/", title: "首页", icon: "home" , exact: true},
        { link: "/articles", title: "文章", icon: "blog", exact: false },
        { link: "/about", title: "关于我", icon: "about", exact: true },
        { link: "/projects", title: "项目", icon: "code", exact: true },
        { link: "/message", title: "留言板", icon: "chat", exact: true },
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