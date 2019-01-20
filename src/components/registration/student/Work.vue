<template lang="pug">
  v-container(grid-list-xl)
    v-layout(wrap align-center)
      v-flex(xs12, sm12, d-flex)
        h1.label Tell us about your work preferences.
      v-flex(xs12, sm5, d-block)
        .field-label.demiBold Official co-op
        div(d-flex)
          v-btn.demiBold(:class='isButtonSelected(fields.officialCoop,"true")', @click='fields.officialCoop="true"') Yes
          v-btn.demiBold(:class='isButtonSelected(fields.officialCoop,"false")', @click='fields.officialCoop="false"') No
      v-flex(xs12, sm7, d-block)
        .field-label.demiBold Availability
        div(d-flex)
          v-btn.demiBold.p-left-0(v-for="a in source.availabilities" :key="a.id" :class="isLocationSelected(a.id, 'availability')" @click="toggleLocationSelected(a.id, 'availability')") {{ a.title }}
      v-flex(flex-column)
        .field-label.demiBold Work term length
        .flex-wrap.p10.p-left-0.style-1.of-scroll(style="height:130px;")
            v-btn.demiBold(v-for="termLength in source.termLengths" :key="termLength.id" :class="isLocationSelected(termLength.id, 'termLength')" @click="toggleLocationSelected(termLength.id, 'termLength')") {{ termLength.title }} Months
      v-flex(flex-column)
        .field-label.demiBold Work location preference (choose all that apply)
        .flex-wrap.p10.p-left-0.style-1.of-scroll(style="height:130px;")
            v-btn.demiBold(v-for="workLocation in source.workLocations" :key="workLocation.id" :class="isLocationSelected(workLocation.id, 'locationPref')" @click="toggleLocationSelected(workLocation.id, 'locationPref')") {{ workLocation.title }}
</template>

<script>
import pagesList, { studentPagesData } from '@/components/registration/page_list'
import helpers from '@/helpers'

const PAGE_ID = pagesList.studentPagesList.work

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList.studentPagesList[PAGE_ID])
  },
  data() {
    return {
      source: studentPagesData.find(item => item.pageId === PAGE_ID).fields,
      fields: {},
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
