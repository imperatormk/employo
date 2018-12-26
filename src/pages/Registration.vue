<template lang="pug">
  .flex.flex-column.space-between-p10
    .flex
      Education(v-if="curPageTemp == 0")
      Experience(v-if="curPageTemp == 1")
      Industries(v-if="curPageTemp == 2")
      Roles(v-if="curPageTemp == 3")
      Skills(v-if="curPageTemp == 4")
    .spacer
    .flex.align-end.p30
      .flex.align-center
        v-btn.btn(@click="goBack") Back
        .p40-side.w100
          v-progress-linear(v-model="progress")
        v-btn.btn(v-if="!isLastPage" @click="goNext") Next
        v-btn.btn(v-else @click="submitData") Submit
</template>

<script>
import pagesList from '@/pages'
import { Education, Experience, Industries, Roles, Skills } from '@/components/registration'

export default {
  created() {
    this.pages = pagesList
    this.initStore()
  },
  data() {
    return {
      pages: [],
      curPageTemp: 0 // fix this
    }
  },
  methods: {
    initStore() {
      this.$store.dispatch('dataChange', {
        pageId: pagesList[0],
        fields: {
          selUniversity: null,
          selField: null,
          selYear: null,
          selGpa: null,
          officialCoop: null,
          availability: null
        }
      })
      this.$store.dispatch('dataChange', {
        pageId: pagesList[1],
        fields: {
          selectedAreas: [],
          numYears: 1
        }
      })
      this.$store.dispatch('dataChange', {
        pageId: pagesList[2],
        fields: {
          selectedRoles: []
        }
      })
      this.$store.dispatch('dataChange', {
        pageId: pagesList[3],
        fields: {
          selectedIndustries: []
        }
      })
      this.$store.dispatch('dataChange', {
        pageId: pagesList[4],
        fields: {
          selectedSkills: []
        }
      })
    },
    goBack() {
      const prevPage = this.curPageTemp - 1
      if (this.pages[prevPage]) {
        this.curPageTemp = prevPage
      }
    },
    goNext() {
      const nextPage = this.curPageTemp + 1
      if (this.pages[nextPage]) {
        this.curPageTemp = nextPage
      }
    },
    submitData() {
      const data = this.$store.getters.getAll
      let reqData = {}

      Object.keys(data)
        .forEach((pageId) => {
          reqData = Object.assign({}, reqData, data[pageId])
        })

      console.log(reqData)
    }
  },
  computed: {
    progress() {
      return this.curPageTemp * (100 / (this.pages.length - 1))
    },
    isLastPage() {
      return this.curPageTemp === this.pages.length - 1
    },
    curPage() {
      return this.$store.getters.curPage
    }
  },
  components: {
    Education, Experience, Industries, Roles, Skills
  }
}
</script>

<style lang="scss">
  .spacer {
    flex-grow: 1;
  }
</style>