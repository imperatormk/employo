<template lang="pug">
  v-container(grid-list-xl)
    v-layout(wrap, align-center)
      v-flex(xs12, sm12, d-flex)
        h1.label Tell us about your education.
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold University
        v-select.br5.demiBold(:items='source.universities', background-color='#f5f5f5', v-model='fields.selUniversity', item-text='title', :label='`eg. ${source.universities[0].title}`', solo)
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold Field of Study
        v-select.demiBold(:items='source.studyFields', background-color='#f5f5f5', v-model='fields.selField', item-text='title', :label='`eg. ${source.studyFields[0].title}`', solo)
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold Expected Year of Graduation
        v-select.demiBold(:items='source.years', background-color='#f5f5f5', v-model='fields.selYear', :label='`eg. ${source.years[0]}`', solo)
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold Cumulative GPA
        v-text-field.br5.demiBold(v-model="fields.selGpa" solo background-color="#f5f5f5" max="4" min="0" suffix='/4.0' type="number")
      v-flex(flex-column)
        .field-label.demiBold Degree
          .flex.flex-wrap.p10.style-1.of-scroll(style="height:130px;")
            v-btn.demiBold(v-for="degree in source.degrees" :key="degree.id" :class="isDegreeSelected(degree)" @click="setDegree(degree)") {{ degree.title }}
</template>

<script>
import pagesList, { studentPagesData } from '@/components/registration/page_list'
import helpers from '@/helpers'

const PAGE_ID = pagesList.studentPagesList.education

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList.studentPagesList[PAGE_ID])
  },
  data() {
    return {
      source: studentPagesData.find(item => item.pageId === PAGE_ID).fields,
      fields: {
        selUniversity: null,
        selField: null,
        selYear: null,
        selGpa: null,
        degree: null,
      }
    }
  },
  computed: {
    checkForSuccess() {
      return helpers.checkEmpty(this.fields)
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