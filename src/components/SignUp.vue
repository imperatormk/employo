<template lang="pug">
  .flex-col
    .flex-row.justify-center
      v-img.overlay.br50(:src="logo" width="150px")
    .flex-row.justify-center.align-center
      .w95.p50-top
        PropertyItem(:data="{value:fields.email,required:true}")
          v-text-field.nop(placeholder="Email" type="email" v-model="fields.email")
        PropertyItem(:data="{value:fields.password,required:true}")
          v-text-field.nop(placeholder="Password" v-model="fields.password")
        PropertyItem(:data="{value:fields.confirmPassword,required:true}")
          v-text-field.nop(placeholder="Confirm Password" v-model="fields.confirmPassword" hide-details)
        br
        p(v-if="passwordMismatch" style="color:#ff0000") Passwords do not match
        v-btn(round color="primary" block @click="submit") Sign up
</template>

<script>
import PropertyItem from '@/components/common/PropertyItem'
import MessageBus from '@/services/messageBus'
import logo from '@/assets/EmployoLogo.svg'

export default {
  data() {
    return {
      fields: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      passwordMismatch: false,
      logo
    }
  },
  methods: {
    submit() {
      this.passwordMismatch = false
      MessageBus.$emit('isHotChanged', true)
      let errors = 0
      MessageBus.$emit('getErrorState', (hasError) => {
        if (hasError) {
          errors += 1
        }
      })
      if (!errors) {
        if (this.passwordsMatch) {
          this.$emit('success')
        } else {
          this.passwordMismatch = true
        }
      }
    }
  },
  computed: {
    passwordsMatch() {
      return this.fields.password === this.fields.confirmPassword
    }
  },
  components: {
    PropertyItem
  }
}
</script>

<style lang="scss">
  .overlay {
    position: absolute;
    top: -60px;
    background-color: white;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
</style>
