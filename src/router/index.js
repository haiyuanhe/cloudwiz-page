import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        scrollToTop: true
      },
      component: () => import('components/Home/Home')
    },
    {
      path: '/cloudwiz',
      name: 'Cloudwiz',
      meta: {
        scrollToTop: true
      },
      component: () => import('components/Cloudwiz/Cloudwiz')
    },
    {
      path: '/documents',
      name: 'Documents',
      meta: {
        scrollToTop: true
      },
      component: () => import('components/Documents/Documents')
    },
    {
      path: '/faq',
      name: 'FAQ',
      meta: {
        scrollToTop: true
      },
      component: () => import('components/FAQ/FAQ')
    },
    {
      path: '/cases',
      name: 'Cases',
      meta: {
        scrollToTop: true
      },
      component: () => import('components/Cases/Cases')
    },
    {
      path: '/news',
      name: 'News',
      meta: {
        scrollToTop: true
      },
      component: () => import('components/News/News')
    },
    {
      path: '/about',
      name: 'About',
      meta: {
        scrollToTop: true
      },
      component: () => import('components/About/About')
    },
    {
      path: '/contact',
      name: 'Contact',
      meta: {
        scrollToTop: true
      },
      component: () => import('components/Contact/Contact')
    },
    {
      path: '/recruitment',
      name: 'Recruitment',
      meta: {
        scrollToTop: true
      },
      component: () => import('components/Recruitment/Recruitment')
    }
  ]
})
