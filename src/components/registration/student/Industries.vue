<template lang="pug">
  v-container(grid-list-xl)
    v-flex(xs12, sm12, d-flex).p70-bot
            h1.label Industries you would like to work with?
    v-layout(wrap align-center)
      v-flex(flex-column)
        .field-label.demiBold Choose as many that apply
        .flex
          v-text-field(v-model="criteria" placeholder="Search industries" hide-details)
        .flex-wrap.p10.p-left-0.style-1.of-scroll(style="height:130px;")
          v-btn(v-for="industry in getVisibleIndustries" :key="industry.id" :class="isIndustrySelected(industry.id)" @click="toggleIndustrySelected(industry.id)") {{ industry.title }}
</template>

<script>
import pagesList, { studentPagesData } from '@/components/registration/page_list'
import helpers from '@/helpers'

const PAGE_ID = pagesList.studentPagesList.industries

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList.studentPagesList[PAGE_ID])
  },
  data() {
    return {
      criteria: '',
      source: studentPagesData.find(item => item.pageId === PAGE_ID).fields,
      fields: {}
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
  },
  methods: {
    isIndustrySelected(industryId) {
      const isSelected = this.fields.selectedIndustries.find(id => id === industryId) != null
      return {
        p10: true,
        btn: true,
        'button-chip': true,
        'btn-selected': isSelected
      }
    },
    toggleIndustrySelected(industryId) {
      const isSelected = this.fields.selectedIndustries.find(id => id === industryId) != null
      if (!isSelected) {
        this.fields.selectedIndustries.push(industryId)
      } else {
        this.fields.selectedIndustries = this.fields.selectedIndustries.filter(id => id !== industryId)
      }
    }
  },
  computed: {
    checkForSuccess() {
      return helpers.checkEmpty(this.fields)
    },
    getVisibleIndustries() {
      if (!this.criteria.trim()) return this.source.industries
      return this.source.industries.filter(industry => industry.title.toLowerCase().includes(this.criteria.trim()))
    }
  }
}
</script>