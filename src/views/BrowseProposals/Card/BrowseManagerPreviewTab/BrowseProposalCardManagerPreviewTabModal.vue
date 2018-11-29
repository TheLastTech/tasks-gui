<template>
  <div>
    <d-modal v-if="ShowModal" size="lg" @close="ShowModal = false">
      <d-modal-header>
        <d-modal-title>{{ Manager.firstName }} {{ Manager.lastName }}</d-modal-title>
      </d-modal-header>
      <d-modal-body>
        <browse-proposal-card-manager-tab-content :manager="Manager"  />
      </d-modal-body>
    </d-modal>
    <a @click="ShowModal = true">
      <d-img fluid fluid-grow rounded thumbnail :src="Manager.avatar" class="mb-2"/>
      {{ Manager.firstName }} {{ Manager.lastName }}
    </a>
  </div>
</template>
<script>
  import BrowseProposalCardManagerTabContent from './BrowseProposalCardManagerTabContent.vue';

  export default {
    name: 'browse-proposal-card-manager-preview-tab-modal',
    components: { BrowseProposalCardManagerTabContent },
    props: {
      Manager: {},

    },
    data() {
      return {
        ShowModal: false,
      };
    },
  };
</script>
