<template>
  <v-container grid-list-xl>
    <v-layout wrap align-center>
      <v-flex xs12 sm12 d-flex>
        <h1 class="label">Tell us about your education.</h1>
      </v-flex>
      <v-flex xs12 sm6 d-block>
        <div class="field-label">University</div>
        <v-select
          :items="universities"
          v-model="fields.selUniversity"
          item-text="title"
          :label="`eg. ${universities[0].title}`"
          solo
          append-icon
        ></v-select>
      </v-flex>
      <v-flex xs12 sm6 d-block>
        <div class="field-label">Field of Study</div>
        <v-select
          :items="studyFields"
          v-model="fields.selField"
          item-text="title"
          :label="`eg. ${studyFields[0].title}`"
          solo
        ></v-select>
      </v-flex>
      <v-flex xs12 sm6 d-block>
        <div class="field-label">Expected Year of Graduation</div>
        <v-select
          :items="years"
          v-model="fields.selYear"
          :label="`eg. ${years[0]}`"
          solo
        ></v-select>
      </v-flex>
      <v-flex xs12 sm6 d-block>
        <div class="field-label">Cumulative GPA</div>
        <v-select
          :items="gpas"
          v-model="fields.selGpa"
          :label="`eg. ${gpas[0]}`"
          solo
        ></v-select>
      </v-flex>
      <v-flex xs12 sm6 d-block>
        <div class="field-label">Official co-op</div>
        <div d-flex>
          <v-btn :class="isButtonSelected(fields.officialCoop,true)" @click="fields.officialCoop=true">Yes</v-btn>
          <v-btn :class="isButtonSelected(fields.officialCoop,false)" @click="fields.officialCoop=false">No</v-btn>
        </div>
      </v-flex>
      <v-flex xs12 sm6 d-block>
        <div class="field-label">Availability</div>
        <div d-flex>
          <v-btn :class="isButtonSelected(fields.availability,0)" @click="fields.availability=0">Summer</v-btn>
          <v-btn :class="isButtonSelected(fields.availability,1)" @click="fields.availability=1">Winter</v-btn>
          <v-btn :class="isButtonSelected(fields.availability,2)" @click="fields.availability=2">Fall</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import pagesList from '@/pages'

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList[0])
    this.$store.dispatch('curPageChange', 0)
  },
  data() {
    return {
      fields: {
        selUniversity: null,
        selField: null,
        selYear: null,
        selGpa: null,
        officialCoop: null,
        availability: null
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
      gpas: [3.9, 4]
    }
  },
  watch: {
    fields: {
      handler: function f(val) {
        this.$store.dispatch('dataChange', {
          pageId: pagesList[0],
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
        'md-raised': true,
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
    }
  }
}
</script>