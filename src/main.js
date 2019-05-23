import Vue from 'vue'
//import vue router
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Authors from './views/Authors.vue'
import Teachers from './views/Teachers.vue'

//execute the Use Method on the Vue Object to use plugins such as the Vue Router
Vue.use(VueRouter);

//setting up a variable to reference an array containing our routes. Each route is a JavaScript object. We configure a route by adding a JavaScript object to this array. Each route will have a path, which is the path that begins after the domain. E.g. for vickigrant.com/about the path is '/about'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/authors',
    name: 'Authors',
    component: Authors
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: Teachers
  }
]

//now that we have the routes configured with need to get the routes into our application. To do this we create a variable that points to a new instance of the VueRouter and pass it an object containing the routes
const router = new VueRouter({
  routes: routes
})

Vue.config.productionTip = false

//now that we've set up the VueRouter with the routes we need to add the VueRouter to our root Vue instance
new Vue({
  el: '#app',
  //here the router that we declared above is being added to the root Vue instance
  router: router,
  render: h => h(App),
}).$mount('#app')
