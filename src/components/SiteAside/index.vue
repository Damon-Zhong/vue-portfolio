<template>
  <div class="site-aside-container">
    <Avatar
      url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/830.png"
    />
    <h1 class="site-title">{{ settingData?.siteTitle ?? "纳克萨玛斯"}}</h1>
    <Menu />
    <Contact />
    <p class="copyright">
        CopyrightCopyrightCopyright
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";

export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: {
    ...mapState("setting", ["settingData"])
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.module.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background-color: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  &::-webkit-scrollbar{
    display: none; /* Chrome, Opera, Safari */
  }

  .site-title {
    font-size: 1.2em;
    text-align: center;
    color: #fff;
  }

  .avatar-img {
    margin: 0 auto;
  }

  .copyright{
    font-size: 0.5em;
    text-align: center;
  }
}
</style>