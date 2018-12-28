<template lang="pug">
  div
    v-card.border-round
      v-toolbar
        v-toolbar-title.dark-text-blue.f1-8m Tehnical Skills
        v-dialog(v-model="dialog", width="600")
          v-btn.flat.noShadow(slot="activator")
            v-icon create
          v-card.border-round
            v-container(grid-list-xl='')
              v-layout(wrap='', align-center='')
                v-flex(xs12='', sm12='', d-flex='')
                  h1.label Tehnical Skills
                v-flex(xs12='', sm12='', d-block='')
                  p.dark-text-blue Roles:
                  v-chip(disabled=true, small=true, text-color="black", v-for="skill in fields.roles", :key="skill.id").f1-2m {{skill}}
                  v-dialog(v-model="dialog2", width="600")
                      v-btn(slot="activator", icon=true, small=true).f1-2m
                        i.material-icons add
                      v-card.border-round
                        v-container(grid-list-xl)
                          h1.label What are your strongest skills1?
                          .desc-label Choose as many that apply
                          v-input(v-model="criteria" placeholder="Search skills")
                          .flex.space-between.flex-wrap.p10

                v-flex(xs12='', sm12='', d-block='')
                  p.dark-text-blue Industry:
                  v-chip(disabled=true, small=true, text-color="black", v-for="skill in fields.industry", :key="skill.id").f1-2m {{skill}}
                  v-dialog(v-model="dialog3", width="600")
                      v-btn(slot="activator", icon=true, small=true).f1-2m
                        i.material-icons add
                      v-card.border-round
                        v-container(grid-list-xl)
                          h1.label What are your strongest skills2?
                          .desc-label Choose as many that apply
                          v-input(v-model="criteria" placeholder="Search skills")
                          .flex.space-between.flex-wrap.p10

                v-flex(xs12='', sm12='', d-block='')
                  p.dark-text-blue Company Size:
                  v-chip(disabled=true, small=true, text-color="black", v-for="skill in fields.companySize", :key="skill.id").f1-2m {{skill}}
                  v-dialog(v-model="dialog4", width="600")
                    v-btn(slot="activator", icon=true, small=true).f1-2m
                      i.material-icons add
                    v-card.border-round
                      v-container(grid-list-xl)
                        h1.label What are your strongest skills3?
                        .desc-label Choose as many that apply
                        v-input(v-model="criteria" placeholder="Search skills")
                        .flex.space-between.flex-wrap.p10

      div.p10
        div.flex
          p.dark-text-blue Roles:
          v-chip(disabled=true, small=true, text-color="black", v-for="skill in fields.selectedSkills", :key="skill.id").f1-2m {{skill}}
        div.flex
          p.dark-text-blue Industry:
          v-chip(disabled=true, small=true, text-color="black", v-for="skill in fields.selectedSkills", :key="skill.id").f1-2m {{skill}}
        div.flex
          p.dark-text-blue Company Size:
          v-chip(disabled=true, small=true, text-color="black", v-for="skill in fields.selectedSkills", :key="skill.id").f1-2m {{skill}}

</template>

<script>

export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      criteria: '',
      fields: {
        roles: ['Frontend', 'Backend'],
        industry: ['Frontend', 'Frontend'],
        companySize: ['1-20']
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
    this.cachedFields = Object.assign({}, this.fields);
  }
}
</script>

