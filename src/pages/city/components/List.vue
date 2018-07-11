<template>
    <div class="list scroll-wrapper" ref="betterScrollWrapper">
      <div class="scroll-content">
        <div class="area">
          <div class="title border-topbottom">您的位置</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">上海</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
            <div
              class="item border-bottom"
              v-for="innerItem of item"
              :key="innerItem.id"
            >
              {{innerItem.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.betterScrollWrapper)
  },
  watch: {
    letter () {
      // 因为我们的城市区域是循环 cities 得到的
      // 所以， this.$refs[this.letter] 会返回一个长度为 1 的数组
      // console.log(this.$refs[this.letter])
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element) // 这个方法的参数必须是DOM元素
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top:1.96rem
    right: 0
    bottom: 0
    left: 0
    .title
      background: $cityListTitleBackgroundColor
      heigth: $cityListTitleHeight
      line-height: $cityListTitleLineHeight
      color: $darkTextColor
      font-size: $cityListTitleFontSize
      text-align: left
      padding-left: 0.2rem
    .button-list
      overflow:hidden
      padding: 0.1rem 0.6rem 0.1rem 0.1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          line-height: 0.6rem
          border: 0.01rem solid #ccc
          border-radius: $buttonDefaultBorderRadius
          margin: 0.1rem
          text-align: center
    .item-list
      .item
        text-align: left
        line-height: $cityListItemLineHeight
        padding: 0 0.6rem 0 0.2rem
</style>
