<template>
  <f7-panel left reveal layout="dark">
    <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
      <f7-navbar title="Something|Someone"></f7-navbar>
      <f7-pages>
        <f7-page>
          <f7-block inner>
            <p>A human based search engine.</p>
          </f7-block>
          <f7-block-title>Profile</f7-block-title>
          <f7-list>
            <f7-list-item link="/about/" title="Log In"></f7-list-item>
            <f7-list-item link="/form/" title="Profile"></f7-list-item>
            <f7-list-item link="/form/" title="Expert Topics"></f7-list-item>
            <f7-list-item link="/form/" title="Suscribed Chips"></f7-list-item>
            <f7-list-item link="/form/" title="All Chips"></f7-list-item>
            <f7-list-item link="/form/" title="Location based"></f7-list-item>
          </f7-list>
          <f7-block-title>S|S</f7-block-title>
          <f7-list>
            <f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
            <f7-list-item link="/form/" title="Lear More" link-view="#main-view" link-close-panel></f7-list-item>
          </f7-list>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-panel>
</template>

<script>
  module.exports = {}
</script>
