<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <PanelLeft v-bind:message="message"></PanelLeft>

    <!-- Main Views -->
    <Home></Home>

    <!-- Popup -->
    <Popup></Popup>

    <!-- Login Screen -->
    <Login></Login>



  </div>
</template>

<script>

import PanelLeft from './components/panel-left'
import Home from './components/home'
import Popup from './components/popup'
import Login from './components/login'

export default {
  data () {
    return {
      message: 'TEST!!!!'
    }
  },
  components: {
    PanelLeft,
    Popup,
    Home,
    Login
  }
}
</script>


<style type="text/css" scoped>

</style>
