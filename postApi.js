import { createApp } from './vue.esm-browser.js'

window.app = createApp({
  data: () => ({
   
   

    usersList: [
   
    ],

   
  }),

  created() {
    this.loadUsersFromApi()
  },

  methods: {
    loadUsersFromApi() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {
          this.usersList = users
        })
    }
  }
}).mount('#app')