<template lang="pug">
    v-card.border-round.content-inherit.flex-basis-20
      v-toolbar
        v-toolbar-title.dark-text-blue.f1-8m Career Interests
        v-spacer
        v-dialog(v-model="dialog", width="600" persistent=true)
          v-btn.noShadow(slot="activator", fab=true small=true)
            v-icon create
          v-card.border-round
            v-container(grid-list-xl='')
              v-layout(wrap='', align-center='')
                v-flex(xs12='', sm12='', d-flex='')
                  h1.label Career Interests
                v-flex(xs12='', sm12='', d-block='')
                  p.dark-text-blue Roles:
                  v-chip(disabled=true, small=true, text-color="black", v-for="role in selectedFields.roles", :key="role.id").f1-2m {{role}}
                  v-dialog(v-model="dialog2", width="600")
                      v-btn(slot="activator", icon=true, small=true).f1-2m
                        i.material-icons add
                      v-card.border-round
                        v-container(grid-list-xl)
                          h1.label Roles?
                          .desc-label Choose as many that apply
                          v-input(v-model="criteria2" placeholder="Search skills")
                          .flex.space-between.flex-wrap.p10
                            v-chip(small=true, text-color="black", v-for="role in roles", :key="role.id" :class="isSkillSelected('role', role.title)" @click="toggleSkillSelected('role',role.title)").f1-2m {{role.title}}
                v-flex(xs12='', sm12='', d-block='')
                  p.dark-text-blue Industry:
                  v-chip(disabled=true, small=true, text-color="black", v-for="ind in fields.industry", :key="ind.id").f1-2m {{ind}}
                  v-dialog(v-model="dialog4", width="600")
                      v-btn(slot="activator", icon=true, small=true).f1-2m
                        i.material-icons add
                      v-card.border-round
                        v-container(grid-list-xl)
                          h1.label Industry?
                          .desc-label Choose as many that apply
                          v-input(v-model="criteria3" placeholder="Search skills")
                          .flex.space-between.flex-wrap.p10
                            v-chip(small=true, text-color="black", v-for="industry in industry", :key="industry.id" :class="isSkillSelected('industry', industry.title)" @click="toggleSkillSelected('industry',industry.title)").f1-2m {{industry.title}}

                v-flex(xs12='', sm12='', d-block='')
                  p.dark-text-blue Company Size:
                  v-chip(disabled=true, small=true, text-color="black", v-for="skill in fields.companySize", :key="skill.id").f1-2m {{skill}}
                  v-dialog(v-model="dialog4", width="600")
                    v-btn(slot="activator", icon=true, small=true).f1-2m
                      i.material-icons add
                    v-card.border-round
                      v-container(grid-list-xl)
                        h1.label Company Size?
                        .desc-label Choose as many that apply
                        v-input(v-model="criteria4" placeholder="Search skills")
                        .flex.space-between.flex-wrap.p10
                          v-chip(small=true, text-color="black", v-for="company in companySize", :key="company.id" :class="isSkillSelected('company', company.title)" @click="toggleSkillSelected('company',company.title)").f1-2m {{company.title}}
                  div.flex.space-around
                  v-btn.flat.border-round(@click="cancel") Cancel
                  v-btn.flat.border-round(@click="save") Save

      div.p10
        div.flex.align-center
          p.dark-text-blue Roles:
          v-chip(disabled=true, small=true, text-color="black", v-for="role in selectedFields.roles", :key="role.id").f1-2m {{role}}
        div.flex
          p.dark-text-blue Industry:
          v-chip(disabled=true, small=true, text-color="black", v-for="ind in selectedFields.industry", :key="ind.id").f1-2m {{ind}}
        div.flex
          p.dark-text-blue Company Size:
          v-chip(disabled=true, small=true, text-color="black", v-for="skill in selectedFields.companySize", :key="skill.id").f1-2m {{skill}}

</template>

<script>

export default {
  created() {
    this.selectedFields.roles = this.fields.roles.slice();
    this.selectedFields.industry = this.fields.industry.slice();
    this.selectedFields.companySize = this.fields.companySize.slice();
  },
  data() {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      criteria: '',
      criteria2: '',
      criteria3: '',
      criteria4: '',
      fields: {
        roles: ['Frontend', 'Backend'],
        industry: ['Advertising', 'Finance'],
        companySize: ['1-20']
      },
      selectedFields: {
        roles: null,
        industry: null,
        companySize: null
      },
      roles: [{
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
      }],
      industry: [{
        id: 0,
        title: 'Advertising'
      },
      {
        id: 1,
        title: 'Finance'
      }],
      companySize: [{
        id: 0,
        title: '1-20'
      },
      {
        id: 1,
        title: '20-50'
      }]
    }
  },
  methods: {
    save() {
      this.dialog = false;
      this.fields.roles = this.selectedFields.roles;
      this.fields.industry = this.selectedFields.industry;
      this.fields.companySize = this.selectedFields.companySize;
    },
    cancel() {
      this.dialog = false;
      this.selectedFields.roles = this.fields.roles
      this.selectedFields.industry = this.fields.industry
      this.selectedFields.companySize = this.fields.companySize
    },
    isSkillSelected(role, skillTitle) {
      let property = this.selectedFields.roles

      if (role === 'company') {
        property = this.selectedFields.companySize
      } else if (role === 'industry') {
        property = this.selectedFields.industry
      }
      const isSelected = property.find(title => title === skillTitle) != null
      return {
        p10: true,
        btn: true,
        'button-chip': true,
        'btn-selected': isSelected
      }
    },
    toggleSkillSelected(role, skillTitle) {
      let property = this.selectedFields.roles
      if (role === 'company') {
        property = this.selectedFields.companySize
      } else if (role === 'industry') {
        property = this.selectedFields.industry
      }
      const isSelected = property.find(title => title === skillTitle) != null
      if (!isSelected) {
        property.push(skillTitle)
      } else {
        property = property.filter(title => title !== skillTitle)
      }
    }
  }
}
</script>

