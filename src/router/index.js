import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

export const routes = [
  {
    keynote: true,
    path: '/landing',
    name: 'Hello',
    component: require('@/pages/Hello')
  },
  {
    keynote: true,
    path: '/why',
    name: 'Why',
    component: require('@/pages/Why')
  },
  {
    keynote: true,
    path: '/installation',
    name: 'Installation',
    component: require('@/pages/Installation')
  },
  {
    keynote: true,
    path: '/commands',
    name: 'Commands',
    component: require('@/pages/Commands')
  },
  {
    keynote: true,
    path: '/vue-list',
    name: 'Vue-list',
    component: require('@/pages/Vue-list')
  },
  {
    keynote: true,
    path: '/vue-init',
    name: 'Vue-init',
    component: require('@/pages/Vue-init')
  },
  {
    keynote: true,
    path: '/vue-build',
    name: 'Vue-build',
    component: require('@/pages/Vue-build')
  },
  {
    keynote: true,
    path: '/create-your-own-template',
    name: 'Create',
    component: require('@/pages/Create')
  },
  {
    keynote: true,
    path: '/cy@',
    name: 'Bye',
    component: require('@/pages/Bye')
  },

  { path: '*', redirect: { name: 'Hello' } }
]
const pages = routes.filter(page => page.keynote).map(page => page.name )
store.dispatch('onFetch', {pages})

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('setPage', {name: to.name, pages})
  return next()
})

window.addEventListener('keydown', e => {
  const { which } = e
  if(which < 37 || which > 40) return

  e.preventDefault()
  if(which == 37 || which == 38) {
    return store.dispatch('onLast')
  }
  store.dispatch('onNext', {pages})
})

export default router
