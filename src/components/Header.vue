<template>
  <v-toolbar flat color="transparent" class="header-cont" height="90px">
      <v-toolbar-side-icon class="h-img"><v-img :src="image"></v-img></v-toolbar-side-icon>
      <v-toolbar-title class="dark-text-blue f3em bold-weight">employo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      <v-btn class="dark-text-blue bold-weight f1-8m" v-for="(btn, index) in navigationBtns" @click="getRoute(btn)" :key="index" flat>{{btn}}</v-btn>
      <v-btn class="dark-text-blue bold-weight f1-8m" flat>{{user}}</v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import image from '@/assets/EmployoLogo.svg'
import router from '@/router'

export default {
  created() {
    this.user = this.userName
  },
  props: {
    navigationBtns: Array,
    userName: String
  },
  data() {
    return {
      image,
      user: null,
    }
  },
  methods: {
    getRoute(btn) {
      const route = btn.replace(/\s/g, '').toLowerCase();
      router.push({ path: route })
    }
  }
}
</script>

