<template>
  <div>
    <Header :navigationBtns="menu" :userName="userName"></Header>
    <v-flex class="v-card-holder" style="padding:10px;max-widt:100%;">
    <PostCard v-for="(job, index) in jobsInfo" :key="index" :cardInfo="job"></PostCard>
    <div class="v-card-jobs" >
  <v-card class="border-round">
    <div style="display:flex;padding:10px;justify-content: space-around;">
      <div style="display:block;text-align:center;padding-bottom:10px;">
         <img :src="image" alt="avatar">
         <h3>Post a New Job </h3>
      </div>
    </div>
  </v-card>
   <div style="text-align:center;padding-bottom:10px;">
    </div>
 </div>
    </v-flex>
  </div>
</template>

<script>
import Header from '@/components/Header'
import PostCard from '@/components/PostCard'
import image from '@/assets/baseline_add_black_36dp.png'

export default {
  data() {
    return {
      image,
      menu: ['My Postings', 'Applicant', 'Post a Job'],
      userName: 'John',
      jobsInfo: [{
        id: 1,
        img: null,
        title: 'IBM',
        location: 'Ottawa, ON',
        shortDescription: 'UX/UI Designer Internship',
        description: 'Lorem Ipsum Suma cum lade',
        visible: true,
        saved: true
      },
      {
        id: 2,
        img: null,
        title: 'IBM',
        location: 'Ottawa, ON',
        shortDescription: 'UX/UI Designer Internship',
        description: 'Lorem Ipsum Suma cum lade',
        visible: true,
        saved: true
      },
      {
        id: 3,
        img: null,
        title: 'IBM',
        location: 'Ottawa, ON',
        shortDescription: 'UX/UI Designer Internship',
        description: 'Lorem Ipsum Suma cum lade',
        visible: true,
        saved: true
      },
      {
        id: 4,
        img: null,
        title: 'IBM',
        location: 'Ottawa, ON',
        shortDescription: 'UX/UI Designer Internship',
        description: 'Lorem Ipsum Suma cum lade',
        visible: true,
        saved: true
      }]
    }
  },
  components: {
    Header,
    PostCard
  }
}
</script>
