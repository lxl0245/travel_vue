export default {
  changeCity (ctx, city) {
    // ctx 是vuex store 的上下文
    // console.log(city)
    ctx.commit('changeCity', city)
  }
}
