import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/style/reset.css'
import 'common/style/mixin.scss'
import './use-antd-components'
import {
  Button,
  Carousel,
  CarouselItem,
  Table,
  TableColumn
} from 'element-ui'

Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
