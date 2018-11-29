<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Open Projects</span>
        <h3 class="page-title">
          {{ LanguageFilterString }} {{ FinanceFilterString }} {{ SkillsFilterString }}
        </h3>

      </div>
    </div>
    <d-row>
      <d-col lg="12" md="12" sm="12" class="mb-4">
    <!--    <browse-proposal-filter @LanguageFiltersChanged="LanguageFiltersChanged"
                                @JobSkillFiltersChanged="JobSkillFiltersChange"
                                @FinanceFiltersChanged="FinanceFiltersChanged"/> -->
      </d-col>
    </d-row>
    <!-- First Row of Posts -->
    <d-row>
      <d-col v-for="(Proposal, idx) in PList" :key="idx" xl="4" lg="6" sm="12">
        <d-card class="card-small  card-post card-post--1">
          <div @click="()=>GotoProposal(Proposal)" class="card-post__image"
               :style="{ backgroundImage: 'url(\'' + Proposal.backgroundImage + '\')' }">
            <d-badge pill :class="['card-post__category', 'bg-' + Proposal.categoryTheme ]">{{ Proposal.category }}
            </d-badge>
            <div class="card-post__author d-flex">
              <a class="card-post__author-avatar card-post__author-avatar--small"
                 :style="{ backgroundImage: 'url(\'' + Proposal.authorAvatar + '\')' }">Written by {{ Proposal.author
                }}</a>
            </div>
          </div>
          <d-card-body class="mx-auto text-center w-100">

            <d-tabs @input="(tab)=>TabChanged(Proposal,idx,tab)" card pills nav-class="list-inline mx-auto justify-content-center" content-class="h-100">
              <d-tab title="Overview" active>
                <browse-proposal-card-overview-tab :post="Proposal"/>
              </d-tab>
              <d-tab title="Finances">
                <browse-proposal-card-finance-tab :post="Proposal"/>
              </d-tab>
              <d-tab title="Manager">
                <browse-proposal-card-manager-preview-tab :PledgeManager="PledgeManagers[idx]"/>
              </d-tab>
              <d-tab title="Pledge">
                <browse-proposal-card-pledge-tab/>
              </d-tab>
            </d-tabs>
            <d-button-group>
              <d-button href="https://twitter.com/intent/tweet?button_hashtag=ThisProjectName&ref_src=twsrc%5Etfw"
                        data-show-count="false">
                <i class="fab fa-2x fa-twitter"></i>
              </d-button>
              <d-button href="https://linkedin.com/">
                <i class="fab fa-2x fa-linkedin"></i>
              </d-button>
              <d-button href="https://slack.com">
                <i class="fab fa-2x fa-slack"></i>
              </d-button>
            </d-button-group>

          </d-card-body>
        </d-card>
      </d-col>
    </d-row>

  </d-container>
</template>

