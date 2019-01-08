<template lang="pug">
  v-container(grid-list-xl)
    h1.label What are your strongest skills?
    .desc-label Choose as many that apply
    v-input(v-model="criteria" placeholder="Search skills")
    .flex.space-between.flex-wrap.p10
      v-btn(v-for="skill in getVisibleSkills" :key="skill.id" :class="isSkillSelected(skill.id)" @click="toggleSkillSelected(skill.id)") {{ skill.title }}
</template>

<script>
import pagesList from '@/components/registration/page_list'

const PAGE_ID = pagesList.skills

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList[PAGE_ID])
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
          pageId: pagesList[PAGE_ID],
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
      const items = Object.values(this.fields)
      function checkEmpty(prop) {
        if (prop instanceof Array) {
          return prop.length >= 1;
        } else if (prop) {
          return prop.toString().length >= 0;
        }

        return false
      }
      return items.every(checkEmpty)
    },
    getVisibleSkills() {
      if (!this.criteria.trim()) return this.skills
      return this.skills.filter(skill => skill.title.toLowerCase().includes(this.criteria.trim()))
    }
  }
}
</script>