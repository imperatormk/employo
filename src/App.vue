<template>
  <div id="app">
    <MessageItem v-for="msg in messages" :key="msg.id" :msg="msg" @removeMsg="onRemoveMsg(msg.id)" />
    <input v-model="newMsg"/>
    <button @click="sendMessage">Send message</button>
  </div>
</template>

<script>
import MessageItem from './components/MessageItem.vue'

export default {
  name: 'app',
  components: {
    MessageItem
  },
  data() {
    return {
      messages: [
        {
          id: 1,
          content: 'msg A'
        }, {
          id: 2,
          content: 'msg B'
        }
      ],
      newMsg: ''
    }
  },
  methods: {
    sendMessage() {
      const msgObj = {
        id: this.messages.length,
        content: this.newMsg
      }
      this.messages.push(msgObj)
      this.newMsg = ''
    },
    onRemoveMsg(msgId) {
      this.messages = this.messages.filter(msg => msg.id !== msgId)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
