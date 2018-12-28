<template lang="pug">
  div
    v-card.border-round
      v-toolbar
        v-toolbar-title.dark-text-blue.f1-8m Education
        v-dialog(v-model="dialog", width="600", persistent=true)
          v-btn.flat.noShadow(slot="activator")
            v-icon create
          v-card.border-round
            v-container(grid-list-xl='')
              v-layout(wrap='', align-center='')
                v-flex(xs12='', sm12='', d-flex='')
                  h1.label Education
                v-flex(xs12='', sm6='', d-block='')
                  .field-label University
                  v-select.br5(:items='universities', background-color='#f5f5f5', v-model="fields.University", item-text='title', :label='fields.University', solo='', append-icon='')
                v-flex(xs12='', sm6='', d-block='')
                  .field-label Field of Study
                  v-select(:items='studyFields', background-color='#f5f5f5', v-model="fields.Field", item-text='title', :label='fields.Field', solo='')
                v-flex(xs12='', sm6='', d-block='')
                  .field-label Expected Year of Graduation
                  v-select(:items='years', background-color='#f5f5f5', v-model='fields.Graduation',item-value="years", ref="Graduation", :label='fields.Graduation', solo='')
                v-flex(xs12='', sm6='', d-block='')
                  .field-label Official co-op
                  div(d-flex='')
                    v-select(:items='officialCoop', background-color='#f5f5f5', v-model='fields.CoOp',item-value="officialCoop", ref="CoOp" :label='fields.CoOp', solo='')
                div.flex.space-around
                  v-btn.flat(@click="cancel") Cancel
                  v-btn.flat(@click="save") Save
      div.p10
        div.flex
          p.dark-text-blue University:
          p {{fields.University}}
        div.flex
          p.dark-text-blue Degree Title:
          p {{fields.Degree}}
        div.flex
          p.dark-text-blue Fields of Study:
          p {{fields.Field}}
        div.flex
          p.dark-text-blue Expected year of Graduation:
          p {{fields.Graduation}}
        div.flex
          p.dark-text-blue Official Co-op:
          p {{fields.CoOp}}

</template>

<script>

export default {
  data() {
    return {
      dialog: false,
      fields: {
        University: 'University of Toronto',
        Degree: 'BSc',
        Field: 'Computer Science',
        Graduation: '2020',
        CoOp: 'Yes'
      },
      degree: [{
        id: 0,
        title: 'BSc'
      },
      {
        id: 1,
        title: 'Phd'
      }],
      officialCoop: ['Yes', 'No'],
      universities: [{
        id: 0,
        title: 'University of Toronto'
      }, {
        id: 1,
        title: 'Western University'
      }],
      studyFields: [{
        id: 0,
        title: 'Computer Science'
      }, {
        id: 1,
        title: 'Software Engineering'
      }],
      years: ['2020', '2021'],
    }
  },
  mounted() {
    this.cachedFields = Object.assign({}, this.fields);
  },
  methods: {
    save() {
      this.dialog = false;
      this.cachedFields = Object.assign({}, this.fields);
    },
    cancel() {
      this.dialog = false;
      this.fields = Object.assign({}, this.cachedFields);
    }
  }
}
</script>

