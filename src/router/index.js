import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      component: () => import(/* webpackChunkName: "Home" */ '../views/home.vue')
    },
    {
      path: '/about',
      component: () => import(/* webpackChunkName: "Home" */ '../views/about.vue')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})