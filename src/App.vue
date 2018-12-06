<template>
  <div id="app" style="min-height: 100vh;">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.initStore()
  },
  methods: {
    initStore() {
      this.$store.dispatch('dataChange', {
        pageId: 'pageOne',
        fields: {
          selUniversity: null,
          selField: null,
          selYear: null,
          selGpa: null,
          officialCoop: null,
          availability: null
        }
      })
      this.$store.dispatch('dataChange', {
        pageId: 'pageTwo',
        fields: {
          selectedAreas: [],
          numYears: 1
        }
      })
      this.$store.dispatch('dataChange', {
        pageId: 'pageThree',
        fields: {
          selectedRoles: []
        }
      })
      this.$store.dispatch('dataChange', {
        pageId: 'pageFour',
        fields: {
          selectedIndustries: []
        }
      })
      this.$store.dispatch('dataChange', {
        pageId: 'pageFive',
        fields: {
          selectedSkills: []
        }
      })
    }
  }
}
</script>