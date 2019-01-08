import Vue from 'vue'
import Router from 'vue-router'

import StudentLanding from '@/components/landing/StudentLanding' // change this
import Registration from '@/pages/Registration'
import JobBoard from '@/pages/students/JobBoard'
import SavedJobs from '@/pages/students/SavedJobs'
import StudentProfile from '@/pages/students/Profile'
import Postings from '@/pages/employeer/Postings'
import EmployeeProfile from '@/pages/employeer/Profile'
import EmployeeLanding from '@/components/landing/EmployeeLanding'
import Applicants from '@/pages/employeer/Applicants'

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
      path: '/employeer/profile',
      component: EmployeeProfile
    },
    {
      path: '/employeer',
      component: EmployeeLanding
    },
    {
      path: '/employeer/applicants',
      component: Applicants
    }
  ],
  mode: 'history'
})
