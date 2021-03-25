import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.directive('focus', {
  // 바인딩 된 엘리먼트가 DOM에 삽입되었을 때...
  inserted: function (el) {
    console.log(el);
    // 엘리먼트에 포커스를 줍니다
    el.focus()
  }
})

console.log(Vue.directive);