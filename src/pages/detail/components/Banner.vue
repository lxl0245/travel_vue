<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe63f;</span>{{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="gallaryImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow: hidden
    height: 0
    padding-bottom: 55%  // 上边的三行代码为了防止页面抖动
    position: relative   // 生成相对定位的元素，相对于其正常位置进行定位
    .banner-img
      width: 100% // 为完整显示图片
    .banner-info
      // Flex是Flexible Box的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: 0.6rem
      color: #fff
      // 增加背景色：黑色渐变效果
      background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner-title
        flex: 1
        font-size: 0.32rem
      .banner-number
        padding: 0 0.4rem
        border-radius: 0.2rem
        //background: rgba(0,0,0,0.8)
        .banner-icon
          font-size: 0.24rem
</style>
