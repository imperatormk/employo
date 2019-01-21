<template lang="pug">
  v-container(grid-list-xl style="height:100%;")
    h1.label What types of roles are you interested in?
    .flex-column.justify-center(style="height:100%;")
      .flex-row.justify-center
        RoleType(v-for="roleType in source.roleTypes" :key="roleType.id" :typeData="roleType" :isSelected="isRoleSelected(roleType.id).isSelected" @clicked="toggleRoleSelected(roleType.id)")
</template>

<script>
import RoleType from '@/components/RoleType'
import pagesList, { studentPagesData } from '@/components/registration/page_list'

const PAGE_ID = pagesList.studentPagesList.roles

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList.studentPagesList[PAGE_ID])
    this.loaded = true
  },
  data() {
    return {
      source: studentPagesData.find(item => item.pageId === PAGE_ID).fields,
      fields: {},
      loaded: false
    }
  },
  watch: {
    fields: {
      handler: function f(val) {
        this.$store.dispatch('dataChange', {
          pageId: pagesList.studentPagesList[PAGE_ID],
          fields: val
        })
        if (val) this.$emit('roleChanged', this.fields.selectedRole.value)
      },
      deep: true
    }
  },
  methods: {
    isRoleSelected(roleId) {
      const isSelected = !!(this.fields.selectedRole.value != null && this.fields.selectedRole.value === roleId)
      return {
        p10: true,
        btn: true,
        'button-chip': true,
        'btn-selected': isSelected,
        isSelected
      }
    },
    toggleRoleSelected(roleId) {
      this.fields.selectedRole.value = roleId
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