<template lang="pug">
  .role-container(@click="clicked" :class="{ selected: isSelected }")
    .flex-column.align-center
      img(width="100%" src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350")
      br
      h2.label {{ typeData.title }}
      span.label {{ typeData.desc }}
      br
</template>

<script>
export default {
  props: {
    typeData: Object,
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clicked() {
      this.$emit('clicked')
    }
  }
}
</script>


<style lang="scss" scoped>
  .role-container {
    border-radius: 10%;
    margin: 20px;
    overflow: hidden;
    box-shadow: 0 3px 1px -2px rgba(100, 100, 100, 0.1), 0 2px 2px 0 rgba(100, 100, 100, 0.1), 0 1px 5px 0 rgba(100, 100, 100, 0.1);
  }
  .selected {
    background-color: #ececec;
  }
</style>