// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@/style/main.scss'
import '@/style/scrollbar.scss'

import Vuebar from 'vuebar'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'md'
})

Vue.use(Vuebar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
