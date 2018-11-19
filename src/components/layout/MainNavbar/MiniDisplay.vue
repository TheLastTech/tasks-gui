<template>


  <div v-if="Manager.email" class="main-navbar__search w-100 d-none d-block   d-md-flex d-lg-flex">

    <p class="CenteredText"> {{Manager.firstName}} {{Manager.lastName}} {{Manager.email}} </p>

  </div>
</template>
<style>

  .CenteredText {
    margin: 0;

    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
  }
</style>
<script>


  export default {
    data() {
      return {
        Manager: {},
      };
    },
    mounted() {
      this.$eventHub.$on('VisibleManagerChange', this.ManagerChanged.bind(this));
    },
    beforeDestroy() {
      this.$eventHub.$off('VisibleManagerChange', this.NavBarSearchFunction);
    },
    methods: {

      ManagerChanged(NewManager) {
        this.Manager = NewManager;
      },
    },
  };
</script>
