<template lang="pug">
  v-container(grid-list-xl)
    v-layout(wrap, align-center)
      v-flex(xs12, sm12, d-flex flex-column)
        h1.label Account information
        .field-label.alternate.demiBold.p-left-0 Tell us a bit about you before we get in touch
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold First name
        v-text-field.br5.demiBold(v-model="fields.firstName" solo background-color="#f5f5f5" placeholder="First name")
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold Last name
        v-text-field.br5.demiBold(v-model="fields.lastName" solo background-color="#f5f5f5" placeholder="Last name")
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold Company name
        v-text-field.br5.demiBold(v-model="fields.companyName" solo background-color="#f5f5f5" placeholder="Company name")
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold Company website
        v-text-field.br5.demiBold(v-model="fields.companyWebsite" solo background-color="#f5f5f5" placeholder="Company website")
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold Email
        v-text-field.br5.demiBold(v-model="fields.email" solo background-color="#f5f5f5" placeholder="Email")
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold Office location
        v-text-field.br5.demiBold(v-model="fields.city" solo background-color="#f5f5f5" placeholder="City, Province (eg.Toronto, ON)")
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold Phone number
        v-text-field.br5.demiBold(v-model="fields.phoneNumber" solo background-color="#f5f5f5" placeholder="Phone number")
</template>

<script>
import pagesList from '@/components/registration/page_list'
import helpers from '@/helpers'

const PAGE_ID = pagesList.studentPagesList.account

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList.studentPagesList[PAGE_ID])
  },
  data() {
    return {
      fields: {}
    }
  },
  computed: {
    checkForSuccess() {
      return helpers.checkEmpty(this.fields)
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