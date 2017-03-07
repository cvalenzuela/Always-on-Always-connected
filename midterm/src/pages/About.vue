<template>

  <f7-page>
    <f7-navbar title="About" back-link="Back" sliding></f7-navbar>
    <f7-block inner>
      <p>{{msg}}</p>
      <p>You can go <f7-link back>back</f7-link>.</p>
      <p>About...</p>
    </f7-block>
  </f7-page>

</template>

<script>
export default {
  data () {
    return {
      msg: 'Ask Someone Something: a human based search engine.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
p {
  font-size: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
