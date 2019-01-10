<template lang="pug">
  v-container
    h1.label Last step...
    .flex.row
      .flex-column.w50.align-center
        h1.desc-label Upload your Resumé
        DragNDrop
      .flex-column.w50.align-center
        h1.desc-label Upload your Resumé
        DragNDrop
    .flex-row.flex-wrap
      .p10.w50
        .desc-label LinkedIn URL
        v-text-field.br5(solo background-color="#f5f5f5")
      .p10.w50
        .desc-label GitHub URL
        v-text-field.br5(solo background-color="#f5f5f5")
      .p10.w50
        .desc-label Personal Website
        v-text-field.br5(solo background-color="#f5f5f5")
</template>

<script>
import DragNDrop from '@/components/DragNDrop'

export default {
  components: {
    DragNDrop
  }
}
</script>