<template lang="pug">
  .flex-col
    .flex-row.justify-center
      v-img.overlay.br50(:src="logo" width="150px")
    .flex-row.justify-center.align-center
      .w90.p50-top
        v-text-field(placeholder="Email")
        v-text-field(placeholder="Password")
        v-text-field(placeholder="Confirm Password")
        br
        v-btn(round color="primary" block) Sign up
</template>

<script>
import logo from '@/assets/EmployoLogo.svg'

export default {
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    logo() {
      return logo
    }
  }
}
</script>

<style lang="scss">
  .overlay {
    position: absolute;
    top: -60px;
    background-color: white;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
</style>
