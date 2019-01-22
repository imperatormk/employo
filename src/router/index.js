import Vue from 'vue'
import Router from 'vue-router'

import StudentLanding from '@/components/landing/StudentLanding' // change this
import Registration from '@/pages/Registration'
import JobBoard from '@/pages/students/JobBoard'
import SavedJobs from '@/pages/students/SavedJobs'
import StudentProfile from '@/pages/students/Profile'
import Postings from '@/pages/employer/Postings'
import EmployerProfile from '@/pages/employer/Profile'
import EmployerLanding from '@/components/landing/EmployerLanding'
import Applicants from '@/pages/employer/Applicants'

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
    },
    {
      path: '/student/profile',
      component: StudentProfile
    },
    {
      path: '/employer/profile',
      component: EmployerProfile
    },
    {
      path: '/employer',
      component: EmployerLanding
    },
    {
      path: '/employer/applicants',
      component: Applicants
    }
  ],
  mode: 'history'
})
