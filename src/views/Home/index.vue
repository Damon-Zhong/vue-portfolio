<template>
  <div class="container" v-if="banners.length > 0">
    <ul>
      <li v-for="banner in banners" :key="banner.id">
        <img :src="banner.midImg"  />
        <h2>{{ banner.title }}</h2>
        <h3>{{ banner.description  }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from '@/api/banner'

export default {
 data() {

  return {
    banners: []
  }
 },

 async created() {
  this.banners = await getBanners()
 }
}
</script>

<style lang>

</style>