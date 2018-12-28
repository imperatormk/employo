<template lang="pug">
  v-dialog(v-model="dialog", width="500")
    div(slot="activator")
      slot(name="act")
    v-card.dialog-round

</template>

<script>

import image from '@/assets/logo.png'

export default {
  props: {
    id: Number,
    degree: Array,
    coOp: Array,
    universities: Array,
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