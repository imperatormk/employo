import Vue from 'vue'
import Router from 'vue-router'

import PageOne from '@/components/PageOne'
import PageTwo from '@/components/PageTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/page1'
    },
    {
      path: '/page1',
      name: 'pageOne',
      component: PageOne,
    },
    {
      path: '/page2',
      name: 'pageTwo',
      component: PageTwo
    }
  ],
  mode: 'history'
})
