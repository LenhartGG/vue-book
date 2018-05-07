import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 使用轮播图插件
Vue.use(VueAwesomeSwiper);
// require styles
import 'swiper/dist/css/swiper.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
