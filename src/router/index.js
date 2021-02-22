import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.free)) {
    next()
  }
  else if (store.state.tasks.loggedUser && store.state.tasks.loggedUser.role == 'ADMIN_ROLE') {

    if (to.matched.some(record => record.meta.ADMIN_ROLE)) {
      next()
    }
  } else if (store.state.tasks.loggedUser && store.state.tasks.loggedUser.role == 'STANDARD_ROLE') {
    if (to.matched.some(record => record.meta.USER_ROLE)) {
      next()
    }
  } else {
    next({ name: 'login' })
  }
})

export default router

