<template lang="pug">
  div
    .flex.profile-head.justify-center
      div(d-block=true style="text-align: center;")
        h1 {{fields.firstName}} {{fields.lastName}}
          v-dialog(v-model="dialog", width="600" persistent=true)
            v-btn.noShadow(slot="activator", flat=true dark=true)
                v-icon create
            v-card.border-round
              v-container(grid-list-xl='')
                v-layout(wrap='', align-center='')
                  v-flex(xs12='', sm12='', d-flex='')
                    h1.label User Info
                  v-flex(xs12='', sm6='', d-block='')
                    .field-label First Name
                    v-text-field.br5(:label="fields.firstName" v-model="fields.firstName" solo="")
                  v-flex(xs12='', sm6='', d-block='')
                    .field-label Last Name
                    v-text-field.br5(:label="fields.lastName" v-model="fields.lastName" solo="")
                  v-flex(xs12='', sm6='', d-block='')
                    .field-label Employment Type
                    v-select(:items='employmentType', background-color='#f5f5f5', v-model='userBase.employmentType', :label='userBase.employmentType',item-text='title', solo='')
                  v-flex(xs12='', sm6='', d-block='')
                    .field-label City Of Residence
                    div(d-flex='')
                      v-select(:items='city', background-color='#f5f5f5', v-model='fields.city', :label='fields.city', item-text='title', solo='')
                  v-flex(xs12='', sm6='', d-block='')
                    .field-label Stage Of Job Search
                    v-select(:items='stageOfSearch', background-color='#f5f5f5', v-model='userBase.stageOfSearch', :label='userBase.stageOfSearch',item-text='title', solo='')
                v-layout(wrap='', align-center='')
                  div.flex.space-around.xl12
                    v-btn.flat(@click="cancel") Cancel
                    v-btn.flat(@click="save") Save
        h1 {{fields.city}}
        div(v-if="student")
          h1 Seeking {{userBase.employmentType}} Co/Op internship
          h1 {{userBase.stageOfSearch}}
        div(v-else)
          h1 Test
</template>

<script>
export default {
  props: {
    user: Object
  },
  created() {
    this.fields = this.user;
  },
  data() {
    return {
      dialog: false,
      student: true,
      fields: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        city: '',
      },
      userBase: {
        stageOfSearch: 'Actively Interviewing',
        employmentType: 'summer',
      },
      employmentType: [
        {
          id: 0,
          title: 'summer'
        },
        {
          id: 1,
          title: 'winter'
        }
      ],
      stageOfSearch: [
        {
          id: 0,
          title: 'Actively Interviewing'
        },
        {
          id: 1,
          title: 'No Interviewing'
        }
      ],
      city: [
        {
          id: 0,
          title: 'Toronto'
        },
        {
          id: 1,
          title: 'Seattle'
        }
      ]
    }
  },
  methods: {
    save() {

    },
    cancel() {

    }
  }
}
</script>

