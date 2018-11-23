<template>
  <d-container fluid>
    <d-row>
      <!-- Main Sidebar -->
      <proposal-sidebar :items="sidebarItems"/>

      <d-col class="main-content offset-lg-2 offset-md-3" tag="main" lg="10" md="9" sm="12">

        <!-- Main Navbar -->
        <main-navbar/>

        <!-- Content -->
        <slot/>

        <!-- Main Footer -->
        <main-footer/>
      </d-col>

    </d-row>
  </d-container>
</template>

<script>


  // Main layout components
  import MainNavbar from '@/components/layout/MainNavbar/ProposalNavbar.vue';
  import ProposalSidebar from '@/components/layout/MainSidebar/ProposalSidebar.vue';
  import MainFooter from '@/components/layout/MainFooter/MainFooter.vue';

const ReturnHome = {
  title: 'Back To Propsal',
  htmlBefore: '<i class="material-icons">arrow_back</i>',
  to: {
    name: 'profile',
  },
};
  export default {
    name: 'BrowseManagers',
    components: {
      MainNavbar,
      ProposalSidebar,
      MainFooter,
    },
    data() {
      return {
        sidebarItems: [ReturnHome, {
          title: 'Q/A with this Manager',
          htmlBefore: '<i class="material-icons">person</i>',
          to: {
            name: 'profile',
          },
        }],
      };
},
  };
</script>

