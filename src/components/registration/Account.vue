<template lang="pug">
  v-container(grid-list-xl='')
    v-layout(wrap='', align-center='')
      v-flex(xs12='', sm12='', d-flex='')
        h1.label Account information
      v-flex(xs12='', sm6='', d-block='')
        .field-label First name
        v-text-field.br5(v-model="fields.firstName" solo background-color="#f5f5f5" placeholder="First name")
      v-flex(xs12='', sm6='', d-block='')
        .field-label Last name
        v-text-field.br5(v-model="fields.lastName" solo background-color="#f5f5f5" placeholder="Last name")
      v-flex(xs12='', sm6='', d-block='')
        .field-label Email
        v-text-field.br5(v-model="fields.email" solo background-color="#f5f5f5" placeholder="Email")
      v-flex(xs12='', sm6='', d-block='')
        .field-label Password
        v-text-field.br5(v-model="fields.password" solo background-color="#f5f5f5" placeholder="Password")
      v-flex(xs12='', sm6='', d-block='')
        .field-label City of residence
        v-text-field.br5(v-model="fields.city" solo background-color="#f5f5f5" placeholder="City")
</template>

<script>
import pagesList from '@/components/registration/page_list'

export default {
  created() {
    // console.log(this.$store.getters.getById(pagesList[0]))
    // this.fields = this.$store.getters.getById(pagesList[0])
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