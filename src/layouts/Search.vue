<template>
  <d-container fluid>
    <d-row>
      <!-- Main Sidebar -->

      <d-col class="main-content   p-0" tag="main" lg="12" md="12" sm="12">

        <!-- Main Navbar -->
        <search-nav-bar/>

        <!-- Content -->
        <slot/>

        <!-- Main Footer -->
        <main-footer/>
      </d-col>

    </d-row>
  </d-container>
</template>

<script>
import getSidebarItems from '@/data/sidebar-nav-items';
// Main layout components
import SearchNavBar from '@/components/layout/MainNavbar/SearchNavBar.vue';
import MainSidebar from '@/components/layout/MainSidebar/MainSidebar.vue';
import MainFooter from '@/components/layout/MainFooter/MainFooter.vue';

export default {
  name: 'analytics',
  components: {
    SearchNavBar,
    MainSidebar,
    MainFooter,
  },
  data() {
    return {

    };
  },
};
</script>

