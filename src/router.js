/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';

import ComponentsOverview from './views/Unused/ComponentsOverview.vue'
import ProposalOverview from './views/Unused/ProposalOverview.vue'
import UserProfile from './views/UserProfile/UserProfile.vue'
import Login from './views/Login/Login.vue';

import ManagerQaRooms from './views/Proposal/Manager/QA/ManagerQaRooms.vue'
import ManagerInterviewRooms from './views/Proposal/Manager/Applications/ManagerApplications.vue'
import ManagerList from './views/Proposal/Manager/ManagerList.vue'
import CreateProposal from './views/UserPropose/UserPropose.vue'
import Proposals from './views/Proposal/Proposal.vue'
import BrowseProposals from './views/BrowseProposals/BrowseProposals.vue'

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
      meta: {layout: 'NoAuth'},
    },
    {
      path: '/person/:ID',
      name: 'person',
      component: UserProfile,
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserProfile,
    },
    {
      path: '/proposeproj',
      name: 'proposalproject',
      component: CreateProposal
    }, {
      path: '/proposal-overview',
      name: 'proposal-overview',
      component: ProposalOverview
    }, {
      path: '/browse-proposals',
      name: 'browse-proposals',
      component: BrowseProposals,
      meta: {
        layout: 'Search'
      }
    }, {
      path: '/proposal/:pId',
      name: 'proposal',
      component: Proposals,

    }, {
      path: '/dev-lib',
      name: 'library',
      component: ComponentsOverview
    },{
      path: '/proposal-managers-list',
      name: 'managerslist',
      component: ManagerList,
      meta: {
        layout: 'BrowseManager'
      }

    },
    {
      path: '/proposal-managers',
      name: 'managerinterviewroom',
      component: ManagerInterviewRooms,
      meta: {
        layout: 'BrowseManager'
      }

    },{
      path: '/proposal-managers-qa',
      name: 'managerqaroom',
      component: ManagerQaRooms,
      meta: {
        layout: 'BrowseManager'
      }

    },
  ],
});
