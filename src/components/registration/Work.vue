<template lang="pug">
  v-container(grid-list-xl)
    v-layout(wrap align-center)
      v-flex(xs12, sm12, d-flex)
        h1.label Tell us about your work.
      v-flex(xs12, sm6, d-block)
        .field-label Official co-op
        div(d-flex)
          v-btn(:class='isButtonSelected(fields.officialCoop,true)', @click='fields.officialCoop=true') Yes
          v-btn(:class='isButtonSelected(fields.officialCoop,false)', @click='fields.officialCoop=false') No
      v-flex(xs12, sm6, d-block)
        .field-label Availability
        div(d-flex)
          v-btn(:class='isButtonSelected(fields.availability,0)', @click='fields.availability=0') Summer
          v-btn(:class='isButtonSelected(fields.availability,1)', @click='fields.availability=1') Winter
          v-btn(:class='isButtonSelected(fields.availability,2)', @click='fields.availability=2') Fall
      v-flex(flex-column)
        .field-label Work term length
        .flex.flex-wrap.p10
          v-btn(v-for="termLength in termLengths" :key="termLength" :class="isButtonSelected(fields.termLength, termLength)" @click="setTermLength(termLength)") {{ termLength }}
      v-flex(flex-column)
        .field-label Work location preference (choose all that apply)
        .flex.flex-wrap.p10
          v-btn(v-for="workLocation in workLocations" :key="workLocation.id" :class="isLocationSelected(workLocation.id)" @click="toggleLocationSelected(workLocation.id)") {{ workLocation.title }}
</template>

<script>
import pagesList from '@/components/registration/page_list'

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList[2])
  },
  data() {
    return {
      fields: {
        officialCoop: null,
        availability: null,
        termLength: null,
        locationPref: []
      },
      termLengths: [4, 8, 12, 16],
      workLocations: [{
        id: 0,
        title: 'Toronto'
      }, {
        id: 1,
        title: 'Waterloo'
      }, {
        id: 2,
        title: 'Ottawa'
      }]
    }
  },
  watch: {
    fields: {
      handler: function f(val) {
        this.$store.dispatch('dataChange', {
          pageId: pagesList[2],
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
    setTermLength(termLength) {
      const prevTerm = this.fields.termLength
      if (prevTerm != null && prevTerm === termLength) {
        this.fields.termLength = null
      } else {
        this.fields.termLength = termLength
      }
    },
    toggleLocationSelected(locationId) {
      const isSelected = this.fields.locationPref.find(id => id === locationId) != null
      if (!isSelected) {
        this.fields.locationPref.push(locationId)
      } else {
        this.fields.locationPref = this.fields.locationPref.filter(id => id !== locationId)
      }
    },
    isLocationSelected(locationId) {
      const isSelected = this.fields.locationPref.find(id => id === locationId) != null
      return {
        p10: true,
        btn: true,
        'button-chip': true,
        'btn-selected': isSelected
      }
    },
  }
}
</script>