<script>
  // First Row of Posts
  import router from '@/router';
  import { RpcServer } from '@/rpc/rpc';
  import BrowseProposalCardOverviewTab from './Card/BrowseProposalCardOverviewTab.vue';
  import BrowseProposalCardPledgeTab from './Card/BrowseProposalCardPledgeTab.vue';
  import BrowseProposalCardFinanceTab from './Card/BrowseProposalCardFinanceTab.vue';
  import BrowseProposalCardManagerPreviewTab from './Card/BrowseProposalCardManagerPreviewTab.vue'
  import BrowseProposalFilter from './BrowseProposalFilter.vue';
  import BrowseProposalCardManagerTab from './Card/BrowseProposalCardManagerTab.vue';


  const PostsListOne = RpcServer.GetProposals(12);
  const PledgeManagers = {};
  for (let i = 0; i < PostsListOne.length; i++) {
    PledgeManagers[i] = RpcServer.GetManagers();
  }
  console.log(PledgeManagers);
  // Second Row of posts
  const PostsListTwo = RpcServer.GetProposals(6);

  // Third Row of Posts
  const PostsListThree = RpcServer.GetProposals(3);

  const PostsListFour = RpcServer.GetProposals(4);

  export default {
    components: {
      BrowseProposalCardManagerTab,
      BrowseProposalFilter,
      BrowseProposalCardFinanceTab,
      BrowseProposalCardPledgeTab,
      BrowseProposalCardOverviewTab,
      BrowseProposalCardManagerPreviewTab
    },
    data() {
      return {
        PostsListOne,
        PList: PostsListTwo,
        PostsListThree,
        PostsListFour,
        PledgeManagers,
        LanguagesSelected: [],
        SkillsSelected: [],
        FinanceFilter: {
          TokenMin: '', TokenMax: '', ContributorMin: '', ContributorMax: '', Manager: '',
        },
        SearchFilter: '',
        NavBarSearchFunction: null,
      };
    },
    beforeDestroy() {
    //  this.$eventHub.$off('NavBarSearchType', this.NavBarSearchFunction);
    },
    mounted() {
      this.NavBarSearchFunction = this.NavBarSearchType.bind(this);
      this.$eventHub.$on('NavBarSearchType', this.NavBarSearchFunction);
    },
    computed: {
      LanguageFilterString: {

        get() {
          return this.LanguagesSelected.join(', ');
        },

        set(newValue) {
          this.LanguagesSelected = newValue;
        },
      },

      SkillsFilterString: {

        get() {
          return this.SkillsSelected.join(', ');
        },

        set(newValue) {
          this.SkillsSelected = newValue;
        },
      },
      FinanceFilterString: {

        get() {
          const {
            TokenMin, TokenMax, ContributorMin, ContributorMax, Manager,
          } = this.FinanceFilter;
          console.log(this.FinanceFilter);
          const FinanceFilters = [];
          if (TokenMin.length > 0) {
            FinanceFilters.push(`Token Minimum: ${TokenMin}`);
          }
          if (TokenMax.length > 0) {
            FinanceFilters.push(`Token Maximum: ${TokenMax}`);
          }
          if (ContributorMin.length > 0) {
            FinanceFilters.push(`Contributor Minimum: ${ContributorMin}`);
          }
          if (ContributorMax.length > 0) {
            FinanceFilters.push(`Contributor Maximum: ${ContributorMax}`);
          }
          if (Manager.length > 0) {
            FinanceFilters.push(`Manager: ${Manager}`);
          }
          return FinanceFilters.join(' ,');
        },

        set(newValue) {
          this.FinanceFilter = newValue;
        },
      },
    },

    methods: {
      GotoProposal(Proposal) {

        router.push(`/proposal/${Proposal.id}`);
      },
      JobSkillFiltersChange(NewFilters) {
        this.SkillsFilterString = NewFilters;
        this.PostsListOne = RpcServer.GetProposals(4);
        this.PList = RpcServer.GetProposals(2);
        this.PostsListThree = RpcServer.GetProposals(3);
        this.PostsListFour = RpcServer.GetProposals(4);
      },
      FinanceFiltersChanged(NewFilters) {
        this.FinanceFilterString = NewFilters;
        this.PostsListOne = RpcServer.GetProposals(4);
        this.PList = RpcServer.GetProposals(2);
        this.PostsListThree = RpcServer.GetProposals(3);
        this.PostsListFour = RpcServer.GetProposals(4);
      },
      LanguageFiltersChanged(NewFilters) {
        this.LanguageFilterString = NewFilters;
        this.PostsListOne = RpcServer.GetProposals(4);
        this.PList = RpcServer.GetProposals(2);
        this.PostsListThree = RpcServer.GetProposals(3);
        this.PostsListFour = RpcServer.GetProposals(4);
      },
      TabChanged(post, idx, tab) {
        if (tab === 2) // all we get is index 0 based
        {
          this.PledgeManagers[idx] = RpcServer.GetManagers();
        }
      },
      NavBarSearchType(Text) {
        if (this.SearchFilter === Text) return;
        this.SearchFilter = Text;
        this.PostsListOne = RpcServer.GetProposals(4);
        this.PList = RpcServer.GetProposals(2);
        this.PostsListThree = RpcServer.GetProposals(3);
        this.PostsListFour = RpcServer.GetProposals(4);
      },
    },
  };

</script>

