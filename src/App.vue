<template>
  <div>
    <h1>App Root 组件</h1>
    <div class="test-container">
      <!-- <ImageLoader
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
        placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
        @load="onImageLoaded"
        :duration="3000"
      /> -->
      <Contact />
    </div>
  </div>
</template>
<script>
import Pager from "./components/Pager";
import Empty from "./components/Empty";
import ImageLoader from "./components/ImageLoader";
import Contact from "./components/Contact"

export default {
  components: {
    Pager,
    Empty,
    ImageLoader,
    Contact
  },
  methods: {
    onImageLoaded() {
      console.log("图片加载完成");
    },
  },
};
</script>
<style scoped>
.test-container {
  width: 500px;
  height: 300px;
  border: 1px solid red;
  background-color: #000;
}
</style>