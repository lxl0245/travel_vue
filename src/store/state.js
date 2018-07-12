let defaultCity = '苏州'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity,
  currentCity: '重庆'
}
