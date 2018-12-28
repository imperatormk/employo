<template lang="pug">
  div
    Header
    v-container
      .flex-row.justify-center
        .flex-column.flex-1.justify-center
          div
            span.fs40 We help students find
            span.fs40.blue-color
              |  internships
          span Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
          br
          .flex-row
            v-text-field.br5(solo background-color="#f5f5f5")
        .flex-column.flex-1.justify-center
          .p60-left.text-right
            img.w60(:src="laptop")
      .p30
      .flex-row.justify-right
        .flex-column.flex-1.justify-center
          .w60
            .desc-label Create a profile
            span.p5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        .flex-column.flex-1.justify-center
          .p60-left.text-right
            img.w60(:src="profile")
      .p30
      .flex-row.justify-center
        .flex-column.flex-1.justify-center
          .w60
            .desc-label Browse through
            span.p5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        .flex-column.flex-1.justify-center
          .p60-left.text-right
            img.w60(:src="postings")
      .p30
    .flex-row(:style="getBannerStyle()")
      .flex-column.flex-1.justify-center
      .flex-column.flex-1.justify-center
        .p60-left.p100
          span.fs40 Sign up and file your next
          span.fs40.blue-color
            |  internship
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
