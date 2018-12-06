import Vue from 'vue'
import Router from 'vue-router'

import Education from '@/pages/Education'
import Experience from '@/pages/Experience'
import Roles from '@/pages/Roles'
import Industries from '@/pages/Industries'
import Skills from '@/pages/Skills'

import pagesList from '@/pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/education'
    },
    {
      path: '/education',
      name: pagesList[0],
      component: Education,
    },
    {
      path: '/experience',
      name: pagesList[1],
      component: Experience
    },
    {
      path: '/roles',
      name: pagesList[2],
      component: Roles
    },
    {
      path: '/industries',
      name: pagesList[3],
      component: Industries
    },
    {
      path: '/skills',
      name: pagesList[4],
      component: Skills
    }
  ],
  mode: 'history'
})
