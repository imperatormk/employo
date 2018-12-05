<template>
  <PageContainer :curPage="0">
    <h1 class="label">Tell us about your education.</h1>
    <br>
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <div class="field-label">University</div>
        <md-field class="input-box">
          <md-select @md-opened="testFn('selUniversity', universities)" v-model="selUniversity" :placeholder="getPlaceholder(universities)">
            <md-option v-for="university in universities" :key="university.id" :value="university.id">{{ university.title }}</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item">
        <div class="field-label">Field of Study</div>
        <md-field class="input-box">
          <md-select @md-opened="testFn('selField', fields)" v-model="selField" :placeholder="getPlaceholder(fields)">
            <md-option v-for="field in fields" :key="field.id" :value="field.id">{{ field.title }}</md-option>
          </md-select>
        </md-field>
      </div>
    </div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <div class="field-label">Expected Year of Graduation</div>
        <md-field class="input-box">
          <md-select @md-opened="testFn('selYear', years)" v-model="selYear" :placeholder="getPlaceholder(years)">
            <md-option v-for="(year, idx) in years" :key="idx" :value="idx">{{ year }}</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item">
        <div class="field-label">Cumulative GPA</div>
        <md-field class="input-box">
          <md-select @md-opened="testFn('selGpa', gpas)" v-model="selGpa" :placeholder="getPlaceholder(gpas)">
            <md-option v-for="(gpa, idx) in gpas" :key="idx" :value="idx">{{ gpa }}</md-option>
          </md-select>
        </md-field>
      </div>
    </div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <div class="field-label">Official co-op</div>
        <div>
          <md-button :md-ripple="false" :class="isButtonSelected(officialCoop,true)" @click="officialCoop=true">Yes</md-button>
          <md-button :md-ripple="false" :class="isButtonSelected(officialCoop,false)" @click="officialCoop=false">No</md-button>
        </div>
      </div>
      <div class="md-layout-item">
        <div class="field-label">Availability</div>
        <div>
          <md-button :md-ripple="false" :class="isButtonSelected(availability,0)" @click="availability=0">Summer</md-button>
          <md-button :md-ripple="false" :class="isButtonSelected(availability,1)" @click="availability=1">Winter</md-button>
          <md-button :md-ripple="false" :class="isButtonSelected(availability,2)" @click="availability=2">Fall</md-button>
        </div>
      </div>
    </div>
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/PageContainer'

export default {
  props: {
    amount: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      selUniversity: null,
      selField: null,
      selYear: null,
      selGpa: null,
      officialCoop: null,
      availability: null,
      universities: [{
        id: 0,
        title: 'University of Toronto'
      }, {
        id: 1,
        title: 'Western University'
      }],
      fields: [{
        id: 0,
        title: 'Computer Science'
      }, {
        id: 1,
        title: 'Software Engineering'
      }],
      years: [2020, 2021],
      gpas: [3.9, 4]
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
    PageContainer
  }
}
</script>