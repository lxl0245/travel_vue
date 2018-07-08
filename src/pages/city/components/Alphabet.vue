<template>
    <div>
      <ul class="list">
        <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .list
    // 靠右侧
    position: absolute
    top: 1.96rem
    right: 0
    bottom: 0
    /*background: red*/
    width: 0.4rem
    // 靠右浮动
    display: flex
    flex-direction: column  // 按列
    justify-content: center //居中
    .item
      color: $bgColor
      text-algin: center
      line-height: 0.15rem
      font-size: 0.1rem
</style>
