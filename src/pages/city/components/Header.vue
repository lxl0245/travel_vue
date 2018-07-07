<template>
  <div class="header">
    选择城市
    <router-link to="/">
      <div class="iconfont header-back">&#xe660;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    position: relative
    line-height: $headerLineHeight
    height: $headerHeight
    background-color: $bgColor
    color: $headerDefaultColor
    padding-bottom: 0.12rem
    padding-top: 0.12rem
    .header-back
      position: absolute
      top: 0
      left: 0
      width: $backIconFontSize
      overflow: hidden
      text-align: center
      color: $headerDefaultIconColor
      margin-top: 0.12rem
</style>
