<template>
  <PageContainer :curPage="2">
    <div class="flex-column">
      <h1 class="label">What types of roles are you interested in?</h1>
      <div class="flex-row">
        <RoleType v-for="roleType in roleTypes" :key="roleType.id" :typeData="roleType" :isSelected="isRoleSelected(roleType.id).isSelected" @clicked="toggleRoleSelected(roleType.id)"></RoleType>
      </div>
    </div>
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/PageContainer'
import RoleType from '@/components/RoleType'

export default {
  created() {
    this.fields = this.$store.getters.getById('pageThree')
  },
  data() {
    return {
      fields: {
        selectedRoles: []
      },
      roleTypes: [{
        id: 0,
        title: 'Technical',
        desc: 'Software Engineers...'
      }, {
        id: 1,
        title: 'Non-Technical',
        desc: 'Business Development...'
      }]
    }
  },
  watch: {
    fields: {
      handler: function f(val) {
        this.$store.dispatch('dataChange', {
          pageId: 'pageThree',
          fields: val
        })
      },
      deep: true
    }
  },
  methods: {
    isRoleSelected(roleId) {
      const isSelected = this.fields.selectedRoles.find(id => id === roleId) != null
      return {
        'md-raised': true,
        p10: true,
        btn: true,
        'button-chip': true,
        'btn-selected': isSelected,
        isSelected
      }
    },
    toggleRoleSelected(roleId) {
      const isSelected = this.fields.selectedRoles.find(id => id === roleId) != null
      if (!isSelected) {
        this.fields.selectedRoles.push(roleId)
      } else {
        this.fields.selectedRoles = this.fields.selectedRoles.filter(id => id !== roleId)
      }
    }
  },
  components: {
    RoleType,
    PageContainer
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