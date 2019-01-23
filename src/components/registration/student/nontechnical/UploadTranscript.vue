<template lang="pug">
  v-container
    h1.label.p50-bot Last step...
    .flex.row
      .flex-column.w50.align-center
        h1.desc-label Upload your Resumé
        PropertyItem.w100.justify-center.align-center(:data="fields.resume")
          DragNDrop(:filesProp="fields.resume.value" @filesChanged="filesChanged($event, 'resume')")
      .flex-column.w50.align-center
        .p10.w100
          .desc-label LinkedIn URL
          v-text-field.br5(v-model="fields.linkedIn.value" solo background-color="#f5f5f5")
        .p10.w100
          .desc-label GitHub URL
          v-text-field.br5(v-model="fields.gitHub.value" solo background-color="#f5f5f5")
        .p10.w100
          .desc-label Personal Website
          v-text-field.br5(v-model="fields.website.value" solo background-color="#f5f5f5")
</template>

<script>
import PropertyItem from '@/components/common/PropertyItem'
import DragNDrop from '@/components/DragNDrop'
import pagesList from '@/components/registration/page_list'

const PAGE_ID = pagesList.studentPagesList.nontechnical.transcript

export default {
  created() {
    this.fields = this.$store.getters.getById(pagesList.studentPagesList[PAGE_ID])
  },
  data() {
    return {
      fields: {}
    }
  },
  methods: {
    filesChanged(files, field) {
      this.fields[field].value = files
    }
  },
  watch: {
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
    DragNDrop,
    PropertyItem
  }
}
</script>