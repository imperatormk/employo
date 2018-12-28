<template lang="pug">
  div
    Header(:navigationBtns="menu" :userName="fields.firstName")
    ProfileHead(:user="fields")
    .flex.space-around
      Education
      Skills
      Career
      Location
</template>

<script>
import Header from '@/components/Header'
import Education from '@/components/profile/Education'
import Skills from '@/components/profile/Skills'
import Career from '@/components/profile/Career'
import Location from '@/components/profile/Location'
import ProfileHead from '@/components/ProfileHead'

export default {
  data() {
    return {
      menu: ['Explore Jobs', 'Saved Jobs'],
      fields: {
        id: '0',
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@test.com',
        password: '123',
        city: 'Toronto, Canada'
      }
    }
  },
  components: {
    Header,
    Education,
    Skills,
    Career,
    Location,
    ProfileHead
  }
}
</script>

