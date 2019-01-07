<template lang="pug">
  .h100
    .flex.flex-column.space-between-p10.h100(v-if="selectedRole == 'student'")
      .flex
        Account(v-if="curPage == 0")
        Education(v-else-if="curPage == 1")
        Work(v-else-if="curPage == 2")
        Experience(v-else-if="curPage == 3")
        Roles(v-else-if="curPage == 4")
        Industries(v-else-if="curPage == 5")
        Skills(v-else-if="curPage == 6")
        UploadTranscript(v-else-if="curPage == 7")
      .spacer
      .flex.align-end.p30
        .flex.align-center
          v-btn.btn.back(@click="goBack") Back
          .p40-side.w100
            v-progress-linear(v-model="progress")
          v-btn.btn(v-if="!isLastPage" @click="goNext") Next
          v-btn.btn(v-else @click="submitData") Submit
    .flex.flex-column.space-between-p10.h100(v-else-if="selectedRole == 'employee'")
      .flex
        span Employee
    ChooseRole(v-else @roleSelected="selectedRole = $event")
</template>

<script>
import pagesList from '@/components/registration/page_list'
import { ChooseRole, Account, Education, Work, Experience, Industries, Roles, Skills, UploadTranscript } from '@/components/registration'

export default {
  created() {
    this.pages = pagesList
    this.initStore()
  },
  data() {
    return {
      selectedRole: null,
      pages: [],
      curPage: 0
    }
  },
  methods: {
    initStore() {
      this.$store.dispatch('dataChange', { // account info
        pageId: pagesList[0],
        fields: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          city: ''
        }
      })
      this.$store.dispatch('dataChange', { // education
        pageId: pagesList[1],
        fields: {
          selUniversity: null,
          selField: null,
          selYear: null,
          selGpa: null,
          degree: null,
        }
      })
      this.$store.dispatch('dataChange', { // work
        pageId: pagesList[2],
        fields: {
          officialCoop: null,
          availability: [],
          termLength: [],
          locationPref: [],
        }
      })
      this.$store.dispatch('dataChange', { // experience
        pageId: pagesList[3],
        fields: {
          selectedAreas: [],
          numYears: 1
        }
      })
      this.$store.dispatch('dataChange', { // roles
        pageId: pagesList[4],
        fields: {
          selectedRoles: []
        }
      })
      this.$store.dispatch('dataChange', { // industries
        pageId: pagesList[5],
        fields: {
          selectedIndustries: []
        }
      })
      this.$store.dispatch('dataChange', { // skills
        pageId: pagesList[6],
        fields: {
          selectedSkills: []
        }
      })
    },
    goBack() {
      const prevPage = this.curPage - 1
      if (this.pages[prevPage]) {
        this.curPage = prevPage
      }
    },
    goNext() {
      const nextPage = this.curPage + 1
      if (this.pages[nextPage]) {
        this.curPage = nextPage
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
      return this.curPage * (100 / (this.pages.length - 1))
    },
    isLastPage() {
      return this.curPage === this.pages.length - 1
    }
  },
  components: {
    ChooseRole, Account, Education, Work, Experience, Industries, Roles, Skills, UploadTranscript
  }
}
</script>

<style lang="scss">
  .spacer {
    flex-grow: 1;
  }
</style>