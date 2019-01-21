<template lang="pug">
  v-container(grid-list-xl)
    v-layout(wrap, align-center)
      v-flex(xs12, sm12, d-flex flex-column)
        h1.label Account information
        .field-label.alternate.demiBold.p-left-0 Tell us a bit about you before we get in touch
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold First name
        PropertyItem(:data="fields.firstName")
          v-text-field.br5.demiBold(v-model="fields.firstName.value" solo background-color="#f5f5f5" placeholder="First name")
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold Last name
        PropertyItem(:data="fields.lastName")
          v-text-field.br5.demiBold(v-model="fields.lastName.value" solo background-color="#f5f5f5" placeholder="Last name")
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold Company name
        PropertyItem(:data="fields.companyName")
          v-text-field.br5.demiBold(v-model="fields.companyName.value" solo background-color="#f5f5f5" placeholder="Company name")
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold Company website
        PropertyItem(:data="fields.companyWebsite")
          v-text-field.br5.demiBold(v-model="fields.companyWebsite.value" solo background-color="#f5f5f5" placeholder="Company website")
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold Email
        PropertyItem(:data="fields.email")
          v-text-field.br5.demiBold(v-model="fields.email.value" solo background-color="#f5f5f5" placeholder="Email")
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold Office location
        PropertyItem(:data="fields.city")
          v-text-field.br5.demiBold(v-model="fields.city.value" solo background-color="#f5f5f5" placeholder="City, Province (eg.Toronto, ON)")
      v-flex(xs12, sm6, d-block)
        .field-label.alternate.demiBold Phone number
        PropertyItem(:data="fields.phoneNumber")
          v-text-field.br5.demiBold(v-model="fields.phoneNumber.value" solo background-color="#f5f5f5" placeholder="Phone number")
</template>

<script>
import PropertyItem from '@/components/common/PropertyItem'
import pagesList from '@/components/registration/page_list'

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
  watch: {
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
  components: {
    PropertyItem
  }
}
</script>