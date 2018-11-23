/* eslint-disable */
import Vue from 'vue';
import ShardsVue from 'shards-vue';
// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/tasks-main.scss';
import '@/assets/scss/date-range.scss';
// Core
import App from './App.vue';
import router from './router';
// Layouts
import Default from '@/layouts/Default.vue';
import Search from '@/layouts/Search.vue';
import NoAuth from '@/layouts/NoAuth.vue';
import BrowseManagers from '@/layouts/BrowseManagers.vue'

import {RpcServer} from "./rpc/rpc";
import VueMitter from "./VueMitter.js";
//fonts

ShardsVue.install(Vue);

Vue.component('BrowseManager-layout', BrowseManagers)
Vue.component('default-layout', Default);
Vue.component('Search-layout', Search);
Vue.component('NoAuth-layout', NoAuth);

Vue.config.productionTip = false;
Vue.prototype.$eventHub = window?window.mitter?window.mitter:window.mitter= new VueMitter():new VueMitter();
Vue.prototype.$RpcServer = RpcServer

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
