<template>
  <d-row >
    <d-col :key="idx" v-for="(Manager, idx) in PledgeManager" xl="2" lg="2" md="2" sm="2">
      <browse-proposal-card-manager-preview-tab-modal :manager="Manager" />
    </d-col>
  </d-row>
</template>
<script>
  import BrowseProposalCardManagerPreviewTabModal from './BrowseManagerPreviewTab/BrowseProposalCardManagerPreviewTabModal.vue';

  export default {
    components: { BrowseProposalCardManagerPreviewTabModal },
    props: {
      PledgeManager: { type: Array },
    },
    mounted() {
      console.log(this.PledgeManagers);
    },
    methods: {
      ShowThisManager(Manager) {
        Manager.ShowModal = true;
      },
    },
    name: 'browse-proposal-card-manager-tab',
  };
</script>
