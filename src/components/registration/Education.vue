<template lang="pug">
  v-container(grid-list-xl='')
    v-layout(wrap='', align-center='')
      v-flex(xs12='', sm12='', d-flex='')
        h1.label Tell us about your education.
      v-flex(xs12='', sm6='', d-block='')
        .field-label University
        v-select.br5(:items='universities', background-color='#f5f5f5', v-model='fields.selUniversity', item-text='title', :label='`eg. ${universities[0].title}`', solo='', append-icon='')
      v-flex(xs12='', sm6='', d-block='')
        .field-label Field of Study
        v-select(:items='studyFields', background-color='#f5f5f5', v-model='fields.selField', item-text='title', :label='`eg. ${studyFields[0].title}`', solo='')
      v-flex(xs12='', sm6='', d-block='')
        .field-label Expected Year of Graduation
        v-select(:items='years', background-color='#f5f5f5', v-model='fields.selYear', :label='`eg. ${years[0]}`', solo='')
      v-flex(xs12='', sm6='', d-block='')
        .field-label Cumulative GPA
        v-select(:items='gpas', background-color='#f5f5f5', v-model='fields.selGpa', :label='`eg. ${gpas[0]}`', solo='')
      v-flex(xs12='', sm6='', d-block='')
        .field-label Official co-op
        div(d-flex='')
          v-btn(:class='isButtonSelected(fields.officialCoop,true)', @click='fields.officialCoop=true') Yes
          v-btn(:class='isButtonSelected(fields.officialCoop,false)', @click='fields.officialCoop=false') No
      v-flex(xs12='', sm6='', d-block='')
        .field-label Availability
        div(d-flex='')
          v-btn(:class='isButtonSelected(fields.availability,0)', @click='fields.availability=0') Summer
          v-btn(:class='isButtonSelected(fields.availability,1)', @click='fields.availability=1') Winter
          v-btn(:class='isButtonSelected(fields.availability,2)', @click='fields.availability=2') Fall
      .flex.flex-column
        .field-label Degree
        .flex.flex-wrap.p10
          v-btn(v-for="degree in degrees" :key="degree.id" :class="isDegreeSelected(degree)" @click="setDegree(degree)") {{ degree.title }}
</template>

<script>
import pagesList from '@/components/registration/page_list'

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList[1])
  },
  data() {
    return {
      fields: {
        selUniversity: null,
        selField: null,
        selYear: null,
        selGpa: null,
        officialCoop: null,
        availability: null,
        degree: null,
      },
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
      years: [2020, 2021],
      gpas: [3.9, 4],
      degrees: [{
        id: 0,
        title: 'BA'
      }, {
        id: 1,
        title: 'BBA'
      }]
    }
  },
  watch: {
    fields: {
      handler: function f(val) {
        this.$store.dispatch('dataChange', {
          pageId: pagesList[1],
          fields: val
        })
      },
      deep: true
    }
  },
  methods: {
    isButtonSelected(currentVal, expectedVal) {
      const isSelected = currentVal === expectedVal
      return {
        btn: true,
        'btn-selected': isSelected
      }
    },
    getPlaceholder(arr) {
      if (!arr.length) return ''
      const firstItem = arr[0].title || arr[0]
      return `eg. ${firstItem}`
    },
    selectFirstElement(key, arr) {
      if (this[key] == null) {
        this[key] = arr[0].id != null ? arr[0].id : 0
      }
    },
    setDegree(degree) {
      const prevDegree = this.fields.degree
      if (prevDegree != null && prevDegree === degree.id) {
        this.fields.degree = null
      } else {
        this.fields.degree = degree.id
      }
    },
    isDegreeSelected(degree) {
      const isSelected = this.fields.degree != null && degree != null && this.fields.degree === degree.id
      return {
        p10: true,
        btn: true,
        'button-chip': true,
        'btn-selected': isSelected
      }
    }
  }
}
</script>