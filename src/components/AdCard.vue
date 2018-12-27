<template>
<div v-if="jobInfo.visible" class="v-card-jobs">
  <v-card class=" border-round">
    <div style="display:flex;padding:10px;">
        <v-avatar
          color="grey lighten-4"
        >
          <img :src="image" alt="avatar">
        </v-avatar>
      <div style="padding-left:10px;">
        <h3>{{cardInfo.title}}</h3>
        <p>{{cardInfo.location}}</p>
      </div>
    </div>
    <div style="padding:10px;">
      <p>{{cardInfo.shortDescription}}</p>
    </div>
    <div style="text-align:center;padding-bottom:10px;display:flex;justify-content: space-evenly;">
      <div  v-if="jobInfo.saved">
        <v-btn @click="removeJob" dark round class="light-bck-blue">Remove</v-btn>
      </div>
      <div v-else>
        <v-btn @click="saveJob" dark round class="light-bck-blue">Save</v-btn>
      </div>
       <Dialog :id="jobInfo.id" :data="jobInfo">
        <v-btn slot="act" dark round class="light-bck-blue">Apply</v-btn>
      </Dialog>
    </div>

  </v-card>
 </div>
 <div v-else style="display:none;">
 </div>
</template>

<script>
import image from '@/assets/logo.png'
import Dialog from '@/components/Dialog'

export default {
  created() {
    this.jobInfo = this.cardInfo
  },
  props: {
    cardInfo: Object
  },
  data() {
    return {
      image,
      jobInfo: null,
    }
  },
  methods: {
    saveJob() {
      this.jobInfo.visible = !this.jobInfo.visible
    },
    removeJob() {
      this.jobInfo.visible = !this.jobInfo.visible
    }
  },
  components: {
    Dialog
  }
}
</script>

