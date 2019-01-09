<template lang="pug">
  v-container(grid-list-xl)
    .flex-column.align-center
      .w70
        label
          form(ref="fileform")
            input.hidden(type="file" ref="fileInput" @change="fileBrowsed")
            .flex-column.h100.justify-center
              span.header-text Drag and drop
              span.far.fa-copy.blue-color.fs80
              span.header-text Click to browse
      div.file-listing(v-for="(file, key) in files" :key="key")
        img.preview(v-bind:ref="`preview${parseInt(key, 10)}`")
        span {{ file.name }}
        .remove-container
          a.remove(@click="removeFile(key)") Remove
      .p20-top
        v-btn.btn.submit-button(outline @click="submitFiles()" v-show="files.length > 0") Submit
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      dragAndDropCapable: false,
      files: [],
      uploadPercentage: 0
    }
  },
  mounted() {
    this.dragAndDropCapable = this.determineDragAndDropCapable()
    if (this.dragAndDropCapable) {
      ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop']
        .forEach((evt) => {
          this.$refs.fileform.addEventListener(evt, (e) => {
            e.preventDefault()
            e.stopPropagation()
          })
        })

      this.$refs.fileform.addEventListener('drop', (e) => {
        for (let i = 0; i < e.dataTransfer.files.length; i += 1) {
          this.files.push(e.dataTransfer.files[i])
          this.getImagePreviews()
        }
      })
    }
  },
  methods: {
    fileBrowsed(e) {
      const file = e.target.files[0]
      if (file) {
        this.files.push(file)
      }
    },
    determineDragAndDropCapable() {
      const div = document.createElement('div')
      return (('draggable' in div)
              || ('ondragstart' in div && 'ondrop' in div))
              && 'FormData' in window
              && 'FileReader' in window
    },
    getImagePreviews() {
      for (let i = 0; i < this.files.length; i += 1) {
        if (/\.(jpe?g|png|gif)$/i.test(this.files[i].name)) {
          const reader = new FileReader()
          reader.addEventListener('load', () => {
            this.$refs[`preview'${parseInt(i, 10)}`][0].src = reader.result
          })
          reader.readAsDataURL(this.files[i])
        } else {
          this.$nextTick(() => {
            this.$refs[`preview'${parseInt(i, 10)}`][0].src = '/images/file.png'
          })
        }
      }
    },
    submitFiles() {
      const formData = new FormData()
      for (let i = 0; i < this.files.length; i += 1) {
        const file = this.files[i]
        formData.append(`files[${i}]`, file)
      }

      /* axios.post('/file-drag-drop',
        formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: (progressEvent) => {
            this.uploadPercentage = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total), 10)
          }
        }) */
    },
    removeFile(key) {
      this.files.splice(key, 1)
    }
  }
}
</script>

<style>
  form{
    display: block;
    height: 500px;
    border: 5px solid #3164e3;
    border-radius: 50px;
    border-style: dashed;
    margin: auto;
    text-align: center;
    line-height: 100px;
  }

  div.file-listing{
    width: 500px;
    margin: auto;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  div.file-listing img{
    height: 100px;
  }

  div.remove-container{
    text-align: center;
  }

  div.remove-container a{
    color: red;
    cursor: pointer;
  }

  a.submit-button{
    display: block;
    margin: auto;
    text-align: center;
    width: 200px;
    padding: 10px;
    text-transform: uppercase;
    background-color: #CCC;
    color: white;
    font-weight: bold;
    margin-top: 20px;
  }

  progress{
    width: 400px;
    margin: auto;
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>