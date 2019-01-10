<template lang="pug">
v-container(grid-list-xl)
  v-radio-group(v-model="fields.jobSearch").justify-center
    h1.label Almost done...
    .field-label.demiBold Where are you in your job search?
    v-layout(wrap, align-center).p50-bot
      v-flex(xs12, sm6, d-block)
        v-btn.border-round
            v-radio(label="Starting to Look" :value="0")
        .small-label.demiBold You're in the early stages of finding an internship.
      v-flex(xs12, sm6, d-block)
        v-btn.border-round
            v-radio(label="Actively Interviewing" :value="1")
        .small-label.demiBold You're actively seeking an internship and are ready to interview.
      v-flex(xs12, sm6, d-block)
        v-btn.border-round
            v-radio(label="Open to Offers" :value="2")
        .small-label.demiBold You're not looking but open to hear about relevant opportunities.
      v-flex(xs12, sm6, d-block)
        v-btn.border-round
            v-radio(label="Closed to Offers" :value="3")
        .small-label.demiBold You're not looking and don't want to hear about relevant opportunities.
    .field-label.demiBold What is your company size preference? (# of employees)
    .flex-wrap.p10.p-left-0.style-1(style="height:130px;overflow-y: scroll;")
      v-btn.demiBold(v-for="size in sizes" :key="size.id" :class="isLocationSelected(size.id, 'companySize')" @click="toggleLocationSelected(size.id, 'companySize')") {{ size.title }}
</template>

<script>
import pagesList from '@/components/registration/page_list'
import helpers from '@/helpers'

const PAGE_ID = pagesList.studentPagesList.almostDone

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList.studentPagesList[PAGE_ID])
  },
  data() {
    return {
      fields: {
        companySize: [],
        jobSearch: ''
      },
      sizes: [{
        id: 0,
        title: '1-10'
      }, {
        id: 1,
        title: '11-50'
      }, {
        id: 2,
        title: '51-200'
      }, {
        id: 3,
        title: '201-500'
      }, {
        id: 4,
        title: '501-1000'
      }, {
        id: 5,
        title: '1000+'
      }]
    }
  },
  methods: {
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
  }
}
</script>