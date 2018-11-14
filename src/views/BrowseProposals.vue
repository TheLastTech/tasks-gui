<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Open Projects</span>
        <h3 class="page-title">{{ FilterString }}</h3>
      </div>
    </div>
    <d-row>
      <d-col lg="12" md="12" sm="12" class="mb-4">
        <browse-proposal-filter @LanguageFiltersChanged="LanguageFiltersChanged"/>
        <d-badge v-for="(filter,idx) in LanguagesSelected" :key="idx" pill theme="secondary">{{ filter }}</d-badge>

      </d-col>
    </d-row>
    <!-- First Row of Posts -->
    <d-row>
      <d-col v-for="(post, idx) in PostsListTwo" :key="idx" xl="4" lg="6"  sm="12">
        <d-card class="card-small  card-post card-post--1">
          <div class="card-post__image" :style="{ backgroundImage: 'url(\'' + post.backgroundImage + '\')' }">
            <d-badge pill :class="['card-post__category', 'bg-' + post.categoryTheme ]">{{ post.category }}
            </d-badge>
            <div class="card-post__author d-flex">
              <a href="#" class="card-post__author-avatar card-post__author-avatar--small"
                 :style="{ backgroundImage: 'url(\'' + post.authorAvatar + '\')' }">Written by {{ post.author }}</a>
            </div>
          </div>
          <d-card-body>
            <d-tabs card pills vertical>
              <d-tab title="Project Overview" active>

                <browse-proposal-card-overview-tab :post="post"/>
              </d-tab>
              <d-tab title="Share">
                <browse-proposal-card-share-tab/>
              </d-tab>
              <d-tab title="Finances">
                <browse-proposal-card-finance-tab/>
              </d-tab>
              <d-tab title="Manager">
                <div/>
              </d-tab>
              <d-tab title="Pledge">
                <browse-proposal-card-pledge-tab/>
              </d-tab>
            </d-tabs>
            <d-card-footer class="border-top d-flex">

              <div class="my-auto ml-auto">
                <d-button size="sm" class="btn-white">
                  <i class="far fa-bookmark mr-1"></i> Bookmark
                </d-button>
              </div>
            </d-card-footer>
          </d-card-body>
        </d-card>
      </d-col>
    </d-row>

  </d-container>
</template>

<script>
  // First Row of Posts
  import {RpcServer} from '../rpc/rpc';
  import BrowseProposalCardOverviewTab from './BrowseProposalCardOverviewTab';
  import BrowseProposalCardPledgeTab from './BrowseProposalCardPledgeTab';
  import BrowseProposalCardFinanceTab from './BrowseProposalCardFinanceTab';
  import BrowseProposalFilter from './BrowseProposalFilter';
  import BrowseProposalCardShareTab from "./BrowseProposalCardShareTab";

  const PostsListOne = RpcServer.GetProposals(12);

  // Second Row of posts
  const PostsListTwo = RpcServer.GetProposals(6);

  // Third Row of Posts
  const PostsListThree = RpcServer.GetProposals(3);

  const PostsListFour = RpcServer.GetProposals(4);

  export default {
    components: {
      BrowseProposalCardShareTab,
      BrowseProposalFilter,
      BrowseProposalCardFinanceTab,
      BrowseProposalCardPledgeTab,
      BrowseProposalCardOverviewTab,
    },
    data() {
      return {
        PostsListOne,
        PostsListTwo,
        PostsListThree,
        PostsListFour,
        LanguagesSelected: [],
      };
    },
    computed: {
      FilterString: {

        get() {
          return this.LanguagesSelected.join(', ');
        },

        set(newValue) {

          this.LanguagesSelected = newValue;
        },
      },
    },
    methods: {
      LanguageFiltersChanged(NewFilters) {

        this.FilterString = NewFilters;
        this.PostsListOne = RpcServer.GetProposals(4);
        this.PostsListTwo = RpcServer.GetProposals(2);
        this.PostsListThree = RpcServer.GetProposals(3);
        this.PostsListFour = RpcServer.GetProposals(4);
      },
    },
  };
</script>

