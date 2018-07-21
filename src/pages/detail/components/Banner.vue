<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           src="../../../../static/detail/故宫_1_600x330.jpg" />
      <div class="banner-info">
        <div class="banner-title">故宫(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe63f;</span>10
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary"
                    @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {CommonGallary},
  data () {
    return {
      showGallary: false,
      imgs: [
        '../../../../static/detail/故宫_1_600x330.jpg',
        '../../../../static/detail/故宫_350x240.jpg'
      ]
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
