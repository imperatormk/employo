<template>
  <PageContainer :curPage="1">
    <div>
      <h1 class="label">How many years of experience do you have?</h1>
      <div class="flex space-between align-center p10">
        <range-slider
          class="yearSlider"
          min="0"
          max="5"
          step="1"
          v-model="numYears">
        </range-slider>
        <md-chip class="chip">{{ numYears }} years</md-chip>
      </div>
    </div>
    <div>
      <h1 class="label">What areas have you had most experience with?</h1>
      <div class="flex space-between flex-wrap p10">
        <md-button v-for="area in areas" :key="area.id" :class="isAreaSelected(area.id)" @click="toggleAreaSelected(area.id)">{{ area.title }}</md-button>
      </div>
    </div>
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/PageContainer'
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'

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
      areas: [{
        id: 0,
        title: 'Frontend',
        isSelected: false
      }, {
        id: 1,
        title: 'Backend',
        isSelected: false
      }, {
        id: 2,
        title: 'Databases',
        isSelected: false
      }, {
        id: 3,
        title: 'Mobile',
        isSelected: false
      }, {
        id: 4,
        title: 'Design',
        isSelected: false
      }, {
        id: 5,
        title: 'QA',
        isSelected: false
      }, {
        id: 6,
        title: 'IT',
        isSelected: false
      }, {
        id: 7,
        title: 'Full stack',
        isSelected: false
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
    testFn(key, arr) {
      if (this[key] == null) {
        this[key] = arr[0].id != null ? arr[0].id : 0
      }
    }
  },
  components: {
    RangeSlider,
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