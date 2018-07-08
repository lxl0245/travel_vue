<template>
    <div class="list">
      <div class="area">
        <div class="title border-topbottom">您的位置</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉善盟</div>
          <div class="item border-bottom">阿拉善盟</div>
          <div class="item border-bottom">阿拉善盟</div>
          <div class="item border-bottom">阿拉善盟</div>
          <div class="item border-bottom">阿拉善盟</div>
          <div class="item border-bottom">阿拉善盟</div>
          <div class="item border-bottom">阿拉善盟</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">B</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉善盟</div>
          <div class="item border-bottom">阿拉善盟</div>
          <div class="item border-bottom">阿拉善盟</div>
          <div class="item border-bottom">阿拉善盟</div>
          <div class="item border-bottom">阿拉善盟</div>
          <div class="item border-bottom">阿拉善盟</div>
          <div class="item border-bottom">阿拉善盟</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">C</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉善盟</div>
          <div class="item border-bottom">阿拉善盟</div>
          <div class="item border-bottom">阿拉善盟</div>
          <div class="item border-bottom">阿拉善盟</div>
          <div class="item border-bottom">阿拉善盟</div>
          <div class="item border-bottom">阿拉善盟</div>
          <div class="item border-bottom">阿拉善盟</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CityList'
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
