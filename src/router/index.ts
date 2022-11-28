import { createRouter, createWebHashHistory } from 'vue-router'

const lazyLoadSite = (pageName: string) => () => import(`@/views/${pageName}/index.vue`)
const lazyLoadLayout = (pageName: string) => () => import(`@/layouts/${pageName}.vue`)

const routes = [
  {
    path: '/',
    component: lazyLoadLayout('Default'),
    children: [
      {
        path: '',
        name: 'home',
        component: lazyLoadSite('Home'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
