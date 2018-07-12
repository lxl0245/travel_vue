<template>
    <div class="list scroll-wrapper" ref="betterScrollWrapper">
      <div class="scroll-content">
        <div class="area">
          <div class="title border-topbottom">您的位置</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">
                <!--{{this.$store.state.currentCity}}-->
                {{this.currentCity}}
              </div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper"
                 v-for="item of hotCities"
                 :key="item.id"
                 @click="handleCityChose(item.name)"
            >
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
            <div class="item border-bottom" v-for="innerItem of item"
              :key="innerItem.id" @click="handleCityChose(innerItem.name)"
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
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'currentCity'
    })
  },
  methods: {
    handleCityChose (city) {
      // console.log(city)
      // 根据Vuex的状态管理模式：
      // 所有的状态存放在 store 的 state中， 当 state 中的状态改变时，vue components 页面就发生变化。
      // vue components 要修改 state 中的状态，只能走单向数据流，通过 store 的dispatch 方法触发
      // actions 中的一个方法，actions 中的方法通过 store 中的commit 方法触发一个mutations中的方法
      // 修改state中的状态。  当state中的状态改变后，vue components 界面显示的内容就发生了变化。
      // 调用 store 的dispatch 方法触发一个store 中 actions 的一个方法
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      // 通过 vue-router 跳转到首页
      this.$router.push('/')
    },
    ...mapActions({
      changeCity: 'changeCity'
    })
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.betterScrollWrapper)
  },
  watch: {
    letter () {
      // 因为我们的城市区域是循环 cities 得到的
      // 所以， this.$refs[this.letter] 会返回一个长度为 1 的数组
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
