<template>
  <d-col lg="12" sm="12" class="mb-4">
    <manager-mobile-pfp :manager="Manager" />
    <d-card class="card-small card-post card-post--aside card-post--1">
      <div class="card-post__image d-none d-sm-block d-md-block" :style="{ backgroundImage: 'url(\'' + Manager.avatar + '\')' }">

      </div>
      <d-card-body>
        <h5 class="card-title">
          <small class="muted">{{ Manager.firstName }} {{ Manager.lastName }} -&nbsp;</small>
          <a class="text-fiord-blue" href="#">{{ Manager.ManagerPledge.tokens }} Tokens</a>
        </h5>
        <p class="card-text d-inline-block mb-3">{{ Manager.ManagerPledge.blurb}}</p>
        <span class="text-muted">Submitted: {{ Manager.ManagerPledge.pledgeDate }}</span>
        <d-card-footer class="border-top">
          <d-badge class="mb-2 mr-md-2 mr-2" :key="badgeindex" v-for="(Badge,badgeindex) in Manager.ManagerPledge.badges">{{ Badge }}
          </d-badge>
        </d-card-footer>
      </d-card-body>

    </d-card>
  </d-col>
</template>
<script>
  import ManagerMobilePfp from '../../../Proposal/Manager/ManagerMobilePfp.vue';

  export default {
    name: 'browse-proposal-card-manager-tab-content',
    components: { ManagerMobilePfp },
    props: {
      Manager: {},

    },
  };
</script>
