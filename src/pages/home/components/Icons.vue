<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconsList: [
        { id: '00001', imgUrl: '../../../../static/必游榜单165x165.png', desc: '必游榜单必游榜单必游榜单必游榜单必游榜必游榜单' },
        { id: '00002', imgUrl: '../../../../static/旅游景点165x165.png', desc: '旅游景点旅游景点旅游景点旅游景点旅游点旅游景点' },
        { id: '00003', imgUrl: '../../../../static/夏日玩水165x165.png', desc: '夏日玩水夏日玩水夏日玩水夏日玩水夏日玩水水夏日' },
        { id: '00004', imgUrl: '../../../../static/名胜古迹165x165.png', desc: '名胜古迹名胜古迹名胜古迹名胜古迹古迹名胜古迹' },
        { id: '00005', imgUrl: '../../../../static/苏州园林165x165.png', desc: '苏州园林苏州园林苏园林苏州园苏州园林苏州园林' },
        { id: '00006', imgUrl: '../../../../static/必游榜单165x165.png', desc: '必游榜单必游榜单必游榜单必游单必游榜单必游榜单' },
        { id: '00007', imgUrl: '../../../../static/必游榜单165x165.png', desc: '必游榜单必游榜单必游榜单必榜单必游榜单必游榜单' },
        { id: '00008', imgUrl: '../../../../static/必游榜单165x165.png', desc: '必游榜单必游榜单必游榜单游榜单必游榜单必游榜单' },
        { id: '00009', imgUrl: '../../../../static/旅游景点165x165.png', desc: '旅游景点旅游景点旅游景旅游景点旅游景点旅游景点' },
        { id: '00010', imgUrl: '../../../../static/夏日玩水165x165.png', desc: '夏日玩水夏日玩水夏日水夏日玩水夏日玩水夏日玩水' }
      ],
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-pagination-bullet-active
    background: #555
  .icons >>> .swiper-container
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height:0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top:0
      left:0
      right:0
      bottom:0.44rem
      .icon-img-content
        padding-top: 0.1rem
        display: block
        margin: 0 auto  // 调整图片左右上下边距不一样的情况
        height: 90%
    .icon-desc
      position: absolute
      left:0
      bottom:0
      right:0
      line-height:0.44rem   //0.44*50 =22px
      color: $darkTextColor
      font-size: 0.2rem
      //overflow: hidden
      //white-space: nowrap   // 不自动换行
      // text-overflow 属性规定当文本溢出包含元素时发生的事情:
      // ellipsis 显示省略符号来代表被修剪的文本
      //text-overflow: ellipsis
      ellipsis()
</style>
