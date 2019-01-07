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

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList[0])
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
  watch: {
    fields: {
      handler: function f(val) {
        this.$store.dispatch('dataChange', {
          pageId: pagesList[0],
          fields: val
        })
      },
      deep: true
    }
  }
}
</script>