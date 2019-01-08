<template lang="pug">
  v-container(grid-list-xl)
    v-layout(wrap, align-center)
      v-flex(xs12, sm12, d-flex flex-column)
        h1.label Account information
        .field-label.alternate.demiBold Tell us a bit about you before we get in touch
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold First name
        v-text-field.br5.demiBold(v-model="fields.firstName" solo background-color="#f5f5f5" placeholder="First name")
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold Last name
        v-text-field.br5.demiBold(v-model="fields.lastName" solo background-color="#f5f5f5" placeholder="Last name")
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold Email
        v-text-field.br5.demiBold(v-model="fields.email" solo background-color="#f5f5f5" placeholder="Email")
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold Password
        v-text-field.br5.demiBold(v-model="fields.password" solo background-color="#f5f5f5" placeholder="Password" type="password")
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold City of residence
        v-text-field.br5.demiBold(v-model="fields.city" solo background-color="#f5f5f5" placeholder="City, Province (eg.Toronto, ON)")
</template>

<script>
import pagesList from '@/components/registration/page_list'

const PAGE_ID = pagesList.studentPagesList.account

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList.studentPagesList[PAGE_ID])
  },
  data() {
    return {
      fields: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        city: ''
      }
    }
  },
  computed: {
    checkForSuccess() {
      const items = Object.values(this.fields)
      function checkEmpty(prop) {
        if (prop instanceof Array) {
          return prop.length >= 1
        } else if (prop) {
          return prop.toString().length >= 0
        }

        return false
      }
      return items.every(checkEmpty)
    }
  },
  watch: {
    checkForSuccess: {
      handler: function f(val) {
        this.$emit('success', val)
      },
      deep: true
    },
    fields: {
      handler: function f(val) {
        this.$store.dispatch('dataChange', {
          pageId: pagesList.studentPagesList[PAGE_ID],
          fields: val
        })
      },
      deep: true
    }
  }
}
</script>