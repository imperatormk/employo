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
    },
    {
      path: '/page3',
      name: 'pageThree',
      component: PageThree
    },
    {
      path: '/page4',
      name: 'pageFour',
      component: PageFour
    },
    {
      path: '/page5',
      name: 'pageFive',
      component: PageFive
    }
  ],
  mode: 'history'
})
