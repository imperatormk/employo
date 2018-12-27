<template>
  <div>
    <Header :navigationBtns="menu" :userName="userName"></Header>
    <v-flex style="margin-bottom:20px;width:100%;">
      <v-card style="width: 90%;" class="blue--text right-border-round">
        <v-card-title primary-title >
          <div>
            <div class="headline light-text-blue">From what you've told us...</div>
          </div>
        </v-card-title>
          <div class="chips-container" style="display:flex; justify-content: center;text-align: center;">
            <div style="flex:1;">
              <p class="f1-2m">Location</p>
              <v-chip disabled small class="dark-bck-blue f1-2m" text-color="white">Example</v-chip>
              <v-btn icon dark small class="dark-bck-blue f1-2m"><i class="material-icons">add</i></v-btn>
            </div>
            <div style="flex:1;">
              <p class="f1-2m">Job Type</p>
              <v-chip disabled small class="dark-bck-blue f1-2m" text-color="white">Example</v-chip>
              <v-btn icon dark small class="dark-bck-blue f1-2m"><i class="material-icons">add</i></v-btn>
            </div>
            <div style="flex:1;">
              <p class="f1-2m">Industry</p>
              <v-chip disabled small class="dark-bck-blue f1-2m" text-color="white">Example</v-chip>
              <v-btn icon dark small class="dark-bck-blue f1-2m"><i class="material-icons">add</i></v-btn>
            </div>
            <div style="flex:1;">
              <p class="f1-2m">Availability</p>
              <v-chip disabled small class="dark-bck-blue f1-2m" text-color="white">Example</v-chip>
              <v-btn icon dark small class="dark-bck-blue f1-2m"><i class="material-icons">add</i></v-btn>
            </div>
          </div>
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
      },
      {
        id: 2,
        img: null,
        title: 'IBM',
        location: 'Ottawa, ON',
        shortDescription: 'UX/UI Designer Internship',
        description: 'Lorem Ipsum Suma cum lade',
        visible: true
      },
      {
        id: 3,
        img: null,
        title: 'IBM',
        location: 'Ottawa, ON',
        shortDescription: 'UX/UI Designer Internship',
        description: 'Lorem Ipsum Suma cum lade',
        visible: true
      },
      {
        id: 4,
        img: null,
        title: 'IBM',
        location: 'Ottawa, ON',
        shortDescription: 'UX/UI Designer Internship',
        description: 'Lorem Ipsum Suma cum lade',
        visible: true
      },
      {
        id: 5,
        img: null,
        title: 'IBM',
        location: 'Ottawa, ON',
        shortDescription: 'UX/UI Designer Internship',
        description: 'Lorem Ipsum Suma cum lade',
        visible: true
      },
      {
        id: 6,
        img: null,
        title: 'IBM',
        location: 'Ottawa, ON',
        shortDescription: 'UX/UI Designer Internship',
        description: 'Lorem Ipsum Suma cum lade',
        visible: true
      }]
    }
  },
  components: {
    Header,
    AdCard
  }
}
</script>
