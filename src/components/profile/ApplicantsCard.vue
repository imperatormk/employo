<template lang="pug">
  v-card.border-round.content-inherit.flex-basis-20
    v-expansion-panel.border-round
      v-expansion-panel-content.border-round
        div(slot="header")
          v-card-title.primary-title
            h2 {{user.firstName}} {{user.lastName}}
          .p20-left {{user.university}}
          .p20-left {{user.studyFields}} , {{user.class}}
          .p20-left.p20-btm
            a.p20-right Resume
            a.p20 Transcript
            a.p20 Linkedin
            a.p20 Github
            a.p20-left Personal
        v-card.border-round
          v-card-text.border-round
            .p20-left.flex
              a.p5 Skills:
              p.p5(v-for="skill in user.skills") {{skill.title}}
            .p20-left.flex
              a.p5 Years of Experience:
              p.p5 {{user.experience}} years
            .p20-left.flex
              a.p5 Interests:
              p.p5(v-for="interest in user.interests") {{interest.title}}
            .p20-left.flex
              a.p5 Available for:
              p.p5 {{user.avaliable}}
</template>

<script>
export default {
  props: {
    userInfo: Object
  },
  created() {
    this.user = this.userInfo
  },
  data() {
    return {
      user: null
    }
  },
}
</script>

