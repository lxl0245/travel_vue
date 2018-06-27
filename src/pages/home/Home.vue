<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>test 解决网速慢导致样式抖动的问题 </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style lang="stylus" scoped>

</style>
