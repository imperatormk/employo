import Vue from 'vue'
import Router from 'vue-router'

import PageOne from '@/components/PageOne'
import PageTwo from '@/components/PageTwo'
import PageThree from '@/components/PageThree'
import PageFour from '@/components/PageFour'
import PageFive from '@/components/PageFive'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/education'
    },
    {
      path: '/education',
      name: 'pageOne',
      component: PageOne,
    },
    {
      path: '/experience',
      name: 'pageTwo',
      component: PageTwo
    },
    {
      path: '/roles',
      name: 'pageThree',
      component: PageThree
    },
    {
      path: '/industries',
      name: 'pageFour',
      component: PageFour
    },
    {
      path: '/skills',
      name: 'pageFive',
      component: PageFive
    }
  ],
  mode: 'history'
})
