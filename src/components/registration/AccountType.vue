<template lang="pug">
  v-container(grid-list-xl)
    h1.label Are you a student or an employeer?
    .flex-column.justify-center(style="height:85%;")
      PropertyItem(:data="{value:selected,required:true}" :center="true")
        .flex-row.justify-center.fit
          RoleType(v-for="roleType in source.roleTypes" :key="roleType.id" :typeData="roleType" :isSelected="isRoleSelected(roleType.id).isSelected" @clicked="roleSelected(roleType.id)")
</template>

<script>
import RoleType from '@/components/RoleType'
import PropertyItem from '@/components/common/PropertyItem'
import pagesList, { initialPagesData } from '@/components/registration/page_list'

const PAGE_ID = pagesList.initialPagesList.acctype

export default {
  props: {
    currentType: {
      type: String,
      default: null
    }
  },
  created() {
    if (this.currentType) {
      this.selected = this.currentType
    }
  },
  data() {
    return {
      source: initialPagesData.find(item => item.pageId === PAGE_ID).fields,
      selected: null
    }
  },
  methods: {
    isRoleSelected(roleId) {
      const isSelected = this.selected === roleId && roleId != null
      return {
        p10: true,
        btn: true,
        'button-chip': true,
        'btn-selected': isSelected,
        isSelected
      }
    },
    roleSelected(e) {
      this.selected = e
      this.$emit('roleSelected', e)
    }
  },
  components: {
    RoleType,
    PropertyItem
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