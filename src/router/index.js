import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/cloudwiz',
      name: 'Cloudwiz',
      component: () => import('components/Cloudwiz/Cloudwiz')
    },
    {
      path: '/documents',
      name: 'Documents',
      component: () => import('components/Documents/Documents')
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
    }
  ]
})
