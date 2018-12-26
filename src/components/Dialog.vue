<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <div slot="activator">
      <slot name="act"></slot>
    </div>
    <v-card class="border-round">
      <v-btn
            color="primary"
            flat
            @click="dialog = false"
          ></v-btn>
    <div style="display:flex;padding:10px;">
        <v-avatar
          color="grey lighten-4"
        >
          <img :src="image" alt="avatar">
        </v-avatar>
      <div style="padding-left:10px;">
        <h3>{{dataDialog.title}}</h3>
        <p>{{dataDialog.location}}</p>
      </div>
    </div>
    <div style="padding:10px;">
      <p>{{dataDialog.shortDescription}}</p>
    </div>
  </v-card>
  </v-dialog>
</template>

<script>
import image from '@/assets/logo.png'

export default {
  props: {
    id: Number,
    data: Object
  },
  created() {
    this.dataDialog = this.data
  },
  data() {
    return {
      dialog: false,
      image,
      dataDialog: null
    }
  }
}

</script>