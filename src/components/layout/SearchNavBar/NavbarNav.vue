<template>
  <top-nav-bar />
</template>

<style>
  .nav-link:hover {
    cursor: pointer;
  }
</style>
<script>
  import TopNavBar from '../MainNavbar/TopNavBar.vue';

  export default {
    components: { TopNavBar },
  };
</script>
