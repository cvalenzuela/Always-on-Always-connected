export default [
  {
    path: '/about/',
    component: require('./pages/About.vue')
  },
  {
    path: '/chat/:question',
    component: require('./pages/Chat.vue')
  }
]
