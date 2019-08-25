import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFound from '@/components/error-pages/NotFound'
import ReposList from '@/components/repos/ReposList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/repos',
      name: 'ReposList',
      component: ReposList
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
