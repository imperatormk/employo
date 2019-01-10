<template lang="pug">
    v-card.border-round.content-inherit.flex-basis-20
      v-toolbar
        v-toolbar-title.dark-text-blue.f1-8m Location
        v-spacer
        v-dialog(v-model="dialog", width="600" persistent=true)
          v-btn.noShadow(slot="activator", fab=true small=true)
            v-icon create
          v-card.border-round
            v-container(grid-list-xl)
              v-layout(wrap, align-center)
                v-flex(xs12, sm12, d-flex)
                  h1.label Prefered Location
                v-flex(xs12, sm12, d-block)
                  v-chip(disabled=true, small=true, text-color="black", v-for="location in fields.selectedLocation", :key="location.id").f1-2m {{location}}
                  v-dialog(v-model="dialog2", width="600")
                    v-btn(slot="activator", icon=true, small=true).f1-2m
                      i.material-icons add
                    v-card.border-round
                      v-container(grid-list-xl)
                        h1.label Location?
                        .desc-label Choose as many that apply
                        v-text-field(v-model="criteria" placeholder="Search skills")
                        .flex.space-between.flex-wrap.p10
                          v-chip(small=true, text-color="black", v-for="location in locations", :key="location.id" :class="isSkillSelected(location.title)" @click="toggleSkillSelected(location.title)").f1-2m {{location.title}}
                  div.flex.space-around
                  v-btn.flat.border-round(@click="cancel") Cancel
                  v-btn.flat.border-round(@click="save") Save
      div.p10
        div.flex.align-center
          p.dark-text-blue Selected Locations:
          v-chip(disabled=true, small=true, text-color="black", v-for="location in fields.selectedLocation", :key="location.id").f1-2m {{location}}

</template>

<script>

export default {
  data() {
    return {
      criteria: '',
      dialog: false,
      dialog2: false,
      fields: {
        selectedLocation: null,
        userLocation: ['Toronto'],
      },
      locations: [{
        id: 0,
        title: 'Toronto'
      }, {
        id: 1,
        title: 'Cammbera'
      }]
    }
  },
  created() {
    this.fields.selectedLocation = this.fields.userLocation.slice();
  },
  methods: {
    save() {
      this.dialog = false;
      this.fields.userLocation = this.fields.selectedLocation;
    },
    cancel() {
      this.dialog = false;
      this.fields.selectedLocation = this.fields.userLocation
    },
    isSkillSelected(locationTitle) {
      const isSelected = this.fields.selectedLocation.find(title => title === locationTitle) != null
      return {
        p10: true,
        btn: true,
        'button-chip': true,
        'btn-selected': isSelected
      }
    },
    toggleSkillSelected(locationTitle) {
      const isSelected = this.fields.selectedLocation.find(title => title === locationTitle) != null
      if (!isSelected) {
        this.fields.selectedLocation.push(locationTitle)
      } else {
        this.fields.selectedLocation = this.fields.selectedLocation.filter(title => title !== locationTitle)
      }
    }
  }
}
</script>

