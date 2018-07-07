<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .search
    height:$headerHeight
    background: $bgColor
    padding: 0 0.1rem
    .search-input
      width: 100%
      heigth: 0.6rem
      line-height: 0.6rem
      text-align: center
      border-radius: $inputDefaultBorderRadius
      // input 的边框直接卡到文字上，不美观，可以做如下优化
      box-sizing: border-box
      padding: 0 0.1rem
</style>
