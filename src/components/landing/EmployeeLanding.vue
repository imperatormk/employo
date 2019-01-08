<template lang="pug">
  div
    Header
    v-container
      .flex-row.justify-center
        .flex-column.flex-1.justify-center
          div
            span.fs65.fw9 Find your next
            span.fs65.blue-color.fw9
              |  intern
          span.fs20 Employo helps recruit Canadian students with the qualifications you're looking for
          br
          .flex-row
            v-text-field.br5(solo background-color="#f5f5f5" label="Your email address")
        .flex-column.flex-1.justify-center
          .p60-left.text-right
            img.w90(:src="laptop")
      .p100
      .flex-row.justify-center
        .flex-column.flex-1.justify-center
          .w60
            .desc-label
              span.fs30.fw8 How Employo works
            span.fs20 Upon putting a post on Employo, a job candidate will see your posting if they meet your job's criteria.
        .flex-column.flex-1.justify-center
          .p60-left.text-right
            img.w80(:src="postings")
      .p50
      .flex-row.justify-right
        .flex-column.flex-1.justify-center
          .w60
            .desc-label
              span.fs30.fw8 Browse applicants
            span.p5.fs20 Easily look through applicants that already meet your job's criteria
        .flex-column.flex-1.justify-center
          .p60-left.text-right
            img.w80(:src="profile")
      .p30
    .flex-row(:style="getBannerStyle()")
      .flex-column.flex-1.justify-center
      .flex-column.flex-1.justify-center
        .p60-left.p100
          span.fs65.fw9 Get started and find next
          span.fs65.blue-color.fw9
            |  intern
    v-container
      .flex-column.align-center
        .desc-label Frequently asked questions
        span.text-muted There is no such thing as a dumb question
        br
        v-btn-toggle.btn-toggle.of-hidden(v-model="faq")
          v-btn(active-class="v-btn--active blue-color" flat fab value="students") Students
          v-btn(active-class="v-btn--active blue-color" flat fab value="employees") Employees
        br
        .flex-row.justify-center.w100
          .flex-column.flex-1
            span.desc-label Students
            v-expansion-panel
              v-expansion-panel-content
                div(slot="header") Who can use this platform?
                v-card
                  v-card-text
                    span Answer here
              v-expansion-panel-content
                div(slot="header") Who can use this platform?
                v-card
                  v-card-text
                    span Answer here
            span.desc-label Registration
            v-expansion-panel
              v-expansion-panel-content
                div(slot="header") Who can use this platform?
                v-card
                  v-card-text
                    span Answer here
              v-expansion-panel-content
                div(slot="header") Who can use this platform?
                v-card
                  v-card-text
                    span Answer here
          .p20
          .flex-column.flex-1
            span.desc-label How It Works
            v-expansion-panel
              v-expansion-panel-content
                div(slot="header") Who can use this platform?
                v-card
                  v-card-text
                    span Answer here
              v-expansion-panel-content
                div(slot="header") Who can use this platform?
                v-card
                  v-card-text
                    span Answer here
</template>

<script>
import Header from '@/components/Header'

import laptop from '@/assets/landing/employe/Laptop.png'
import profile from '@/assets/landing/employe/CandidateProfile.png'
import postings from '@/assets/landing/employe/JobInput.png'
import banner from '@/assets/landing/employe/Banner.png'

export default {
  data() {
    return {
      laptop,
      profile,
      postings,
      banner,
      faq: 'students'
    }
  },
  methods: {
    getBannerStyle() {
      return {
        'background-image': `url(${banner})`,
        'background-size': 'cover',
        'background-position': 'center',
        height: '500px'
      }
    }
  },
  components: {
    Header
  }
}
</script>

<style>
  .btn-toggle {
    border: 1px solid gray;
    border-radius: 20px;
  }
</style>
