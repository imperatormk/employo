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
            TechnicalExperience(v-if="curPageId === pages.technical.experience")
            TechnicalSpecificRoles(v-else-if="curPageId === pages.technical.roles")
            TechnicalIndustries(v-else-if="curPageId === pages.technical.industries")
            TechnicalSkills(v-else-if="curPageId === pages.technical.skills")
            TechnicalJobSearchProgress(v-else-if="curPageId === pages.technical.jobSearchProgress")
            TechnicalUploadTranscript(v-else-if="curPageId === pages.technical.transcript")
          .flex.h100(v-else-if="selStudentRole == 'nontechnical'")
            NontechnicalExperience(v-if="curPageId === pages.nontechnical.experience")
            NontechnicalSpecificRoles(v-else-if="curPageId === pages.nontechnical.roles")
            NontechnicalIndustries(v-else-if="curPageId === pages.nontechnical.industries")
            NontechnicalSkills(v-else-if="curPageId === pages.nontechnical.skills")
            NontechnicalJobSearchProgress(v-else-if="curPageId === pages.nontechnical.jobSearchProgress")
            NontechnicalUploadTranscript(v-else-if="curPageId === pages.nontechnical.transcript")
      .flex.flex-column.space-between-p10.h100(v-else-if="selAccountType == 'employer'")
        .flex
          EmployerAccount(v-if="curPageId === pages.account")
      .spacer
      .flex.align-end.p30
        .flex.align-center
          v-btn.btn.back(@click="goBack" v-show="!isInitialPage") Back
          .p40-side.w100
            v-progress-linear(v-model="progress" v-show="!isInitialPage")
          v-btn.btn(@click="goNext") {{ !isLastPage ? 'Next' : 'Submit' }}
          v-dialog(v-model="dialog" width="500")
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
import pagesList, { studentPagesFields, employerPagesFields, setSourceData } from '@/components/registration/page_list'
import { AccountType, StudentAccount, Education, Work, Roles, TechnicalExperience, TechnicalIndustries, TechnicalSpecificRoles, TechnicalSkills, TechnicalJobSearchProgress, TechnicalUploadTranscript, NontechnicalExperience, NontechnicalIndustries, NontechnicalSpecificRoles, NontechnicalSkills, NontechnicalJobSearchProgress, NontechnicalUploadTranscript, EmployerAccount } from '@/components/registration'

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
          if (!cloneObj.subtype) {
            this.$store.dispatch('dataChange', cloneObj)
          } else {
            this.$store.dispatch('dataChange', cloneObj)
          }
        })
      } else if (accType === 'employer') {
        this.pages = pagesList.employerPagesList
        employerPagesFields.forEach((employerPage) => {
          const cloneObj = JSON.parse(JSON.stringify(employerPage)) // doing this deep clone just to be sure
          this.$store.dispatch('dataChange', cloneObj)
        })
      }
    },
    loadSourceData() {
      helpers.loadSourceData()
        .then((res) => {
          setSourceData('initial', res.initial)
          setSourceData('student', res.student)
          setSourceData('employer', res.employer)

          this.loaded = true
        })
    },
    goBack() {
      MessageBus.$emit('isHotChanged', false)
      const prevPage = this.curPage - 1
      const prevPageId = this.getPageIdByIndex(prevPage)

      if (this.selStudentRole && Object.values(this.pages[this.selStudentRole]).includes(prevPageId)) {
        this.curPage = prevPage
      } else if (Object.values(this.pages).includes(prevPageId)) {
        this.curPage = prevPage
      }
    },
    getErrors() {
      let errors = 0
      MessageBus.$emit('getErrorState', (hasError) => {
        if (hasError) {
          errors += 1
        }
      })
      return new Promise((resolve) => {
        setTimeout(() => resolve(errors), 20)
      })
    },
    goNext() {
      this.getErrors()
        .then((errors) => {
          if (errors) {
            MessageBus.$emit('isHotChanged', true)
          } else {
            MessageBus.$emit('isHotChanged', false)
            if (!this.isLastPage) {
              const nextPage = this.curPage + 1
              const nextPageId = this.getPageIdByIndex(nextPage)
              if (this.selStudentRole && Object.values(this.pages[this.selStudentRole]).includes(nextPageId)) {
                this.curPage = nextPage
              } else if (Object.values(this.pages).includes(nextPageId)) {
                this.curPage = nextPage
              }
            } else {
              this.submitData()
            }
          }
        })
    },
    isSpecific(pageId) {
      return pageId === 'technical' || pageId === 'nontechnical'
    },
    submitData() {
      const data = this.$store.getters.getAll
      let reqData = {}

      Object.keys(data)
        .forEach((pageId) => {
          let pageData = null
          const pageDataVal = {}

          if (!this.isSpecific(pageId)) {
            pageData = data[pageId]
          } else if (pageId === this.selStudentRole) {
            const pages = data[this.selStudentRole]
            pageData = {}
            pages.forEach((page) => {
              pageData = Object.assign({}, pageData, page.fields)
            })
          }

          Object.keys(pageData).forEach((key) => {
            const dataObj = pageData[key]
            pageDataVal[key] = dataObj.value
          })
          reqData = Object.assign({}, reqData, pageDataVal)
        })
      console.log(reqData)
      this.dialog = true
    },
    getPageIdByIndex(index) {
      const key = Object.keys(this.pages)[index]
      const isPage = typeof this.pages[key] === 'string'
      if (isPage) return this.pages[key]

      const allKeys = Object.keys(this.pages)
      let generalPagesCount = 0
      allKeys.forEach((allKey) => {
        if (typeof this.pages[allKey] === 'string') generalPagesCount += 1
      })
      const subIndex = index - generalPagesCount
      const subKey = Object.keys(this.pages[this.selStudentRole])[subIndex] // we are trusting that selStudentRole will be set here!
      return this.pages[this.selStudentRole][subKey]
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
      const generalPagesCount = Object.keys(this.pages).filter(page => !this.isSpecific(page)).length
      const specificPagesCount = 6 // we can try to find a better solution in the future

      return generalPagesCount + specificPagesCount
    }
  },
  components: {
    AccountType, StudentAccount, Education, Work, Roles, TechnicalExperience, TechnicalIndustries, TechnicalSpecificRoles, TechnicalSkills, TechnicalJobSearchProgress, TechnicalUploadTranscript, NontechnicalExperience, NontechnicalIndustries, NontechnicalSpecificRoles, NontechnicalSkills, NontechnicalJobSearchProgress, NontechnicalUploadTranscript, EmployerAccount
  }
}
</script>