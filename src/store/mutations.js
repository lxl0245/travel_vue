export default {
  changeCity (state, city) {
    // state 就是 store 里的 state
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
