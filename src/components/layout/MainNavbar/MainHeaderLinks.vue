<template>
  <div class="w-100">
    <d-form class="main-navbar__search w-75 d-none d-md-flex d-lg-flex">


    </d-form>
    <top-nav-bar  />
  </div>
</template>

<script>
  import TopNavBar from './TopNavBar.vue';

  export default {
    components: { TopNavBar },
  };
</script>
