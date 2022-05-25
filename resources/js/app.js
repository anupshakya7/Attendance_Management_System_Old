require('./bootstrap');
import router from './router'
import VueRouter from 'vue-router'
import Vue from 'vue';
import Vuelidate from 'vuelidate'
// import VueGoogleCharts from 'vue-google-charts'

window.Vue = require('vue').default;
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.use(Vuelidate);
Vue.use(VueRouter);
// Vue.use(VueGoogleCharts);

const app = new Vue({
    el: '#app',
    router
});
