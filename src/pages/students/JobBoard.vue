<template>
  <div>
    <Header :navigationBtns="menu" :userName="userName"></Header>
    <v-flex>
      <v-card style="width: 90%;" class="blue--text right-border-round">
        <v-card-title primary-title >
          <div>
            <div class="headline">From what you've told us...</div>
          </div>
        </v-card-title>
          <div style="display:flex; justify-content: center;text-align: center;">
            <div style="flex:1;">
              <p>Location</p>
              <v-chip disabled small>Example</v-chip>
            </div>
            <div style="flex:1;">
              <p>Job Type</p>
              <v-chip disabled small>Example</v-chip>
            </div>
            <div style="flex:1;">
              <p>Industry</p>
              <v-chip disabled small>Example</v-chip>
            </div>
            <div style="flex:1;">
              <p>Availability</p>
              <v-chip disabled small>Example</v-chip>
            </div>
          </div>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  data() {
    return {
      menu: ['Explore Jobs', 'Saved Jobs'],
      userName: 'John'
    }
  },
  components: {
    Header
  }
}
</script>
