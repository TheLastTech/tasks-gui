<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">{{ Proposal.title }} </span>


      </div>
    </div>

    <d-row>
      <d-col xl="12" lg="12" sm="12">
        <d-card class="card  card-post card-post--1">
          <proposal-header :proposal="Proposal"/>
          <d-card-body class="mx-auto text-center w-100">
            <d-tabs @input="(tab)=>TabChanged(Proposal,tab)" card pills  nav-class="list-inline mx-auto justify-content-center" content-class="h-100">
              <d-tab title="Overview" active>
                <proposal-card-overview-tab :post="Proposal"/>
              </d-tab>
              <d-tab title="Finances">
                <proposal-card-finance-tab :post="Proposal"/>
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
  /* eslint-disable brace-style */

  // First Row of Posts

  import router from '@/router';
  import ProposalCardOverviewTab from './Tab/ProposalCardOverviewTab.vue';
  import ProposalCardPledgeTab from './Tab/ProposalCardPledgeTab.vue';
  import ProposalCardFinanceTab from './Tab/ProposalCardFinanceTab.vue';
  import ProposalCardSettingsTab from './Tab/ProposalCardSettingsTab.vue';
  import ProposalHeader from "./ProposalHeader";


  // Second Row of posts


  export default {
    components: {
      ProposalHeader,
      ProposalCardSettingsTab,
      ProposalCardFinanceTab,
      ProposalCardPledgeTab,
      ProposalCardOverviewTab,
    },
    data() {
      return {
        Proposal: this.$RpcServer.GetProposals(1)[0],
        PledgeManagers: this.$RpcServer.GetManagers(),
      };
    },


    methods: {
      GotoManagers() {
               router.push('/proposal-managers');
      },
      TabChanged(post, idx, tab) {
        if (tab === 2) // all we get is index 0 based
        {
          this.PledgeManagers = this.$RpcServer.GetManagers();
        }
      },

    },
  };

</script>

