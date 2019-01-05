<template lang="pug">
    v-card.border-round.content-inherit.flex-basis-20
      v-toolbar
        v-toolbar-title.dark-text-blue.f1-8m Account Info
        v-spacer
        v-dialog(v-model="dialog", width="600", persistent=true)
          v-btn.noShadow(slot="activator", fab=true small=true)
            v-icon create
          v-card.border-round
            v-container(grid-list-xl)
              v-layout(wrap, align-center)
                v-flex(xs12, sm12, d-flex)
                  h1.label Edit Account info
                v-flex(xs12, sm6, d-block)
                  .field-label Email
                  v-text-field.br5(:label="fields.email" v-model="fields.email" solo="")
                v-flex(xs12, sm6, d-block)
                  .field-label Phone Number
                  v-text-field.br5(:label="fields.phoneNumber" v-model="fields.phoneNumber" solo="")
                div.flex.space-around
                  v-btn.flat.border-round(@click="cancel") Cancel
                  v-btn.flat.border-round(@click="save") Save
      div.p10
        div.flex.align-center
          p.dark-text-blue Email:
          p {{fields.email}}
        div.flex
          p.dark-text-blue Phone Number:
          p {{fields.phoneNumber}}

</template>

<script>

export default {
  data() {
    return {
      dialog: false,
      fields: {
        email: 'test@email.com',
        phoneNumber: '020000',
      }
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

