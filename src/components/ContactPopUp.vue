<template lang="pug">
  v-container(grid-list-xl)
    v-layout(wrap, align-center)
      v-flex(xs12, sm12, d-block)
        h1.label.p10 Let's
        .field-label.demiBold Choose as many that apply
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold First name
        v-text-field.br5.demiBold(v-model="fields.firstName" solo background-color="#f5f5f5" placeholder="First name")
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold Last name
        v-text-field.br5.demiBold(v-model="fields.lastName" solo background-color="#f5f5f5" placeholder="Last name")
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold Email Address
        v-text-field.br5.demiBold(v-model="fields.email" solo background-color="#f5f5f5" placeholder="Email")
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold Are You a Student or
        v-select.br5.demiBold(:items='roles', background-color='#f5f5f5', v-model='fields.selRoles', item-text='title', :label='`eg. ${roles[0].title}`', solo)
    v-flex(flex-column)
        .field-label.demiBold Meesage
          .flex.flex-wrap.p10-top
            v-textarea(solo v-model="fields.message" background-color="#f5f5f5" name="input-7-4" placeholder="How can we help?" :value="fields.message")
    v-flex(flex-column)
        .flex.flex-wrap.p10-top.justify-end
            v-btn.btn.back( width="500" @click="submitData" :disabled="!canContinue") Submit
</template>

<script>
import pagesList from '@/components/registration/page_list'
import helpers from '@/helpers'

const PAGE_ID = pagesList.studentPagesList.account

export default {
  created() {
    // this.fields = this.$store.getters.getById(pagesList.studentPagesList[PAGE_ID])
  },
  data() {
    return {
      fields: {
        firstName: '',
        lastName: '',
        email: '',
        selRoles: '',
        message: ''
      },
      canContinue: false,
      roles: [{
        id: 0,
        title: 'Student'
      }, {
        id: 1,
        title: 'Employer'
      }],
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
        this.canContinue = val
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
  },
  methods: {
    submitData() {
      if (this.canContinue) {
        this.$emit('success', true)
      }
    }
  }
}
</script>