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
//fonts

import typeface_merriweather from "typeface-merriweather";
import typeface_archivo_narrow from "typeface-archivo-narrow";
import {RpcServer} from "./rpc/rpc";

ShardsVue.install(Vue);

Vue.component('BrowseManager-layout',BrowseManagers)
Vue.component('default-layout', Default);
Vue.component('Search-layout', Search);
Vue.component('NoAuth-layout', NoAuth);

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();
Vue.prototype.$RpcServer = RpcServer

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
