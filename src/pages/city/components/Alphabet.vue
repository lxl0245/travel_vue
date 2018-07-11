<template>
    <div>
      <ul class="list">
        <!--<li class="item" v-for="(item,key) of cities" :key="key"-->
          <!--@click="handleLetterChange"-->
          <!--@touchstart="handleTouchStart"-->
          <!--@touchmove="handleTouchMove"-->
          <!--@touchend="handleTouchEnd"-->
        <!--&gt;-->
        <li class="item" v-for="key of letters" :key="key" :ref="key"
            @click="handleLetterChange"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
          {{key}}
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    // 减少 startY 的计算次数，因为它的值固定不变
    this.startY = this.$refs['A'][0].offsetTop
  },
  props: {
    cities: Object
  },
  methods: {
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 触摸逻辑
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // const startY = this.$refs['A'][0].offsetTop
          // console.log(startY)
          const touchY = e.touches[0].clientY
          // console.log(touchY)
          const index = Math.floor((touchY - 100 - this.startY) / 15)
          // console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16) // 16ms 后 计时器失效
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    },
    handleLetterChange (e) {
      // console.log(e.target.innerText)
      // 通过 $emit()触发父组件监听的 change 事件
      this.$emit('change', e.target.innerText)
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
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
      line-height: 0.4rem
      font-size: 0.3rem
</style>
