import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/index.vue')
  },

  {
    path: '/xad',
    name: 'Xad',
    // route level code-splitting
    // this generates a separate chunk (xad.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "xad" */ '../views/Xad/index.vue')
  },
  {
    path: '/ss',
    name: 'Ss',
    component: () => import(/* webpackChunkName: "ss" */ '../views/Ss/index.vue')
  },
  {
    path: '/neverx',
    name: 'Neverx',
    component: () => import(/* webpackChunkName: "neverx" */ '../views/Neverx/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
