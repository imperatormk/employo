<template>
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
      <v-btn dark round color="#448aff">Save</v-btn>
      <v-btn dark round color="#448aff">Apply</v-btn>
    </div>

  </v-card>
</template>

<script>
import image from '@/assets/logo.png'

export default {
  props: {
    cardInfo: Object
  },
  data() {
    return {
      image
    }
  }
}
</script>

