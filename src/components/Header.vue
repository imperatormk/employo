<template>
  <v-toolbar flat color="transparent" class="header-cont" height="90px">
      <v-toolbar-side-icon class="h-img"><v-img :src="image"></v-img></v-toolbar-side-icon>
      <v-toolbar-title class="dark-text-blue f3em bold-weight">employo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog content-class="dialog-round" v-model="dialogContact" width="50%" >
        <v-btn flat slot="activator" class="dark-text-blue bold-weight f1-8m">
          Contact us
        </v-btn>
        <v-card>
          <contact-pop-up @success="dialogContact=false"></contact-pop-up>
        </v-card>
      </v-dialog>
      <v-dialog content-class="dialog-round ovf-visible" v-model="dialogSignup" width="35%" >
        <v-btn flat slot="activator" class="dark-text-blue bold-weight f1-8m">
          Sign up
        </v-btn>
        <v-card class="dialog-round">
          <v-card-text>
            <SignUp @success="dialogSignup=false"></SignUp>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="dark-text-blue bold-weight f1-8m" v-for="(btn, index) in navigationBtns" @click="getRoute(btn)" :key="index" flat>{{btn}}</v-btn>
        <v-btn v-if="user" class="dark-text-blue bold-weight f1-8m" flat>{{user}}</v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import image from '@/assets/EmployoLogo.svg'
import ContactPopUp from '@/components/ContactPopUp'
import SignUp from '@/components/SignUp'
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
      dialogContact: false,
      dialogSignup: false
    }
  },
  methods: {
    getRoute(btn) {
      const route = btn.replace(/\s/g, '').toLowerCase();
      router.push({ path: route })
    }
  },
  components: {
    ContactPopUp,
    SignUp
  }
}
</script>

