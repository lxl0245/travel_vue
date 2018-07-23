<template>
  <div>
    <div class="item"
         v-for="(item, index) in ticketList"
         :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children  border-bottom">
        <detail-list :ticketList="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    ticketList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    text-align: left
    padding: 0 0.2rem
    .item-title-icon
      position: relative
      top: 0.1rem
      display: inline-block
      width: .4rem
      height: .4rem
      background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      background-size: .4rem 3rem
  .item-children
    padding: 0 0.4rem
</style>
