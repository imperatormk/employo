<template>
  <v-toolbar flat color="transparent" class="header-cont" height="90px">
      <v-toolbar-side-icon class="h-img"><v-img :src="image"></v-img></v-toolbar-side-icon>
      <v-toolbar-title class="dark-text-blue f3em bold-weight">employo</v-toolbar-title>
      <v-spacer></v-spacer>
       <v-dialog content-class="dialog-round" v-model="dialog" width="50%" >
      <v-btn flat slot="activator" class="dark-text-blue bold-weight f1-8m">
        Contact us
      </v-btn>
      <v-card>
       <contact-pop-up @success='allowContinue($event)'></contact-pop-up>
      </v-card>
    </v-dialog>
      <v-toolbar-items class="hidden-sm-and-down">
      <v-btn class="dark-text-blue bold-weight f1-8m" v-for="(btn, index) in navigationBtns" @click="getRoute(btn)" :key="index" flat>{{btn}}</v-btn>
      <v-btn class="dark-text-blue bold-weight f1-8m" flat>{{user}}</v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import image from '@/assets/EmployoLogo.svg'
import ContactPopUp from '@/components/ContactPopUp'
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
      dialog: false
    }
  },
  methods: {
    allowContinue(e) {
      this.dialog = !e
    },
    getRoute(btn) {
      const route = btn.replace(/\s/g, '').toLowerCase();
      router.push({ path: route })
    }
  },
  components: {
    ContactPopUp
  }
}
</script>

