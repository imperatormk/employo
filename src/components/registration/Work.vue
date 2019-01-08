<template lang="pug">
  v-container(grid-list-xl)
    v-layout(wrap align-center)
      v-flex(xs12, sm12, d-flex)
        h1.label Tell us about your work preferences.
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold Official co-op
        div(d-flex)
          v-btn.demiBold(:class='isButtonSelected(fields.officialCoop,"true")', @click='fields.officialCoop="true"') Yes
          v-btn.demiBold(:class='isButtonSelected(fields.officialCoop,"false")', @click='fields.officialCoop="false"') No
      v-flex(xs12, sm6, d-block)
        .field-label.demiBold Availability
        div(d-flex)
          v-btn.demiBold(v-for="a in availabilitys" :key="a.id" :class="isLocationSelected(a.id, 'availability')" @click="toggleLocationSelected(a.id, 'availability')") {{ a.title }}
      v-flex(flex-column)
        .field-label.demiBold Work term length
        .flex.flex-wrap.p10
          v-btn.demiBold(v-for="termLength in termLengths" :key="termLength.id" :class="isLocationSelected(termLength.id, 'termLength')" @click="toggleLocationSelected(termLength.id, 'termLength')") {{ termLength.title }} Months
      v-flex(flex-column)
        .field-label.demiBold Work location preference (choose all that apply)
        .flex.flex-wrap.p10(style="height:130px;overflow:scroll;")
          v-btn.demiBold(v-for="workLocation in workLocations" :key="workLocation.id" :class="isLocationSelected(workLocation.id, 'locationPref')" @click="toggleLocationSelected(workLocation.id, 'locationPref')") {{ workLocation.title }}
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
        availability: [],
        termLength: [],
        locationPref: []
      },
      workLocations: [{
        id: 0,
        title: 'Toronto'
      }, {
        id: 1,
        title: 'Waterloo'
      }, {
        id: 2,
        title: 'Ottawa'
      }],
      availabilitys: [{
        id: 0,
        title: 'Summer'
      }, {
        id: 1,
        title: 'Winter'
      }, {
        id: 2,
        title: 'Fall'
      }],
      termLengths: [{
        id: 0,
        title: '4'
      }, {
        id: 1,
        title: '8'
      }, {
        id: 2,
        title: '12'
      }, {
        id: 3,
        title: '16'
      }]
    }
  },
  computed: {
    checkForSuccess() {
      const items = Object.values(this.fields)
      function checkEmpty(prop) {
        if (prop instanceof Array) {
          return prop.length >= 1;
        } else if (prop) {
          return prop.toString().length >= 0;
        }

        return false
      }
      return items.every(checkEmpty)
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
    toggleLocationSelected(locationId, field) {
      const isSelected = this.fields[field].find(id => id === locationId) != null
      if (!isSelected) {
        this.fields[field].push(locationId)
      } else {
        this.fields[field] = this.fields[field].filter(id => id !== locationId)
      }
    },
    isLocationSelected(locationId, field) {
      const isSelected = this.fields[field].find(id => id === locationId) != null
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
