<template>
  <div>
    <router-link to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back-icon">&#xe660;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      当前选择的景点名称
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe660;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true, // 初始化时只显示退回按钮,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // 显示离顶端的距离
      console.log(document.documentElement.scrollTop)
      const top = document.documentElement.scrollTop
      if (top < 60) {
        this.showAbs = true
      } else {
        let opacity = top / 240 // 240 是图片的高度
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle =  {opacity: opacity}
        this.showAbs = false
      }
    }
  },
  activated () {
    // 监听 scroll事件，并执行 handleScroll 方法
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header-abs
    position: absolute
    left: 0.2rem
    top: 0.2rem
    width: 0.8rem
    height: 0.8rem
    // 行高、块高相等，text-align: center才会居中
    line-height: 0.8rem
    border-radius: 0.4rem
    background: rgba(0,0,0, 0.6)
    text-align: center
    .header-abs-back-icon
      color: #fff
      font-size: $backIconFontSize
  .header-fixed
    position: fixed
    top: 0
    left: 0
    right: 0
    line-height: $headerLineHeight
    height: $headerHeight
    background-color: $bgColor
    color: $headerDefaultColor
    padding-bottom: 0.12rem
    padding-top: 0.12rem
    font-size: 0.32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: $backIconFontSize
      overflow: hidden
      text-align: center
      color: $headerDefaultIconColor
      margin-top: 0.12rem
</style>
