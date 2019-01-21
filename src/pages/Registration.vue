<template lang="pug">
  .flex.flex-column.space-between.p10.h100
    .flex.flex-column.space-between.p10.h100(v-if="loaded")
      AccountType(v-if="curPageId === pages.acctype" @roleSelected="selAccountType = $event" :currentType="selAccountType")
      .flex.flex-column.space-between-p10.h100(v-else-if="selAccountType == 'student'")
        .flex.h100
          StudentAccount(v-if="curPageId === pages.account")
          Education(v-else-if="curPageId === pages.education")
          Work(v-else-if="curPageId === pages.work")
          Roles(v-else-if="curPageId === pages.roles" @roleChanged="selStudentRole = $event")
          .flex.h100(v-else-if="selStudentRole == 'technical'")
            Experience(v-if="curPageId === pages.experience")
            TechnicalRoles(v-else-if="curPageId === pages.technicalRoles")
            Industries(v-else-if="curPageId === pages.industries")
            Skills(v-else-if="curPageId === pages.skills")
            JobSearchProgress(v-else-if="curPageId === pages.jobSearchProgress")
            UploadTranscript(v-else-if="curPageId === pages.transcript")
          .flex.h100(v-else-if="selStudentRole == 'nontechnical'")
            Experience(v-if="curPageId === pages.experience")
            TechnicalRoles(v-else-if="curPageId === pages.technicalRoles")
            Industries(v-else-if="curPageId === pages.industries")
            Skills(v-else-if="curPageId === pages.skills")
            JobSearchProgress(v-else-if="curPageId === pages.jobSearchProgress")
            UploadTranscript(v-else-if="curPageId === pages.transcript")
      .flex.flex-column.space-between-p10.h100(v-else-if="selAccountType == 'employeer'")
        .flex
          EmployeerAccount(v-if="curPageId === pages.account")
      .spacer
      .flex.align-end.p30
        .flex.justify-end(v-if="curPageId === pages.acctype")
          v-btn.btn(v-if="!isLastPage" @click="goNext") Next
        .flex.align-center(v-else)
          v-btn.btn.back(@click="goBack") Back
          .p40-side.w100
            v-progress-linear(v-model="progress")
          v-btn.btn(v-if="!isLastPage" @click="goNext") Next
          v-dialog(v-else v-model="dialog" width="500")
            v-btn.btn(@click="submitData" slot="activator") Submit
            v-card.border-round.p50-top.p30-side
              v-card-text.fs20.demiBold Thank you for signing up! Make sure to check your email for updates
              v-divider
              v-card-actions
                v-spacer
                v-btn.fs20.demiBold(@click="dialog = false" flat) Done
    .flex.flex-column.justify-center.align-center.p10.h100(v-else)
      v-progress-circular(indeterminate color="#477EE6" size="100" width="10")
</template>

<script>
import helpers from '@/helpers'
import MessageBus from '@/services/messageBus'
import pagesList, { studentPagesFields, employeerPagesFields, setSourceData } from '@/components/registration/page_list'
import { AccountType, StudentAccount, Education, Work, Experience, Industries, Roles, Skills, TechnicalRoles, JobSearchProgress, UploadTranscript, EmployeerAccount } from '@/components/registration'

export default {
  created() {
    this.pages = pagesList.initialPagesList
    this.loadSourceData()
  },
  watch: {
    selAccountType: function f(val) {
      this.initStore(val)
    }
  },
  data() {
    return {
      selAccountType: null,
      selStudentRole: null,
      curPage: 0,
      dialog: false,
      pages: {},
      loaded: false
    }
  },
  methods: {
    initStore(accType) {
      this.$store.dispatch('clearAllData')
      if (accType === 'student') {
        this.pages = pagesList.studentPagesList
        studentPagesFields.forEach((studentPage) => {
          const cloneObj = JSON.parse(JSON.stringify(studentPage)) // doing this deep clone just to be sure
          this.$store.dispatch('dataChange', cloneObj)
        })
      } else if (accType === 'employeer') {
        this.pages = pagesList.employeerPagesList
        employeerPagesFields.forEach((employeerPage) => {
          const cloneObj = JSON.parse(JSON.stringify(employeerPage)) // doing this deep clone just to be sure
          this.$store.dispatch('dataChange', cloneObj)
        })
      }
    },
    loadSourceData() {
      helpers.loadSourceData()
        .then((res) => {
          setSourceData('initial', res.initial)
          setSourceData('student', res.student)
          setSourceData('employee', res.employee)

          this.loaded = true
        })
    },
    goBack() {
      MessageBus.$emit('isHotChanged', false)
      const prevPage = this.curPage - 1
      const prevPageId = this.getPageIdByIndex(prevPage)
      if (this.pages[prevPageId]) {
        this.curPage = prevPage
      }
    },
    goNext() {
      let errors = 0
      MessageBus.$emit('getErrorState', (hasError) => {
        if (hasError) {
          errors += 1
        }
      })

      setTimeout(() => {
        if (errors) {
          MessageBus.$emit('isHotChanged', true)
        } else {
          MessageBus.$emit('isHotChanged', false)
          const nextPage = this.curPage + 1
          const nextPageId = this.getPageIdByIndex(nextPage)
          if (this.pages[nextPageId]) {
            this.curPage = nextPage
          }
        }
      }, 20)
    },
    submitData() {
      const data = this.$store.getters.getAll
      let reqData = {}

      Object.keys(data)
        .forEach((pageId) => {
          const pageData = data[pageId]
          const pageDataVal = {}
          Object.keys(pageData).forEach((key) => {
            const dataObj = pageData[key]
            pageDataVal[key] = dataObj.value
          })
          reqData = Object.assign({}, reqData, pageDataVal)
        })

      console.log(reqData)
    },
    getPageIdByIndex(index) {
      const key = Object.keys(this.pages)[index]
      return this.pages[key]
    }
  },
  computed: {
    isInitialPage() {
      return this.curPageId === this.pages.acctype
    },
    progress() {
      return !this.isInitialPage ? this.curPage * (100 / (this.pagesCount - 1)) : 0 // review
    },
    isLastPage() {
      const lastPage = this.curPage === this.pagesCount - 1
      return lastPage && !this.isInitialPage // review
    },
    curPageId() {
      return this.getPageIdByIndex(this.curPage)
    },
    pagesCount() {
      return Object.keys(this.pages).length
    }
  },
  components: {
    AccountType, StudentAccount, Education, Work, Experience, Industries, TechnicalRoles, Roles, Skills, JobSearchProgress, UploadTranscript, EmployeerAccount
  }
}
</script>