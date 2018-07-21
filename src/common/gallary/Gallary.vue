<template>
  <div>
    <div class="container" @click="handleGallaryClose">
      <div class="wrapper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in imgs" :key="index">
            <img class="slide-img" :src="item" />
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleGallaryClose () {
      this.$emit('close')
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    z-index: 99
    display: flex
    flex-drection: column
    align-items: center
    justify-content: center
    position: fixed
    top:0
    left: 0
    right: 0
    bottom: 0
    background: #000
    .wrapper
      overflow: hidden
      with: 100%
      height: 0
      padding-bottom:100%
      .slide-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1 rem
</style>
