import Vue from 'vue'
import Router from 'vue-router'

import StudentLanding from '@/components/landing/StudentLanding' // change this
import Registration from '@/pages/Registration'
import JobBoard from '@/pages/students/JobBoard'
import SavedJobs from '@/pages/students/SavedJobs'
import Postings from '@/pages/employe/Postings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: StudentLanding
    },
    {
      path: '/register',
      name: 'register',
      component: Registration,
    },
    {
      path: '/student',
      component: JobBoard
    },
    {
      path: '/savedjobs',
      component: SavedJobs
    },
    {
      path: '/mypostings',
      component: Postings
    }
  ],
  mode: 'history'
})
