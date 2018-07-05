<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe660;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe651;</span>
      输入城市/游玩主题
    </div>
    <div class="header-right">
      {{city}}<span class="iconfont arror-icon">&#xe65c;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    line-height: 0.86 rem
    display: flex
    background-color: $bgColor
    color: #fff
    .header-left
      width: 0.64rem
      float: left
      margin-top: 0.12rem
      display: block
      .back-icon
        font-size: 0.4rem
        text-align: center
    .header-right
      width: 1.24rem
      float: right
      margin-top: 0.12rem
      .arror-icon
        font-size: 0.3rem
    .header-input
      flex: 1
      background-color: #ffffff
      color: #ccc
      border-radius: 0.1rem
      margin-top: 0.12rem
      margin-left: 0.2rem
      margin-bottom: 0.12rem
      padding-left: 0.12rem
</style>
