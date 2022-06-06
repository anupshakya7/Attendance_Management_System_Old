require('./bootstrap');
import router from './router'
import VueRouter from 'vue-router'
import Vue from 'vue';
import Vuelidate from 'vuelidate'
import moment from "moment"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import VueGoogleCharts from 'vue-google-charts'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue'


Vue.filter("dateFormat", function (value) {
    if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
    }
})
window.Vue = require('vue').default;
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.use(VueGoogleCharts);

const app = new Vue({
    el: '#app',
    router
});
