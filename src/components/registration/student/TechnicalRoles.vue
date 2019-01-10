<template lang="pug">
  v-container(grid-list-xl)
    v-layout(wrap align-center)
      v-flex(xs12, sm12, d-flex)
        h1.label Select your preffered technical roles
      v-flex(flex-column)
        .field-label.demiBold Choose as many that apply
        .flex-wrap.p10.p-left-0.style-1(style="height:130px;overflow-y: scroll;")
          v-autocomplete(v-model="fields.rolePref"
          :items="technicalRoles"
          item-text="title"
          label="Search Roles"
          item-disabled
          multiple
          persistent-hint)
        .flex-wrap.p10.p-left-0.style-1(style="height:130px;overflow-y: scroll;")
            v-btn.demiBold(v-for="role in technicalRoles" :key="role.id" :class="isLocationSelected(role.id, 'rolePref')" @click="toggleLocationSelected(role.id, 'rolePref')") {{ role.title }}
</template>

<script>
import pagesList from '@/components/registration/page_list'
import helpers from '@/helpers'

const PAGE_ID = pagesList.studentPagesList.technicalRoles

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList.studentPagesList[PAGE_ID])
  },
  data() {
    return {
      model: null,
      fields: {
        rolePref: []
      },
      technicalRoles: [{
        id: 0,
        title: 'Back-End'
      }, {
        id: 1,
        title: 'Full Stuck'
      }, {
        id: 2,
        title: 'App dev'
      }, {
        id: 3,
        title: 'UX/UI'
      }, {
        id: 4,
        title: 'Full Stuck'
      }, {
        id: 5,
        title: 'UX/UI'
      }, {
        id: 6,
        title: 'Back-End'
      }]
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
