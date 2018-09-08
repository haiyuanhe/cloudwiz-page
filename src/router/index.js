import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('components/Home/Home')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('components/Products/Products')
    },
    {
      path: '/cases',
      name: 'Cases',
      component: () => import('components/Cases/Cases')
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('components/News/News')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('components/About/About')
    }
  ]
})
