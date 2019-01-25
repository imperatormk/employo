<template lang="pug">
    v-card.border-round.content-inherit.flex-basis-20
      v-toolbar
        v-toolbar-title.dark-text-blue.f1-8m Technical Skills
        v-spacer
        v-dialog(content-class="dialog-round" v-model="dialog", width="600" persistent=true)
          v-btn.noShadow(slot="activator", fab=true small=true)
            v-icon create
          v-card.border-round
            v-container(grid-list-xl)
              v-layout(wrap, align-center)
                v-flex(xs12, sm12, d-flex)
                  h1.label Technical Skills
                v-flex(xs12, sm12, d-block)
                  v-chip(disabled=true, small=true, text-color="black", v-for="skill in fields.selectedSkills", :key="skill").f1-2m {{skill}}
                  v-dialog(content-class="dialog-round" v-model="dialog2", width="600")
                    v-btn(slot="activator", icon=true, small=true).f1-2m
                      i.material-icons add
                    v-card.border-round
                      v-container(grid-list-xl)
                        h1.label What are your strongest skills?
                        .desc-label Choose as many that apply
                        v-text-field(v-model="criteria" placeholder="Search skills")
                        .flex.space-between.flex-wrap.p10
                          v-chip(small=true, text-color="black", v-for="skill in skills", :key="skill.id" :class="isSkillSelected(skill.title)" @click="toggleSkillSelected(skill.title)").f1-2m {{skill.title}}
                  div.flex.space-around
                  v-btn.flat.border-round(@click="cancel") Cancel
                  v-btn.flat.border-round(@click="save") Save
      div.p10
        div.flex.align-center
          p.dark-text-blue Selected Skills:
          v-chip(disabled=true, small=true, text-color="black", v-for="skill in fields.selectedSkills", :key="skill").f1-2m {{skill}}

</template>

<script>

export default {
  data() {
    return {
      criteria: '',
      dialog: false,
      dialog2: false,
      fields: {
        selectedSkills: null,
        userSkill: ['Frontend', 'Backend'],
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
  mounted() {
  },
  created() {
    this.fields.selectedSkills = this.fields.userSkill.slice();
  },
  methods: {
    save() {
      this.dialog = false;
      this.fields.userSkill = this.fields.selectedSkills;
    },
    cancel() {
      this.dialog = false;
      this.fields.selectedSkills = this.fields.userSkill
    },
    isSkillSelected(skillTitle) {
      const isSelected = this.fields.selectedSkills.find(title => title === skillTitle) != null
      return {
        p10: true,
        btn: true,
        'button-chip': true,
        'btn-selected': isSelected
      }
    },
    toggleSkillSelected(skillTitle) {
      const isSelected = this.fields.selectedSkills.find(title => title === skillTitle) != null
      if (!isSelected) {
        this.fields.selectedSkills.push(skillTitle)
      } else {
        this.fields.selectedSkills = this.fields.selectedSkills.filter(title => title !== skillTitle)
      }
    }
  }
}
</script>

