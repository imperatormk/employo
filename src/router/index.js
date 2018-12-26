import Vue from 'vue'
import Router from 'vue-router'

import Registration from '@/pages/Registration'
import JobBoard from '@/pages/students/JobBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/register'
    },
    {
      path: '/register',
      name: 'register',
      component: Registration,
    },
    {
      path: '/student',
      component: JobBoard
    }
  ],
  mode: 'history'
})
