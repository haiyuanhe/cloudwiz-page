import Vue from 'vue'
import Router from 'vue-router'
import * as Cookies from '../common/utils/utils'
import { message } from 'ant-design-vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('components/Home/Home')
    },
    {
      path: '/cloudwiz',
      name: 'Cloudwiz',
      component: () => import('components/Cloudwiz/Cloudwiz')
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: () => import('components/FAQ/FAQ')
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
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('components/Contact/Contact')
    },
    {
      path: '/recruitment',
      name: 'Recruitment',
      component: () => import('components/Recruitment/Recruitment')
    },
    {
      path: '/add-news',
      name: 'AddNews',
      component: () => import('components/AddNews/AddNews'),
      meta: {
        requireAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (!Cookies.hasCookie('grafana_sess')) {
      message.info('Cookie is expired, Please Login')
    } else {
      message.info('Cookie is existed')
      next()
    }
  } else {
    next()
  }
})

export default router
