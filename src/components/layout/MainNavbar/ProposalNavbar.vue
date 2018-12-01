<template>
  <div :class="['main-navbar', 'bg-white', stickyTop ? 'sticky-top' : '']">
    <d-navbar type="light" class="align-items-stretch flex-md-nowrap p-0">
      <mini-display />
      <navbar-nav />
      <navbar-toggle />
    </d-navbar>
  </div>
</template>

<script>
import MiniDisplay from './MiniDisplay.vue';
import NavbarNav from '../MainNavbar/NavbarNav.vue';
import NavbarToggle from './NavbarToggle.vue';

export default {
  components: {
    MiniDisplay,
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
