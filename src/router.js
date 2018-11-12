/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';

import UserProfile from './views/UserProfile.vue'
import Login from './views/Login.vue';
import CreateProposal from './views/UserPropose.vue'
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return {x: 0, y: 0};
  },
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { layout: 'NoAuth' },
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserProfile,
    },
    {
      path:'/proposeproj',
      name:'proposal',
      component:CreateProposal
    }
  ],
});
