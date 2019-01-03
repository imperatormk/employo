<template lang="pug">
  div
    Header
    .p100-top.p50-side
      .flex-row.justify-end
        .flex-column.flex-3.justify-center
          div.blue-color.lh120.fw8
            span.fs108 We help students get
            span.fs108
              |  internships
          span.light-black.fs32.lh40.fw9.p5-top We match Canada’s top students with internship opportunities at our partner companies according to their career interests and qualifications.
          br
          .flex-row.p6-top
            v-text-field.br5.fs20(solo background-color="#f5f5f5" label="Your email addres")
        .flex-column.flex-2.justify-end
          .p60-left.text-right
            img.w100(:src="laptop")
      .p300-top
      .flex-row.justify-right
        .flex-column.flex-3.justify-center
          .w60
            .desc-label.fs50.fw9 Create a profile
            span.p5.fs40.light-p Sign up in just a few minutes. Tell us about your career interests, educational background, skills, and the type of role you’re looking for.
        .flex-column.flex-2.justify-center
          .p60-left.text-right
            img.w100(:src="profile")
      .p300-top
      .flex-row.justify-center
        .flex-column.flex-3.justify-center
          .w60
            .desc-label.fs50.fw9 Browse through relevant internship opportunities
            span.p5.fs40.light-p We’ll send you a CURATED list of internship opportunities at our partner companies that match your career interests and qualifications.
        .flex-column.flex-2.justify-center
          .p60-left.text-right
            img.w100(:src="postings")
      .p30
    .flex-row(:style="getBannerStyle()")
      .flex-column.flex-2.justify-center
      .flex-column.flex-3.justify-center
        .p60-left.p100
          span.fs108.lh120.fw8.blue-color Sign up and find your next
          div.p30-top.fs40.light-p
            |  Sign up now to be considered to join our pilot for summer internship recruiting.
    v-container
      .flex-column.align-center
        .desc-label.fs50.fw9 Frequently asked questions
        span.text-muted.fs30 There is no such thing as a dumb question
        br
        v-btn-toggle.btn-toggle.of-hidden(v-model="faq")
          v-btn(active-class="v-btn--active blue-color" flat fab value="students") Students
          v-btn(active-class="v-btn--active blue-color" flat fab value="employees") Employees
        br
        .flex-row.justify-center.w100
          .flex-column.flex-1
            span.desc-label.fs50.fw9 Students
            v-expansion-panel
              v-expansion-panel-content.fs26
                div(slot="header") Who can use this platform?
                v-card
                  v-card-text
                    span Answer here
              v-expansion-panel-content.fs26
                div(slot="header") Who can use this platform?
                v-card
                  v-card-text
                    span Answer here
            span.desc-label.fs50.fw9 Registration
            v-expansion-panel.fs26
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
            span.desc-label.fs50.fw9 How It Works
            v-expansion-panel.fs26
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

import laptop from '@/assets/landing/laptop.png'
import profile from '@/assets/landing/profile.png'
import postings from '@/assets/landing/postings.png'
import banner from '@/assets/landing/banner.png'

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
        'background-size': '100% 100%'
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
