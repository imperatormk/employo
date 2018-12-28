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
                  v-chip(disabled=true, small=true, text-color="black", v-for="skill in fields.selectedSkills", :key="skill.id").f1-2m {{skill}}
                  v-dialog(v-model="dialog2", width="600")
                    v-btn(slot="activator", icon=true, small=true).f1-2m
                      i.material-icons add
                    v-card.border-round
                      v-container(grid-list-xl)
                        h1.label What are your strongest skills?
                        .desc-label Choose as many that apply
                        v-input(v-model="criteria" placeholder="Search skills")
                        .flex.space-between.flex-wrap.p10
      div.p10
        div.flex
          p.dark-text-blue Selected Skills:
          v-chip(disabled=true, small=true, text-color="black", v-for="skill in fields.selectedSkills", :key="skill.id").f1-2m {{skill}}

</template>

<script>

export default {
  data() {
    return {
      criteria: '',
      dialog: false,
      dialog2: false,
      fields: {
        selectedSkills: ['Frontend', 'Backend'],
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

