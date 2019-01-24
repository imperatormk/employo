<template lang="pug">
  v-container(grid-list-xl)
    v-flex(xs12, sm12, d-flex).p70-bot
            h1.label Industries you would like to work with?
    v-layout(wrap align-center)
      v-flex(flex-column)
        PropertyItem(:data="fields.selectedIndustries")
          .field-label.alternate.demiBold(slot="title") Choose as many that apply
          .flex(slot="misc")
            v-text-field(v-model="criteria" placeholder="Search industries" hide-details)
          .flex-wrap.p10.p-left-0.style-1.of-scroll(style="height:130px;")
            v-btn(v-for="industry in getVisibleIndustries" :key="industry.id" :class="isIndustrySelected(industry.id)" @click="toggleIndustrySelected(industry.id)") {{ industry.title }}
</template>

<script>
import PropertyItem from '@/components/common/PropertyItem'
import pagesList, { studentPagesData } from '@/components/registration/page_list'

const PAGE_ID = pagesList.studentPagesList.nontechnical.industries

export default {
  created() {
    this.fields = this.$store.getters.getById(PAGE_ID, 'nontechnical').fields
  },
  data() {
    return {
      criteria: '',
      source: studentPagesData.find(obj => Object.keys(obj).includes('nontechnical')).nontechnical.find(item => item.pageId === PAGE_ID).fields,
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
  methods: {
    isIndustrySelected(industryId) {
      const isSelected = this.fields.selectedIndustries.value.find(id => id === industryId) != null
      return {
        p10: true,
        btn: true,
        'button-chip': true,
        'btn-selected': isSelected
      }
    },
    toggleIndustrySelected(industryId) {
      const isSelected = this.fields.selectedIndustries.value.find(id => id === industryId) != null
      if (!isSelected) {
        this.fields.selectedIndustries.value.push(industryId)
      } else {
        this.fields.selectedIndustries.value = this.fields.selectedIndustries.value.filter(id => id !== industryId)
      }
    }
  },
  computed: {
    getVisibleIndustries() {
      if (!this.criteria.trim()) return this.source.industries
      return this.source.industries.filter(industry => industry.title.toLowerCase().includes(this.criteria.trim()))
    }
  },
  components: {
    PropertyItem
  }
}
</script>