import Home from '../views/Home.vue'
import * as auth from '../api/User'


const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: {
      ADMIN_ROLE: true,
      USER_ROLE: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login'),
    meta: {
      free: true
    }

  },



]
export default routes

