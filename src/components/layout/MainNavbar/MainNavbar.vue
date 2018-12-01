<template>
  <div :class="['main-navbar', 'bg-white', stickyTop ? 'sticky-top' : '']">
    <d-navbar type="light" class="align-items-stretch flex-md-nowrap p-0">
      <top-nav-bar/>
      <navbar-toggle/>
    </d-navbar>
  </div>
</template>

<script>
  import MainHeaderLinks from './MainHeaderLinks.vue';
  import NavbarNav from './NavbarNav.vue';
  import NavbarToggle from './NavbarToggle.vue';
  import TopNavBar from './TopNavBar.vue';

  export default {
    components: {
      TopNavBar,
      MainHeaderLinks,
      NavbarNav,
      NavbarToggle,
    },
    props: {
      /**
       * Whether the main navbar should be sticky, or not.
       */
      stickyTop: {
        type: Boolean,
        default: true,
      },
    },
  };
</script>

<style lang="scss">

</style>
