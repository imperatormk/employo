<template lang="pug">
  div
    Header(:navigationBtns="menu" :userName="userName")
    .flex
      Education
</template>

<script>
import Header from '@/components/Header'
import Education from '@/components/profile/Education'

export default {
  data() {
    return {
      menu: ['Explore Jobs', 'Saved Jobs'],
      userName: 'John',
    }
  },
  components: {
    Header,
    Education
  }
}
</script>

