<template lang="pug">
    v-card.border-round.content-inherit.flex-basis-20
      v-toolbar
        v-toolbar-title.dark-text-blue.f1-8m Company Information
        v-spacer
        v-dialog(content-class="dialog-round" v-model="dialog", width="600", persistent=true)
          v-btn.noShadow(slot="activator", fab=true small=true)
            v-icon create
          v-card.border-round
            v-container(grid-list-xl)
              v-layout(wrap, align-center)
                v-flex(xs12, sm12, d-flex)
                  h1.label Edit Company info
                v-flex(xs12, sm6, d-block)
                  .field-label Company name
                  v-text-field.br5(:label="fields.name" v-model="fields.name" solo="")
                v-flex(xs12, sm6, d-block)
                  .field-label Company size
                  v-select(:items='companySize', background-color='#f5f5f5', v-model='fields.size', :label='fields.size',item-text='title', solo)
                v-flex(xs12, sm6, d-block)
                  .field-label Office Location
                  v-text-field.br5(:label="fields.location" v-model="fields.location" solo="")
                div.flex.space-around
                  v-btn.flat.border-round(@click="cancel") Cancel
                  v-btn.flat.border-round(@click="save") Save
      div.p10
        div.flex.align-center
          p.dark-text-blue Company Name:
          p {{fields.name}}
        div.flex
          p.dark-text-blue Company Size:
          p {{fields.size}}
        div.flex
          p.dark-text-blue Office Location:
          p {{fields.location}}

</template>

<script>

export default {
  data() {
    return {
      dialog: false,
      fields: {
        name: 'University of Toronto',
        size: '11-50',
        location: 'Toronto, ON'
      },
      companySize: [{
        id: 0,
        title: '11-50'
      }, {
        id: 1,
        title: '50-100'
      }]
    }
  },
  mounted() {
    this.cachedFields = Object.assign({}, this.fields);
  },
  methods: {
    save() {
      this.dialog = false;
      this.cachedFields = Object.assign({}, this.fields);
    },
    cancel() {
      this.dialog = false;
      this.fields = Object.assign({}, this.cachedFields);
    }
  }
}
</script>

