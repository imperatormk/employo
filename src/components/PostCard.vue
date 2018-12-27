<template>
<div class="v-card-jobs">
  <v-card class="border-round" style="margin-bottom:30px;">
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
  </v-card>
   <div style="text-align:center;padding-bottom:10px;">
      <div >
        <v-btn @click="jobInfo.visible = !jobInfo.visible" dark round color="#448aff">Remove</v-btn>
        <v-btn @click="jobInfo.visible = !jobInfo.visible" dark round color="#448aff">Save</v-btn>
      </div>
       <Dialog :id="jobInfo.id" :data="jobInfo">
        <v-btn slot="act" dark round color="#448aff">Apply</v-btn>
      </Dialog>
    </div>
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

  },
  components: {
    Dialog
  }
}
</script>

