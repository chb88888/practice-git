import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomePage/Home.vue'),
    redirect: '/tab1',
    children: [
      {
        path: 'tab1',
        name: 'tab1',
        component: () => import(/* webpackChunkName: "about" */ '../views/HomePage/pages/tab1.vue')
      },
      {
        path: 'tab2',
        name: 'tab2',
        component: () => import(/* webpackChunkName: "about" */ '../views/HomePage/pages/tab2.vue')
      },
      {
        path: 'tab3',
        name: 'tab3',
        component: () => import(/* webpackChunkName: "about" */ '../views/HomePage/pages/tab3.vue'),
        meta: {
          title: '我的',
          requireAuth: true
        }

      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/IndexRou/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, 'to---to');
  if (to.meta.requireAuth) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path:`/login`
      })
    }
  } else {
    next()
  }
})


export default router
