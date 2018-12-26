<template>
  <div>
    <Header :navigationBtns="menu" :userName="userName"></Header>
    <v-flex style="margin-bottom:20px;width:100%;">
      <v-card style="width: 20%;" class="blue--text right-border-round">
        <v-card-title primary-title >
          <div>
            <div class="headline">Saved Jobs</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex class="v-card-holder" style="padding:10px;max-widt:100%;">
    <AdCard v-for="(job, index) in jobsInfo" :key="index" :cardInfo="job"></AdCard>
    </v-flex>
  </div>
</template>

<script>
import Header from '@/components/Header'
import AdCard from '@/components/AdCard'

export default {
  data() {
    return {
      menu: ['Explore Jobs', 'Saved Jobs'],
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
    AdCard
  }
}
</script>
