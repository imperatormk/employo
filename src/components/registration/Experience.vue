<template lang="pug">
  v-container(grid-list-xl)
    div
      h1.label How many years of experience do you have?
      .flex.space-between.align-center.p10
        range-slider(class="yearSlider" min="0" max="5" step="1" v-model="fields.numYears")
        v-chip.chip {{ fields.numYears }} years
    div
      h1.label What areas have you had most experience with?
      .flex.space-between.align-center.p10.flex-wrap
        v-btn(v-for="area in areas" :key="area.id" :class="isAreaSelected(area.id)" @click="toggleAreaSelected(area.id)") {{ area.title }}
</template>

<script>
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'
import pagesList from '@/components/registration/page_list'

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList[2])
  },
  data() {
    return {
      fields: {
        selectedAreas: [],
        numYears: 1
      },
      areas: [{
        id: 0,
        title: 'Frontend'
      }, {
        id: 1,
        title: 'Backend'
      }, {
        id: 2,
        title: 'Databases'
      }, {
        id: 3,
        title: 'Mobile'
      }, {
        id: 4,
        title: 'Design'
      }, {
        id: 5,
        title: 'QA'
      }, {
        id: 6,
        title: 'IT'
      }, {
        id: 7,
        title: 'Full stack'
      }]
    }
  },
  watch: {
    fields: {
      handler: function f(val) {
        this.$store.dispatch('dataChange', {
          pageId: pagesList[2],
          fields: val
        })
      },
      deep: true
    }
  },
  methods: {
    isButtonSelected(currentVal, expectedVal) {
      const isSelected = currentVal === expectedVal
      return {
        btn: true,
        'btn-selected': isSelected
      }
    },
    isAreaSelected(areaId) {
      const isSelected = this.fields.selectedAreas.find(id => id === areaId) != null
      return {
        p10: true,
        btn: true,
        'button-chip': true,
        'btn-selected': isSelected
      }
    },
    toggleAreaSelected(areaId) {
      const isSelected = this.fields.selectedAreas.find(id => id === areaId) != null
      if (!isSelected) {
        this.fields.selectedAreas.push(areaId)
      } else {
        this.fields.selectedAreas = this.fields.selectedAreas.filter(id => id !== areaId)
      }
    }
  },
  components: {
    RangeSlider
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