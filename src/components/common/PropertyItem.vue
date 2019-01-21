<template lang="pug">
  .flex-column(:class="{'align-center': center}")
    span.p10-side.p5(v-if="hasError && isHot" style="color:#ff0000") Please fill in this field
    slot
</template>

<script>
import helpers from '@/helpers'
import MessageBus from '@/services/messageBus'

export default {
  props: {
    data: Object,
    center: Boolean // aux variable for whether to center the slot items
  },
  mounted() {
    MessageBus.$on('isHotChanged', (isHot) => { this.isHot = isHot })
    MessageBus.$on('getErrorState', cb => cb(this.hasError))
  },
  beforeDestroy() {
    MessageBus.$off('isHotChanged')
    MessageBus.$off('getErrorState')
  },
  data() {
    return {
      isHot: false
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

