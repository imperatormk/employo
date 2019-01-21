<template lang="pug">
  .flex-column
    span.p10-side(v-if="hasError") Please fill in this field
    slot
</template>

<script>
import helpers from '@/helpers'

export default {
  props: {
    data: Object
  },
  watch: {
    hasError(val) {
      const errNum = val ? 1 : 0
      this.$emit('errNumChanged', errNum)
    }
  },
  computed: {
    hasError() {
      if (!this.required) return false
      return helpers.checkEmptyOne(this.data.value)
    },
    value() {
      return this.data.value
    },
    required() {
      return this.data.required
    }
  }
}
</script>

