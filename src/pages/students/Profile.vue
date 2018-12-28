<template lang="pug">
  div
    Header(:navigationBtns="menu" :userName="userName")
    .flex.space-around
      Education
      Skills
      Career
</template>

<script>
import Header from '@/components/Header'
import Education from '@/components/profile/Education'
import Skills from '@/components/profile/Skills'
import Career from '@/components/profile/Career'

export default {
  data() {
    return {
      menu: ['Explore Jobs', 'Saved Jobs'],
      userName: 'John',
    }
  },
  components: {
    Header,
    Education,
    Skills,
    Career
  }
}
</script>

