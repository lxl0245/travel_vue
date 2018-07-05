<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
      // ,
      // imageList: [
      //   {id: '0001', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/5f/171e04d556e40a02.jpg_750x200_424c4ddd.jpg'},
      //   {id: '0002', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/32/40b97c969cbad702.jpg_750x200_61fee14d.jpg'},
      //   {id: '0003', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg'}
      // ]
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #ffffff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26%
    background: #ccc
    .swiper-img
      width: 100%
</style>
