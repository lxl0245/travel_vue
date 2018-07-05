<template>
  <div class="hot-list">
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-rightbottom"
          v-for="item of weekendList"
          :key="item.id"
      >
        <div class="item-img-wrapper">
          <img  class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-info-title">{{item.title}}</p>
          <p class="item-info-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  },
  data () {
    return {
      // weekendList: [
      //   {
      //     id: '0001',
      //     imgUrl: '../../../../static/home/homeweekend/东方明珠.jpg_r_577x214_1f3783d0.jpg',
      //     title: '上海必游TOP10',
      //     desc: '中西合璧，现代和传统各有各个的精彩'},
      //   {
      //     id: '0002',
      //     imgUrl: '../../../../static/home/homeweekend/亲子时光.jpg_r_577x214_b0fd5c7b.jpg',
      //     title: '亲子时光TOP10',
      //     desc: '走进自然或玩转乐园，感知大千世界'},
      //   {
      //     id: '0003',
      //     imgUrl: '../../../../static/home/homeweekend/戏水凉夏.jpg_r_577x214_8f1ad9a1.jpg',
      //     title: '戏水清凉一夏',
      //     desc: '夏日戏水，玩乐无穷'}
      // ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .hot-list
    .title
      line-height: $homeHotListTitleLineHeight
      background: $homeHotListTitleBackgroundColor
      text-indent: 0.2rem
      text-align: left
      text-color: $darkTextColor
    .item-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 37.1%  // 由图片的宽高比计算的出来
      .item-img
        width: 100%
    .item-info
      flex: 1
      padding: 0.2rem  //为了对齐图片。 因为图片的 上下左右边距都是0.2rem（0.2*50=5像素）
      text-align: left
      min-width: 0     // 为了显示...的效果
      .item-info-title
        line-height: 0.56rem
        font-size: 0.4rem
        ellipsis()       // 显示...的效果
      .item-info-desc
        color: #aaa
        font-size: 0.32rem
        line-height: 0.56rem  // =(1.9-0.1-0.1) / 3 = 0.56rem
        ellipsis()       // 显示...的效果
</style>
