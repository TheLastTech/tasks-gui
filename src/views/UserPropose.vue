<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <!-- Page Title -->
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">Propose Project</span>
        <h3 class="page-title">Suggest New Proposal</h3>
      </d-col>
    </d-row>

    <d-row>
      <!-- Editor -->
      <d-col lg="9" md="12">
        <proposal-editor/>
      </d-col>

      <!-- Sidebar Widgets -->
      <d-col lg="3" md="12">
        <proposal-sidebar-actions/>
        <proposal-sidebar-categories/>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import ProposalSidebarActions from '@/components/proposal-editor/SidebarActions.vue';
import ProposalSidebarCategories from '@/components/proposal-editor/SidebarCategories.vue';
import ProposalEditor from '@/components/proposal-editor/Editor.vue';

import 'quill/dist/quill.snow.css';

export default {
  components: {
    ProposalEditor,
    ProposalSidebarActions,
    ProposalSidebarCategories,

  },
};
</script>
