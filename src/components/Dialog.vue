<template>
  <v-dialog
    content-class="dialog-round"
    v-model="dialog"
    width="500"
  >
    <div slot="activator">
      <slot name="act"></slot>
    </div>
    <v-card class="dialog-round style-1 of-scroll" style="max-height:300px;">
      <v-btn
            color="primary"
            flat
            @click="dialog = false"
          ></v-btn>
    <div style="display:flex;padding:10px;">
        <v-avatar
          size="100"
          color="grey lighten-4"
        >
          <img :src="image" alt="avatar">
        </v-avatar>
      <div style="padding-left:10px;">
        <h1>{{dataDialog.title}}</h1>
        <h2>{{dataDialog.location}}</h2>
        <h2>{{dataDialog.shortDescription}}</h2>
      </div>
    </div>
    <div style="padding:0 20px;">
      <h4>Description</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div style="padding:0 20px;">
      <h4>Salary</h4>
      <p>23</p>
    </div>
    <div style="padding:0 20px;">
      <h4>Scills requered</h4>
      <p>Lorem ipsum dolor sit amet</p>
      <p>consectetur adipiscing elit</p>
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