import Vue from 'vue'
import Router from 'vue-router'
import PageOne from '@/components/PageOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageOne',
      component: PageOne
    }
  ],
  mode: 'history'
})
