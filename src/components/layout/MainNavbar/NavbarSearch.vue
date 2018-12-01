<template>
  <d-form class="main-navbar__search w-75 d-none d-md-flex d-lg-flex">


    <d-input-group class="ml-3" seamless>
      <d-input-group-text slot="prepend">
        <i class="material-icons">search</i>
      </d-input-group-text>
      <d-input @input="EmitTopSearchInput" class="navbar-search" placeholder="Search for something..."/>
    </d-input-group>
  </d-form>
</template>
<script>


  export default {
    methods:
      {
        EmitTopSearchInput(e) {
          this.$eventHub.$emit('NavBarSearchType', e);
        },
      },
  };
</script>
