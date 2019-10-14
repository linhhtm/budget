import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
 
import App from './App.vue';
import Index from './Index.vue';

Vue.use(VueRouter)
const routes = [
  {
        name: '',
        path: '/',
        component: Index,
  },
];
const router = new VueRouter({ mode: 'history', routes: routes});

//nhet App obj vao router obj
new Vue(Vue.util.extend({ router }, App )).$mount('#wrap');



