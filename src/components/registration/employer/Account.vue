<template lang="pug">
  v-container(grid-list-xl)
    v-layout(wrap, align-center)
      v-flex(xs12, sm12, d-flex flex-column)
        h1.label Account information
        .field-label.alternate.demiBold.p-left-0 Tell us a bit about you before we get in touch
      v-flex(xs12, sm6, d-block)
        PropertyItem(:data="fields.firstName")
          .field-label.alternate.demiBold(slot="title") First name
          v-text-field.br5.demiBold(v-model="fields.firstName.value" solo background-color="#f5f5f5" placeholder="First name")
      v-flex(xs12, sm6, d-block)
        PropertyItem(:data="fields.lastName")
          .field-label.alternate.demiBold(slot="title") Last name
          v-text-field.br5.demiBold(v-model="fields.lastName.value" solo background-color="#f5f5f5" placeholder="Last name")
      v-flex(xs12, sm6, d-block)
        PropertyItem(:data="fields.companyName")
          .field-label.alternate.demiBold(slot="title") Company name
          v-text-field.br5.demiBold(v-model="fields.companyName.value" solo background-color="#f5f5f5" placeholder="Company name")
      v-flex(xs12, sm6, d-block)
        PropertyItem(:data="fields.companyWebsite")
          .field-label.alternate.demiBold(slot="title") Company website
          v-text-field.br5.demiBold(v-model="fields.companyWebsite.value" solo background-color="#f5f5f5" placeholder="Company website")
      v-flex(xs12, sm6, d-block)
        PropertyItem(:data="fields.email")
          .field-label.alternate.demiBold(slot="title") Email
          v-text-field.br5.demiBold(v-model="fields.email.value" solo background-color="#f5f5f5" placeholder="Email")
      v-flex(xs12, sm6, d-block)
        PropertyItem(:data="fields.city")
          .field-label.alternate.demiBold(slot="title") Office location
          v-text-field.br5.demiBold(v-model="fields.city.value" solo background-color="#f5f5f5" placeholder="City, Province (eg.Toronto, ON)")
      v-flex(xs12, sm6, d-block)
        PropertyItem(:data="fields.phoneNumber")
          .field-label.alternate.demiBold(slot="title") Phone number
          v-text-field.br5.demiBold(v-model="fields.phoneNumber.value" solo background-color="#f5f5f5" placeholder="Phone number")
</template>

<script>
import PropertyItem from '@/components/common/PropertyItem'
import pagesList from '@/components/registration/page_list'

const PAGE_ID = pagesList.employerPagesList.account

export default {
  created() {
    this.fields = this.$store.getters.getById(PAGE_ID)
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
          pageId: PAGE_ID,
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