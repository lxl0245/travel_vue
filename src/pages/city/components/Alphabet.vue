<template>
    <div>
      <ul class="list">
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
        <li class="item">D</li>
        <li class="item">E</li>
        <li class="item">F</li>
        <li class="item">G</li>
        <li class="item">H</li>
        <!--<li class="item">I</li>-->
        <!--<li class="item">J</li>-->
        <!--<li class="item">K</li>-->
        <!--<li class="item">L</li>-->
        <!--<li class="item">M</li>-->
        <!--<li class="item">N</li>-->
        <!--<li class="item">O</li>-->
        <!--<li class="item">P</li>-->
        <!--<li class="item">Q</li>-->
        <!--<li class="item">R</li>-->
        <!--<li class="item">S</li>-->
      </ul>
    </div>
</template>

<script>
export default {
  name: 'CityAlphabet'
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
      line-height: 0.5rem
</style>
