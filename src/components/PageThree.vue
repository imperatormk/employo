<template>
  <PageContainer :curPage="2">
    <div class="flex-column align-center">
      <h1 class="label">What types of roles are you interested in?</h1>
      <div class="flex-row">
        <RoleType v-for="roleType in roleTypes" :key="roleType.id" :typeData="roleType"></RoleType>
      </div>
    </div>
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/PageContainer'
import RoleType from '@/components/RoleType'

export default {
  props: {
    amount: {
      type: Number,
      default: 40
    }
  },
  data() {
    return {
      numYears: 1,
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
  methods: {
    isButtonSelected(currentVal, expectedVal) {
      const isSelected = currentVal === expectedVal
      return {
        'md-raised': true,
        btn: true,
        'btn-selected': isSelected
      }
    },
    isAreaSelected(areaId) {
      const isSelected = this.areas.find(area => area.id === areaId).isSelected
      return {
        'md-raised': true,
        p10: true,
        btn: true,
        'button-chip': true,
        'btn-selected': isSelected
      }
    },
    toggleAreaSelected(areaId) {
      const area = this.areas.find(areaObj => areaObj.id === areaId)
      area.isSelected = !area.isSelected
    },
    getPlaceholder(arr) {
      if (!arr.length) return ''
      const firstItem = arr[0].title || arr[0]
      return `eg. ${firstItem}`
    },
    goBack() {
      this.$router.go(-1)
    },
    goNext() {
      if (this.checkInputs()) {
        // go to next page
      }
    },
    checkInputs() {
      return false
    },
    testFn(key, arr) {
      if (this[key] == null) {
        this[key] = arr[0].id != null ? arr[0].id : 0
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