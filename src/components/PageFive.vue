<template>
  <PageContainer :curPage="4">
    <div>
      <h1 class="label">What are your strongest skills?</h1>
      <div class="desc-label">Choose as many that apply</div>
      <md-field class="input-box text-box">
        <md-input v-model="criteria" placeholder="Search skills"></md-input>
      </md-field>
      <div class="flex space-between flex-wrap p10">
        <md-button v-for="skill in getVisibleSkills" :key="skill.id" :class="isSkillSelected(skill.id)" @click="toggleSkillSelected(skill.id)">{{ skill.title }}</md-button>
      </div>
    </div>
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/PageContainer'

export default {
  created() {
    this.fields = this.$store.getters.getById('pageFive')
  },
  data() {
    return {
      criteria: '',
      fields: {
        selectedSkills: [],
      },
      skills: [{
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
    fields: {
      handler: function f(val) {
        this.$store.dispatch('dataChange', {
          pageId: 'pageFive',
          fields: val
        })
      },
      deep: true
    }
  },
  methods: {
    isSkillSelected(skillId) {
      const isSelected = this.fields.selectedSkills.find(id => id === skillId) != null
      return {
        'md-raised': true,
        p10: true,
        btn: true,
        'button-chip': true,
        'btn-selected': isSelected
      }
    },
    toggleSkillSelected(skillId) {
      const isSelected = this.fields.selectedSkills.find(id => id === skillId) != null
      if (!isSelected) {
        this.fields.selectedSkills.push(skillId)
      } else {
        this.fields.selectedSkills = this.fields.selectedSkills.filter(id => id !== skillId)
      }
    }
  },
  computed: {
    getVisibleSkills() {
      if (!this.criteria.trim()) return this.skills
      return this.skills.filter(skill => skill.title.toLowerCase().includes(this.criteria.trim()))
    }
  },
  components: {
    PageContainer
  }
}
</script>