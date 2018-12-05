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
  data() {
    return {
      criteria: '',
      skills: [{
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
    isSkillSelected(skillId) {
      const isSelected = this.skills.find(skill => skill.id === skillId).isSelected
      return {
        'md-raised': true,
        'p10': true,
        'btn': true,
        'button-chip': true,
        'btn-selected': isSelected
      }
    },
    toggleSkillSelected(skillId) {
      const skill = this.skills.find(skill => skill.id === skillId)
      skill.isSelected = !skill.isSelected
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