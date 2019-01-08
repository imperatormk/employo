<template lang="pug">
  .h100
    .flex.flex-column.space-between-p10.h100(v-if="selectedRole == 'student'")
      .flex.h100
        Account(v-if="curPage == 0" @success='allowContinue($event)')
        Education(v-else-if="curPage == 1" @success='allowContinue($event)')
        Work(v-else-if="curPage == 2" @success='allowContinue($event)')
        Experience(v-else-if="curPage == 3" @success='allowContinue($event)')
        Roles(v-else-if="curPage == 4" @success='allowContinue($event)')
        Industries(v-else-if="curPage == 5" @success='allowContinue($event)')
        Skills(v-else-if="curPage == 6" @success='allowContinue($event)')
        UploadTranscript(v-else-if="curPage == 7")
      .spacer
      .flex.align-end.p30
        .flex.align-center
          v-btn.btn.back(@click="goBack") Back
          .p40-side.w100
            v-progress-linear(v-model="progress")
          v-btn.btn(v-if="!isLastPage" @click="goNext" :disabled="!canContinue") Next
          v-dialog(v-else v-model="dialog" width="500")
            v-btn.btn(@click="submitData" slot="activator") Submit
            v-card.border-round.p50-top.p30-side
              v-card-text.fs20.demiBold Thank you for signing up! Make sure to check your email for updates
              v-divider
              v-card-actions
                v-spacer
                v-btn.fs20.demiBold(@click="dialog = false" flat) Done
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
      curPage: 0,
      canContinue: false,
      dialog: false
    }
  },
  methods: {
    allowContinue(e) {
      this.canContinue = e
    },
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
      if (this.pages[nextPage] && this.canContinue) {
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