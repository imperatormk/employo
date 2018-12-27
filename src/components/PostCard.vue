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
      <div class="flex flex-row space-around">
        <v-btn @click="jobInfo.visible = !jobInfo.visible" light round color="transparent">Edit Job</v-btn>
        <v-btn @click="jobInfo.visible = !jobInfo.visible" light round color="transparent">Repost Job</v-btn>
      </div>
       <Dialog :id="jobInfo.id" :data="jobInfo">
        <v-btn slot="act" dark round color="#efb1b1">Delete Job</v-btn>
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

