<template lang="pug">
  v-container(grid-list-xl)
    v-flex(xs12, sm12, d-flex).p70-bot
      h1.label What are your strongest skills?
    v-layout(wrap align-center)
      v-flex(flex-column)
        .field-label Choose as many that apply
        v-text-field(v-model="criteria" placeholder="Search skills")
        .flex-wrap.p10.p-left-0.style-1.of-scroll(style="height:130px;")
          v-btn(v-for="skill in getVisibleSkills" :key="skill.id" :class="isSkillSelected(skill.id)" @click="toggleSkillSelected(skill.id)") {{ skill.title }}
</template>

<script>
import pagesList from '@/components/registration/page_list'
import helpers from '@/helpers'

const PAGE_ID = pagesList.studentPagesList.skills

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList.studentPagesList[PAGE_ID])
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
    isSkillSelected(skillId) {
      const isSelected = this.fields.selectedSkills.find(id => id === skillId) != null
      return {
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
    checkForSuccess() {
      return helpers.checkEmpty(this.fields)
    },
    getVisibleSkills() {
      if (!this.criteria.trim()) return this.skills
      return this.skills.filter(skill => skill.title.toLowerCase().includes(this.criteria.trim()))
    }
  }
}
</script>