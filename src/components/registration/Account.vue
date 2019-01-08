<template lang="pug">
  v-container(grid-list-xl)
    v-layout(wrap, align-center)
      v-flex(xs12, sm12, d-flex)
        h1.label Account information
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold First name
        v-text-field.br5.demiBold(v-model="fields.firstName" solo background-color="#f5f5f5" placeholder="First name")
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold Last name
        v-text-field.br5.demiBold(v-model="fields.lastName" solo background-color="#f5f5f5" placeholder="Last name")
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold Email
        v-text-field.br5.demiBold(v-model="fields.email" solo background-color="#f5f5f5" placeholder="Email")
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold Password
        v-text-field.br5.demiBold(v-model="fields.password" solo background-color="#f5f5f5" placeholder="Password")
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold City of residence
        v-text-field.br5.demiBold(v-model="fields.city" solo background-color="#f5f5f5" placeholder="City, Province (eg.Toronto, ON)")
</template>

<script>
import pagesList from '@/components/registration/page_list'

const PAGE_ID = pagesList.account

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList[PAGE_ID])
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
          pageId: pagesList[PAGE_ID],
          fields: val
        })
      },
      deep: true
    }
  }
}
</script>