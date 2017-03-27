<template>
  <f7-views layout="white" theme="green">
    <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
      <f7-navbar>
        <f7-nav-left>
          <f7-link icon="icon-bars" open-panel="left"></f7-link>
        </f7-nav-left>
        <f7-nav-center sliding><span>Something</span>|Someone</f7-nav-center>
      </f7-navbar>

      <f7-pages>
        <f7-page>

          <f7-block class="search">
            <f7-searchbar
            cancel-link="Cancel"
            placeholder="Something..."
            :clear-button="true"
            v-model="question"
            @searchbar:search="onSearch"
            @searchbar:enable="onEnable"
            @searchbar:disable="onDisable"
            @searchbar:clear="onClear"
            ></f7-searchbar>
            <f7-block>
              <f7-grid>
                <f7-col width="50">
                  <f7-button class="searchbuttons" v-on:click=""  v-bind:href="link+question" >Ask Someone</f7-button>
                </f7-col>
                <f7-col width="50">
                  <f7-button class="searchbuttons" open-login-screen="#login-screen">Answer Something</f7-button>
                </f7-col>
              </f7-grid>
            </f7-block>
          </f7-block>

          <f7-block-title>Current Questions</f7-block-title>

          <f7-card>
            <f7-card-content>What does this travel ban mean for turists?</f7-card-content>
            <f7-card-footer>
              <f7-chip text="Politics" bg="grey" color="white"></f7-chip>
              <f7-chip text="History" bg="blue" color="white"></f7-chip>
              <f7-chip text="Law" bg="pink" color="white"></f7-chip>
            </f7-card-footer>
          </f7-card>

          <f7-card>
            <f7-card-content>Is the W train working tonight?</f7-card-content>
            <f7-card-footer>
              <f7-chip text="New York" bg="yellow" color="white"></f7-chip>
            </f7-card-footer>
          </f7-card>

          <f7-card>
            <f7-card-content>What's going on in Tibet?</f7-card-content>
            <f7-card-footer>
              <f7-chip text="History" bg="blue" color="white"></f7-chip>
              <f7-chip text="International" bg="red" color="white"></f7-chip>
            </f7-card-footer>
          </f7-card>

          <f7-card>
            <f7-card-content>Why was AWS down?</f7-card-content>
            <f7-card-footer>
              <f7-chip text="Technology" bg="lightblue" color="white"></f7-chip>
            </f7-card-footer>
          </f7-card>

          <f7-card>
            <f7-card-content>How to install TensorFlow?</f7-card-content>
            <f7-card-footer>
              <f7-chip text="Python" bg="green" color="white"></f7-chip>
              <f7-chip text="Machine Learning" bg="orange" color="white"></f7-chip>
            </f7-card-footer>
          </f7-card>

          <f7-card>
            <f7-card-content>Why is nationalisim rising today?</f7-card-content>
            <f7-card-footer>
              <f7-chip text="History" bg="blue" color="white"></f7-chip>
              <f7-chip text="Politics" bg="grey" color="white"></f7-chip>
            </f7-card-footer>
          </f7-card>

          <!-- <f7-list>
            <f7-list-item link="/login/" title="About"></f7-list-item>
            <f7-list-item v-bind:link="link" title="Chat"></f7-list-item>
          </f7-list> -->

        </f7-page>
      </f7-pages>

    </f7-view>
  </f7-views>
</template>

<script>
  export default {
    data () {
      return {
        question: '',
        link: '/chat/'
      }
    },
    methods: {
      onSearch: function (query, found) {
        console.log('search', query)
      },
      onClear: function (event) {
        console.log(event)
      },
      onEnable: function (event) {
        console.log(event)
      },
      onDisable: function (event) {
        console.log('disable')
      }
    }
  }
</script>

<style type="text/css" scoped>
*{
  font-family: bentonlight;
}

.layout-white .page{
  background: #f7f7f8;
}

.layout-white .navbar{
  background-color: #f7f7f8;
}
.layout-white .searchbar{
  margin-bottom: 10px;
}
.searchbuttons{
  background: #4cd964;
  color:white !important;
}
.navbar .center{
  font-family: bentonlight;
}

.navbar .center>span{
  font-family: bentonmedium;
}
.searchbar{
  background: white !important;
  padding: 40px;
}

.card-footer{
  display: inherit;
}

.search{
  padding: 0px 10px;
}


</style>
