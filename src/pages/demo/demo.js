import Vue from 'vue';
import App from './demo.vue';

const Main = Vue.component('app', App);

const main = new Main({
  el: '#app'
});
