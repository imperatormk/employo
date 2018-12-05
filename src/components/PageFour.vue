<template>
  <PageContainer :curPage="3">
    <div>
      <h1 class="label">Industries you would like to work with?</h1>
      <div class="desc-label">Choose as many that apply</div>
      <md-field class="input-box text-box">
        <md-input v-model="criteria" placeholder="Search industries"></md-input>
      </md-field>
      <div class="flex space-between flex-wrap p10">
        <md-button v-for="industry in getVisibleIndustries" :key="industry.id" :class="isIndustrySelected(industry.id)" @click="toggleIndustrySelected(industry.id)">{{ industry.title }}</md-button>
      </div>
    </div>
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/PageContainer'

export default {
  data() {
    return {
      criteria: '',
      industries: [{
        id: 0,
        title: 'Frontend',
        isSelected: false
      }, {
        id: 1,
        title: 'Backend',
        isSelected: false
      }, {
        id: 2,
        title: 'Databases',
        isSelected: false
      }, {
        id: 3,
        title: 'Mobile',
        isSelected: false
      }, {
        id: 4,
        title: 'Design',
        isSelected: false
      }, {
        id: 5,
        title: 'QA',
        isSelected: false
      }, {
        id: 6,
        title: 'IT',
        isSelected: false
      }, {
        id: 7,
        title: 'Full stack',
        isSelected: false
      }]
    }
  },
  methods: {
    isIndustrySelected(industryId) {
      const isSelected = this.industries.find(industry => industry.id === industryId).isSelected
      return {
        'md-raised': true,
        p10: true,
        btn: true,
        'button-chip': true,
        'btn-selected': isSelected
      }
    },
    toggleIndustrySelected(industryId) {
      const industry = this.industries.find(industryObj => industryObj.id === industryId)
      industry.isSelected = !industry.isSelected
    }
  },
  computed: {
    getVisibleIndustries() {
      if (!this.criteria.trim()) return this.industries
      return this.industries.filter(industry => industry.title.toLowerCase().includes(this.criteria.trim()))
    }
  },
  components: {
    PageContainer
  }
}
</script>