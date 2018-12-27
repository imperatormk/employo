<template>
  <v-toolbar flat color="transparent">
      <v-toolbar-side-icon><v-img :src="image"></v-img></v-toolbar-side-icon>
      <v-toolbar-title>employo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="(btn, index) in navigationBtns" @click="getRoute(btn)" :key="index" flat>{{btn}}</v-btn>
      <v-btn flat>{{userName}}</v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import image from '@/assets/EmployoLogo.svg'
import router from '@/router'

export default {
  props: {
    navigationBtns: Array,
    userName: String
  },
  data() {
    return {
      image
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

