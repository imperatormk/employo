<template>
  <md-app>
    <md-app-content style="min-height: 100vh;">
      <div class="flex-column" style="min-height: 100%;">
        <div class="field-container">
          <slot></slot>
        </div>
        <div class="spacer"></div>
        <div class="flex space-between p10">
          <md-button @click="goBack" class="btn md-raised" :md-ripple="false">Back</md-button>
          <md-progress-bar md-mode="determinate" :md-value="progress"></md-progress-bar>
          <md-button class="btn md-raised" :md-ripple="false" @click="goNext">Next</md-button>
        </div>
      </div>
    </md-app-content>
  </md-app>
</template>

<script>
export default {
  props: {
    curPage: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      pages: ['pageOne', 'pageTwo', 'pageThree', 'pageFour', 'pageFive']
    }
  },
  methods: {
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
    }
  },
  computed: {
    progress() {
      return this.curPage * (100 / (this.pages.length - 1))
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    margin: 24px;
    width: 100%;
    border-radius: 100px;
  }
  .spacer {
    flex-grow: 1;
  }
</style>