<template lang="pug">
  v-container(grid-list-xl)
    .flex-column
      h1.label Are you a student or an employeer?
      .flex-row.justify-center
        RoleType(v-for="roleType in roleTypes" :key="roleType.id" :typeData="roleType" @clicked="roleSelected(roleType.id)")
</template>

<script>
import RoleType from '@/components/RoleType'

export default {
  data() {
    return {
      roleTypes: [{
        id: 'student',
        title: 'Student',
        desc: ''
      }, {
        id: 'employee',
        title: 'Employeer',
        desc: ''
      }]
    }
  },
  methods: {
    roleSelected(e) {
      this.$emit('roleSelected', e)
    }
  },
  components: {
    RoleType
  }
}
</script>

<style lang="scss" scoped>
  .select-box {
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 3px 1px -2px rgba(100, 100, 100, 0.1), 0 2px 2px 0 rgba(100, 100, 100, 0.1), 0 1px 5px 0 rgba(100, 100, 100, 0.1);
  }
  .md-field.md-theme-default:before {
    background-color: transparent;
  }
  .md-field.md-theme-default:after {
    background-color: transparent;
  }
  .field-label {
    text-transform: uppercase;
    color: #3164e3;
    padding: 5px 5px 10px 5px;
  }
  .yearSlider {
    width: 100%;
  }
  .chip {
    color: #8c8c8c !important;
    background-color: #ececec;
    font-size: 20px;
    padding: 5px 10px;
    height: 42px !important;
  }
</style>