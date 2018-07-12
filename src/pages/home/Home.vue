<template>
  <div>
    <!--<home-header :city="city"></home-header>-->
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconsList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      // city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeWeekend,
    HomeRecommend,
    HomeHeader,
    HomeSwiper,
    HomeIcons
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json') // 调用指定的URL
        .then(this.getHomeInfoSucc) // 当请求成果时调用函数 getHomeInfoSucc()
    },
    getHomeInfoSucc (res) {
      res = res.data // 从axios.get()返回的JSON结果中得到
      if (res.ret && res.data) {
        const data = res.data
        // this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo() // mounted () 钩子发起Ajax请求,通过调用getHomeInfo()调用指定的URL
  }
}
</script>

<style lang="stylus" scoped>

</style>
