<template lang="pug">
  v-container(grid-list-xl)
    h1.label Industries you would like to work with?
    .desc-label Choose as many that apply
    v-input(v-model="criteria" placeholder="Search industries")
    .flex.space-between.flex-wrap.p10
      v-btn(v-for="industry in getVisibleIndustries" :key="industry.id" :class="isIndustrySelected(industry.id)" @click="toggleIndustrySelected(industry.id)") {{ industry.title }}
</template>

<script>
import pagesList from '@/components/registration/page_list'

const PAGE_ID = pagesList.studentPagesList.industries

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList.studentPagesList[PAGE_ID])
  },
  data() {
    return {
      criteria: '',
      fields: {
        selectedIndustries: [],
      },
      industries: [{
        id: 0,
        title: 'Frontend'
      }, {
        id: 1,
        title: 'Backend'
      }, {
        id: 2,
        title: 'Databases'
      }, {
        id: 3,
        title: 'Mobile'
      }, {
        id: 4,
        title: 'Design'
      }, {
        id: 5,
        title: 'QA'
      }, {
        id: 6,
        title: 'IT'
      }, {
        id: 7,
        title: 'Full stack'
      }]
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
      const items = Object.values(this.fields)
      function checkEmpty(prop) {
        if (prop instanceof Array) {
          return prop.length >= 1;
        } else if (prop) {
          return prop.toString().trim().length >= 0;
        }

        return false
      }
      return items.every(checkEmpty)
    },
    getVisibleIndustries() {
      if (!this.criteria.trim()) return this.industries
      return this.industries.filter(industry => industry.title.toLowerCase().includes(this.criteria.trim()))
    }
  }
}
</script>