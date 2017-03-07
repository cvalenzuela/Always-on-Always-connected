<template>

  <f7-page
  beforeinit @page:beforeinit="addMsj"
  >
    <f7-navbar :title="$route.params.question" back-link="Back" sliding></f7-navbar>
    <f7-block>
      <h4 align="center">This question will be unavailable in 2 days</h4>
      <f7-messages>
        <f7-message name="Cris" type="sent">{{$route.params.question}}</f7-message>
        <f7-message v-for="message in messages"
          :text="message.text"
          :label="message.label"
          :name="message.name"
          :type="message.type"
          :key="message.text"
          @click="onClick"
          @click:text="onTextClick"
          @click:name="onNameClick"
        ></f7-message>
      </f7-messages>
      <f7-messagebar placeholder="Message" send-link="Send" @submit="onSubmit" class="writebox"></f7-messagebar>
    </f7-block>
  </f7-page>


</template>

<script>
import Countdown from '../components/Countdown.vue'

export default {
  components: { Countdown },
  data: function () {
    return {
      name: 'Cris',
      messages: [],
      add: function () {
        console.log('hi')
      }
    }
  },
  methods: {
    addMsj: function () {
      setTimeout(() => {
        this.messages.push({
          name: 'Dan',
          text: 'Nope, closed bc of the weather',
          type: 'received'
        })
      }, 3500)
    },
    onClick: function () {
      console.log('message click')
    },
    onTextClick: function () {
      console.log('text-click')
    },
    onNameClick: function () {
      console.log('name-click')
    },
    onSubmit: function (text, clear) {
      if (text.trim().length === 0) return
      this.messages.push({
        name: this.name,
        text: text
      })
      clear()
    }
  }
}
</script>

<style type="text/css">

.writebox{
  position: absolute;
}

</style>
