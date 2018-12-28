<template lang="pug">
  div
    Header(:navigationBtns="menu" :userName="fields.firstName")
    ProfileHead(:user="fields" :role="student")
    .flex.space-around.flex-wrap
      AccountInfo
      CompanyInfo
</template>

<script>
import Header from '@/components/Header'
import ProfileHead from '@/components/ProfileHead'
import AccountInfo from '@/components/profile/AccountInfo'
import CompanyInfo from '@/components/profile/CompanyInfo'

export default {
  data() {
    return {
      menu: ['My Postings', 'Applicants', 'Post a Job'],
      student: false,
      fields: {
        id: '0',
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@test.com',
        password: '123',
        city: 'Toronto, ON'
      }
    }
  },
  components: {
    Header,
    ProfileHead,
    AccountInfo,
    CompanyInfo
  }
}
</script>

