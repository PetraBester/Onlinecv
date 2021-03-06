
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import vueResource from 'vue-resource';

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(vueResource);

Vue.component('example', require('./components/Example.vue'));
Vue.component('register', require('./components/Register.vue'));
Vue.component('studentprofile', require('./components/StudentProfile.vue'));

const app = new Vue({
    el: '#app'
});


