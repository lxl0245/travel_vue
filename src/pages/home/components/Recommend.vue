<template>
  <div class="hot-list">
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-rightbottom"
          v-for="item of recommendList"
          :key="item.id"
      >
        <div class="item-img-wrapper">
          <img  class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-info-title">{{item.title}}</p>
          <p class="item-info-desc">{{item.desc}}</p>
          <p class="item-info-price">{{item.price}} 起</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data () {
    return {
      // recommendList: [
      //   {
      //     id: '0001',
      //     imgUrl: '../../../../static/home/hotlist/苏州海洋馆_200x200.png',
      //     title: '苏州海洋馆',
      //     price: 90,
      //     desc: '苏州海洋馆位于苏州市太湖国家旅游度假区环太湖大道28号。太湖水世界的一期项目，包括水族馆、潜水馆和海洋剧场三个主题部分。'},
      //   {
      //     id: '0002',
      //     imgUrl: '../../../../static/home/hotlist/苏州海洋馆_200x200.png',
      //     title: '苏州海洋馆',
      //     price: 90,
      //     desc: '苏州海洋馆位于苏州市太湖国家旅游度假区环太湖大道28号。太湖水世界的一期项目，包括水族馆、潜水馆和海洋剧场三个主题部分。'},
      //   {
      //     id: '0003',
      //     imgUrl: '../../../../static/home/hotlist/苏州海洋馆_200x200.png',
      //     title: '苏州海洋馆',
      //     price: 90,
      //     desc: '苏州海洋馆位于苏州市太湖国家旅游度假区环太湖大道28号。太湖水世界的一期项目，包括水族馆、潜水馆和海洋剧场三个主题部分。'},
      //   {
      //     id: '0004',
      //     imgUrl: '../../../../static/home/hotlist/苏州海洋馆_200x200.png',
      //     title: '苏州海洋馆',
      //     price: 90,
      //     desc: '苏州海洋馆位于苏州市太湖国家旅游度假区环太湖大道28号。太湖水世界的一期项目，包括水族馆、潜水馆和海洋剧场三个主题部分。'},
      //   {
      //     id: '0005',
      //     imgUrl: '../../../../static/home/hotlist/苏州海洋馆_200x200.png',
      //     title: '苏州海洋馆',
      //     price: 90,
      //     desc: '苏州海洋馆位于苏州市太湖国家旅游度假区环太湖大道28号。太湖水世界的一期项目，包括水族馆、潜水馆和海洋剧场三个主题部分。'}
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
    .item
      overflow: hidden
      display: flex
      height: 1.9rem //测量的到
      //background: red  // 便于调试
      .item-img
        width: 1.7rem    //定宽定高; 因为整体的高度是 1.9rem. 1.9-1.7=0.2，这样上下左右的边距(padding)可以是0.1rem
        height: 1.7rem
        padding: 0.1rem   // 上下左右都是0.1rem（0.1*50=5像素）
      .item-info
        flex: 1
        padding: 0.1rem  //为了对齐图片。 因为图片的 上下左右边距都是0.1rem（0.1*50=5像素）
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
        .item-info-price
          line-height: 0.56rem
          font-size: 0.4rem
          color: orange
</style>
