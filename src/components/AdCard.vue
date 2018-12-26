<template>
<div v-if="jobInfo.visible">
  <v-card class="v-card-jobs border-round">
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
    <div style="text-align:center;padding-bottom:10px;">
      <v-btn @click="jobInfo.visible = !jobInfo.visible" dark round color="#448aff">Save</v-btn>
       <Dialog :id="jobInfo.id" :data="jobInfo">
        <v-btn slot="act" dark round color="#448aff">Apply</v-btn>
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

  },
  components: {
    Dialog
  }
}
</script>

