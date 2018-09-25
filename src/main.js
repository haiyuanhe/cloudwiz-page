import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/style/reset.css'
import 'common/style/mixin.scss'
import './use-antd-components'
import {
  Carousel,
  CarouselItem
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
