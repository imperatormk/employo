<template lang="pug">
v-container(grid-list-xl)
  v-radio-group.justify-center(v-model="fields.jobSearch.value" v-if="loaded")
    h1.label Almost done...
    .field-label.demiBold Where are you in your job search?
    v-layout(wrap, align-center).p50-bot
      v-flex(xs12, sm6, d-block)
        v-btn.border-round(@click="setJobSearchStatus(0)")
          v-radio(label="Starting to Look" :value="0")
        .small-label.demiBold You're in the early stages of finding an internship.
      v-flex(xs12, sm6, d-block)
        v-btn.border-round(@click="setJobSearchStatus(1)")
          v-radio(label="Actively Interviewing" :value="1")
        .small-label.demiBold You're actively seeking an internship and are ready to interview.
      v-flex(xs12, sm6, d-block)
        v-btn.border-round(@click="setJobSearchStatus(2)")
          v-radio(label="Open to Offers" :value="2")
        .small-label.demiBold You're not looking but open to hear about relevant opportunities.
      v-flex(xs12, sm6, d-block)
        v-btn.border-round(@click="setJobSearchStatus(3)")
          v-radio(label="Closed to Offers" :value="3")
        .small-label.demiBold You're not looking and don't want to hear about relevant opportunities.
    .field-label.demiBold What is your company size preference? (# of employers)
    PropertyItem(:data="fields.companySize")
    .flex-wrap.p10.p-left-0.style-1.of-scroll(style="height:130px;")
      v-btn.demiBold(v-for="size in source.sizes" :key="size.id" :class="isLocationSelected(size.id, 'companySize')" @click="toggleLocationSelected(size.id, 'companySize')") {{ size.title }}
</template>

<script>
import PropertyItem from '@/components/common/PropertyItem'
import pagesList, { studentPagesData } from '@/components/registration/page_list'

const PAGE_ID = pagesList.studentPagesList.nontechnical.jobSearchProgress

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList.studentPagesList[PAGE_ID])
    this.loaded = true
  },
  data() {
    return {
      source: studentPagesData.find(item => item.pageId === PAGE_ID).fields,
      fields: {},
      loaded: false
    }
  },
  methods: {
    toggleLocationSelected(locationId, field) {
      const isSelected = this.fields[field].value.find(id => id === locationId) != null
      if (!isSelected) {
        this.fields[field].value.push(locationId)
      } else {
        this.fields[field].value = this.fields[field].value.filter(id => id !== locationId)
      }
    },
    isLocationSelected(locationId, field) {
      const isSelected = this.fields[field].value.find(id => id === locationId) != null
      return {
        p10: true,
        btn: true,
        'button-chip': true,
        'btn-selected': isSelected
      }
    },
    setJobSearchStatus(status) {
      this.fields.jobSearch.value = status
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