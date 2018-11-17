<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">{{ Proposal.title }}</span>
        <h3 class="page-title">

        </h3>

      </div>
    </div>

    <d-row>
      <d-col xl="12" lg="12" sm="12">
        <d-card class="card  card-post card-post--1">
          <div class="card-post__image" :style="{ backgroundImage: 'url(\'' + Proposal.backgroundImage + '\')' }">
            <d-badge pill :class="['card-post__category', 'bg-' + Proposal.categoryTheme ]">{{ Proposal.category }}
            </d-badge>
            <div class="card-post__author d-flex">
              <a href="#" class="card-post__author-avatar card-post__author-avatar--small"
                 :style="{ backgroundImage: 'url(\'' + Proposal.authorAvatar + '\')' }">Written by {{ Proposal.author
                }}</a>
            </div>
          </div>
          <d-card-body>
            <d-tabs @input="(tab)=>TabChanged(Proposal,tab)" card pills>
              <d-tab title="Project Overview" active>
                <proposal-card-overview-tab :post="Proposal"/>
              </d-tab>
              <d-tab title="Finances">
                <proposal-card-finance-tab :post="Proposal"/>
              </d-tab>
              <d-tab title="Manager" :no-body="true" @click="GotoManagers">

              </d-tab>
              <d-tab title="Pledge">
                <proposal-card-pledge-tab/>
              </d-tab>
              <d-tab title="Settings">
                <proposal-card-settings-tab/>
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
  import { RpcServer } from '@/rpc/rpc';
  import router from '@/router';
  import ProposalCardOverviewTab from './Card/ProposalCardOverviewTab.vue';
  import ProposalCardPledgeTab from './Card/ProposalCardPledgeTab.vue';
  import ProposalCardFinanceTab from './Card/ProposalCardFinanceTab.vue';
  import ProposalCardManagerTab from './Card/ProposalCardManagerTab.vue';
  import ProposalCardSettingsTab from './Card/ProposalCardSettingsTab';


  // Second Row of posts


  export default {
    components: {
      ProposalCardSettingsTab,
      ProposalCardManagerTab,
      ProposalCardFinanceTab,
      ProposalCardPledgeTab,
      ProposalCardOverviewTab,
    },
    data() {
      return {
        Proposal: RpcServer.GetProposals(1)[0],
        PledgeManagers: RpcServer.GetManagers(),
      };
    },


    methods: {
      GotoManagers() {
               router.push('/proposal-managers');
      },
      TabChanged(post, idx, tab) {
        if (tab === 2) // all we get is index 0 based
        {
          this.PledgeManagers = RpcServer.GetManagers();
        }
      },

    },
  };

</script>

