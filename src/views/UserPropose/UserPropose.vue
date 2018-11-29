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
  import 'quill/dist/quill.snow.css';
  import ProposalSidebarActions from './proposal-editor/SidebarActions.vue';
  import ProposalSidebarCategories from './proposal-editor/SidebarCategories.vue';
  import ProposalEditor from './proposal-editor/Editor.vue';


  export default {
    components: {
      ProposalEditor,
      ProposalSidebarActions,
      ProposalSidebarCategories,

    },
  };
</script>
