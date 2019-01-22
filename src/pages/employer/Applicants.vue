<template lang="pug">
  div
    Header(:userName="userName")
    .p100-top.p50-side.flex
      .flex-1.right-borders.p5
        .flex-row(v-for="category in categories").p10
          v-card.border-round.content-inherit.flex-1
            v-card-title.primary-title
              h3 {{category}}
      .flex-5.p10
        div(v-for="applicant in applicants").p10
          ApplicantsCard(:userInfo="applicant" :key="applicant.id")
</template>
<script>
import Header from '@/components/Header'
import ApplicantsCard from '@/components/profile/ApplicantsCard'

export default {
  data() {
    return {
      userName: 'John',
      categories: ['Software Developer Internship', 'UX/UI Ddesigner Internship'],
      applicants: [{
        id: 0,
        firstName: 'John',
        lastName: 'Doe',
        university: 'University of Toronto',
        studyFields: 'Computer Science',
        class: 'Class of 2021',
        experience: 1.5,
        skills: [{
          id: 0,
          title: 'python'
        }, {
          id: 1,
          title: 'c#'
        }],
        interests: [{
          id: 0,
          title: 'interest1'
        }, {
          id: 1,
          title: 'interest2'
        }],
        resume: 'test',
        avaliable: 'summer',
        socialMedia: [{
          linkedIn: 'www.linkedin.com',
          gitHub: 'wwww.github.com'
        }]
      },
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        university: 'University of Toronto',
        studyFields: 'Computer Science',
        class: 'Class of 2021',
        experience: 2,
        skills: [{
          id: 0,
          title: 'python'
        }, {
          id: 1,
          title: 'c#'
        }],
        interests: [{
          id: 0,
          title: 'interest1'
        }, {
          id: 1,
          title: 'interest2'
        }],
        resume: 'test',
        avaliable: 'summer',
        socialMedia: [{
          linkedIn: 'www.linkedin.com',
          gitHub: 'wwww.github.com'
        }]
      },
      {
        id: 2,
        firstName: 'John',
        lastName: 'Doe',
        university: 'University of Toronto',
        studyFields: 'Computer Science',
        class: 'Class of 2021',
        experience: 1,
        skills: [{
          id: 0,
          title: 'python'
        }, {
          id: 1,
          title: 'c#'
        }],
        interests: [{
          id: 0,
          title: 'interest1'
        }, {
          id: 1,
          title: 'interest2'
        }],
        avaliable: 'summer',
        resume: 'test',
        socialMedia: [{
          linkedIn: 'www.linkedin.com',
          gitHub: 'wwww.github.com'
        }]
      }]
    }
  },
  components: {
    Header,
    ApplicantsCard
  }
}
</script>