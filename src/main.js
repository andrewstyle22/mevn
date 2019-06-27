import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeComponent,
  },
  {
    name: 'create',
    path: '/create',
    component: CreateComponent,
  },
  {
    name: 'posts',
    path: '/posts',
    component: IndexComponent,
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: EditComponent,
  },
];

const router = new VueRouter({ mode: 'history', routes });

new Vue(Vue.util.extend({ router }, App)).$mount('#app');

new Vue({
  render: h => h(App),
}).$mount('#app');
