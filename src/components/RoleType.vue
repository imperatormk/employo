<template lang="pug">
  .of-hidden.m20.role-container(@click="clicked" :class="findSelection(typeData.id)")
    .p15-bot.h100.flex-column.space-between.align-center
      img(width="100%" :src="typeData.image")
      .flex-column.p15-top
        h2.demiBold.employe(:class="{ student: isStudent(typeData.id), technical: isTechnical(typeData.title) }") {{ typeData.title }}
        span.demiBold {{ typeData.desc }}
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
    },
    findSelection(id) {
      if (this.isSelected && id === 'student') {
        return {
          studentSelected: true
        }
      } else if (this.isSelected && id === 'employee') {
        return {
          employerSelected: true
        }
      }
      return false
    },
    isStudent(id) {
      if (id === 'student') {
        return true
      }
      return false
    },
    isTechnical(title) {
      if (title === 'Technical' || title === 'Non-Technical') {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
  .role-container {
    border-radius: 10%;
    box-shadow: 0 3px 1px -2px rgba(100, 100, 100, 0.1), 0 2px 2px 0 rgba(100, 100, 100, 0.1), 0 1px 5px 0 rgba(100, 100, 100, 0.1);
  }
  .selected {
    background-color: #ececec;
  }

  .studentSelected {
    background-color: #E3EBFA;
  }

  .employerSelected {
    background-color: #DEEFFA;
  }

  .technical {
    color: #477EE6 !important;
  }
</style>