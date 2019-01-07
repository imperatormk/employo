<template lang="pug">
  v-container(grid-list-xl)
    v-layout(wrap, align-center)
      v-flex(xs12, sm12, d-flex)
        h1.label Tell us about your education.
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold University
        v-select.br5.demiBold(:items='universities', background-color='#f5f5f5', v-model='fields.selUniversity', item-text='title', :label='`eg. ${universities[0].title}`', solo)
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold Field of Study
        v-select.demiBold(:items='studyFields', background-color='#f5f5f5', v-model='fields.selField', item-text='title', :label='`eg. ${studyFields[0].title}`', solo)
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold Expected Year of Graduation
        v-select.demiBold(:items='years', background-color='#f5f5f5', v-model='fields.selYear', :label='`eg. ${years[0]}`', solo)
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold Cumulative GPA
        v-text-field.br5.demiBold(v-model="fields.selGpa" solo background-color="#f5f5f5" suffix='/4.0' type="number")
      v-flex(flex-column)
        .field-label.demiBold Degree
        .flex.flex-wrap.p10(style="height:130px;overflow:scroll;")
          v-btn.demiBold(v-for="degree in degrees" :key="degree.id" :class="isDegreeSelected(degree)" @click="setDegree(degree)") {{ degree.title }}
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
      }, {
        id: 2,
        title: 'BBA'
      }, {
        id: 3,
        title: 'BBA'
      }, {
        id: 4,
        title: 'BBA'
      }, {
        id: 5,
        title: 'BBA'
      }, {
        id: 6,
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