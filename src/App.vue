<template>
  <div id="app" style="min-height: 100vh;">
    <md-app>
      <md-app-content style="min-height: 100vh;">
        <div class="flex-column" style="min-height: 100%;">
          <div class="field-container">
            <router-view/>
          </div>
          <div class="spacer"></div>
          <div class="flex space-between p10" keep-alive>
            <md-button @click="goBack" class="btn md-raised" :md-ripple="false">Back</md-button>
            <md-progress-bar md-mode="determinate" :md-value="progress"></md-progress-bar>
            <md-button v-if="!isLastPage" class="btn md-raised" :md-ripple="false" @click="goNext">Next</md-button>
            <md-button v-else class="btn md-raised" :md-ripple="false" @click="submitData">Submit</md-button>
          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import pagesList from '@/pages'

export default {
  name: 'App',
  created() {
    this.pages = pagesList
    this.initStore()
  },
  data() {
    return {
      pages: []
    }
  },
  methods: {
    initStore() {
      this.$store.dispatch('dataChange', {
        pageId: pagesList[0],
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
        pageId: pagesList[1],
        fields: {
          selectedAreas: [],
          numYears: 1
        }
      })
      this.$store.dispatch('dataChange', {
        pageId: pagesList[2],
        fields: {
          selectedRoles: []
        }
      })
      this.$store.dispatch('dataChange', {
        pageId: pagesList[3],
        fields: {
          selectedIndustries: []
        }
      })
      this.$store.dispatch('dataChange', {
        pageId: pagesList[4],
        fields: {
          selectedSkills: []
        }
      })
    },
    goBack() {
      const prevPage = this.curPage - 1
      if (this.pages[prevPage]) {
        this.$router.push({
          name: this.pages[prevPage]
        })
      }
    },
    goNext() {
      const nextPage = this.curPage + 1
      if (this.pages[nextPage]) {
        this.$router.push({
          name: this.pages[nextPage]
        })
      }
    },
    submitData() {
      const data = this.$store.getters.getAll
      let reqData = {}

      Object.keys(data)
        .forEach((pageId) => {
          reqData = Object.assign({}, reqData, data[pageId])
        })

      console.log(reqData)
    }
  },
  computed: {
    progress() {
      return this.curPage * (100 / (this.pages.length - 1))
    },
    isLastPage() {
      return this.curPage === this.pages.length - 1
    },
    curPage() {
      return this.$store.getters.curPage
    }
  }
}
</script>

<style lang="scss">
  .md-progress-bar {
    margin: 24px;
    width: 100%;
    border-radius: 100px;
  }
  .spacer {
    flex-grow: 1;
  }
</style>
