<template>
  <div>
    <div class="search">
      <input class="search-input"
             type="text" placeholder="输入城市名或拼音"
             v-model="keyword"/>
    </div>
    <div class="search-content" ref="searchContent" v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
            v-for="item of list"
            :key="item.id"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="nomoreitem">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      timer: null,
      list: [],
      nomore: false
    }
  },
  props: {
    cities: Object
  },
  computed: {
    nomoreitem () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        // 当没有关键字时，不显示搜索结果列表
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        // 循环 cities 中的内容，把包含关键字的项目放到 result 中
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.searchContent)
  }
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
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.8rem
    left: 0
    right: 0
    bottom: 0
    background: $citySearchListBackground
    .search-item
      height: 0.6rem
</style>
