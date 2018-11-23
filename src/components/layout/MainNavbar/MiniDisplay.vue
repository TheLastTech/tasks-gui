<template>


  <div class="main-navbar__search w-100 d-none d-block   d-md-flex d-lg-flex">

    <p   v-if="Manager && Manager.email" class="CenteredText"> {{Manager.firstName}} {{Manager.lastName}} {{Manager.email}} </p>

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
    //  this.$eventHub.$off('VisibleManagerChange', this.ManagerChanged.bind(this));
    },
    methods: {

      ManagerChanged(NewManager) {

        this.Manager = NewManager;
      },
    },
  };
</script>
