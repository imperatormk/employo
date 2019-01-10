<template lang="pug">
  v-container
    h1.label Last step...
    .flex.row
      .flex-column.w50.align-center
        h1.desc-label Upload your Resumé
        DragNDrop
      .flex-column.w50.align-center
        h1.desc-label Upload your Transcript
        DragNDrop
    .flex-row.flex-wrap
      .p10.w50
        .desc-label LinkedIn URL
        v-text-field.br5(v-model="fields.linkedIn" solo background-color="#f5f5f5")
      .p10.w50
        .desc-label GitHub URL
        v-text-field.br5(v-model="fields.gitHub" solo background-color="#f5f5f5")
      .p10.w50
        .desc-label Personal Website
        v-text-field.br5(v-model="fields.website" solo background-color="#f5f5f5")
</template>

<script>
import DragNDrop from '@/components/DragNDrop'
import pagesList from '@/components/registration/page_list'

const PAGE_ID = pagesList.studentPagesList.transcript

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList.studentPagesList[PAGE_ID])
  },
  data() {
    return {
      fields: {
        linkedIn: null,
        gitHub: null,
        website: null
      }
    }
  },
  computed: {
    checkForSuccess() {
      const items = Object.values(this.fields)
      function checkEmpty(prop) {
        if (prop instanceof Array) {
          return prop.length >= 1
        } else if (prop) {
          return prop.toString().trim().length >= 0
        }

        return false
      }
      return items.every(checkEmpty)
    }
  },
  watch: {
    checkForSuccess: {
      handler: function f(val) {
        this.$emit('success', val)
      },
      deep: true
    },
    fields: {
      handler: function f(val) {
        this.$store.dispatch('dataChange', {
          pageId: pagesList.studentPagesList[PAGE_ID],
          fields: val
        })
      },
      deep: true
    }
  },
  components: {
    DragNDrop
  }
}
</script>