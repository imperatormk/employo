<template lang="pug">
  .h100
    .flex.flex-column.space-between-p10.h100(v-if="selectedRole == 'student'")
      .flex.h100
        Account(v-if="curPageId === pagesList.account" @success='allowContinue($event)')
        Education(v-else-if="curPageId === pagesList.education" @success='allowContinue($event)')
        Work(v-else-if="curPageId === pagesList.work" @success='allowContinue($event)')
        Experience(v-else-if="curPageId === pagesList.experience" @success='allowContinue($event)')
        Roles(v-else-if="curPageId === pagesList.roles" @success='allowContinue($event)')
        Industries(v-else-if="curPageId === pagesList.industries" @success='allowContinue($event)')
        Skills(v-else-if="curPageId === pagesList.skills" @success='allowContinue($event)')
        UploadTranscript(v-else-if="curPageId === pagesList.transcript")
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
    AccountType(v-else @roleSelected="selectedRole = $event")
</template>

<script>
import pagesList, { studentPages } from '@/components/registration/page_list'

import { AccountType, Account, Education, Work, Experience, Industries, Roles, Skills, UploadTranscript } from '@/components/registration'

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
      studentPages.forEach((studentPage) => {
        this.$store.dispatch('dataChange', studentPage)
      })
    },
    goBack() {
      const prevPage = this.curPage - 1
      const prevPageId = this.getPageIdByIndex(prevPage)
      if (this.pages[prevPageId]) {
        this.curPage = prevPage
      }
    },
    goNext() {
      const nextPage = this.curPage + 1
      const nextPageId = this.getPageIdByIndex(nextPage)
      if (this.pages[nextPageId] && this.canContinue) {
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
    },
    getPageIdByIndex(index) {
      const key = Object.keys(this.pages)[index]
      return this.pages[key]
    }
  },
  computed: {
    progress() {
      return this.curPage * (100 / (this.pages.length - 1))
    },
    isLastPage() {
      return this.curPage === this.pages.length - 1
    },
    curPageId() {
      return this.getPageIdByIndex(this.curPage)
    },
    pagesList() {
      return pagesList
    }
  },
  components: {
    AccountType, Account, Education, Work, Experience, Industries, Roles, Skills, UploadTranscript
  }
}
</script>

<style lang="scss">
  .spacer {
    flex-grow: 1;
  }
</style>