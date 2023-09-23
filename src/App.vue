<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Avatar url="https://shop7.webmodule.prestashop.net/pokedoge/11831-large_default/snorlax.jpg" :size="100" />
  </div>
</template>

<script>
import Avatar from './components/Avatar.vue'

export default {
  name: 'App',
  components: {
    Avatar
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
